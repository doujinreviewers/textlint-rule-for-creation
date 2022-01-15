const arrow = require('./dict/arrow');

class EnhancedEngine {

  constructor() {
  }

  async checkRetasu(tokenizer, text){
    if(/れ$/.test(text)){
      text += "る";
    }
    let tokens = await tokenizer(text);
    let meirei = await tokenizer(tokens[0].surface_form + "。");
    if(meirei[0].conjugated_form == "命令ｅ" || /五段/.test(meirei[0].conjugated_type)){
      // 「れる」を抜いても命令形で意味が通じるか、最初の文字が五段活用動詞になると多分れ足す言葉
      if(!arrow.jidousi_tadousi.includes(meirei[0].surface_form)){
        // 許可リストにもない
        return true;
      }
    }
    return false;
  }

  async checkZyosi(tokenizer, result, fulltext){
    let piece = fulltext.slice(result.range[0], result.range[1]);
    if(arrow.zyosi.includes(piece)){
      return false;
    }
    let fulltokens = await tokenizer(fulltext);
    let tokens = [];
    fulltokens.reduce((prev, current) => {
      if (prev.pos == "助詞" && current.pos == "助詞" && (current.pos_detail_2 == "一般" || current.pos_detail_2 == "*")) {
        if(prev.surface_form + current.surface_form == piece){
          tokens = [prev, current];
        }
      }
      return current;
    });
    if(new RegExp(tokens[0].surface_form.repeat(3) + "|" + tokens[0].surface_form.repeat(2) + "[～〜ー!！]").test(fulltext)){
      return false;
    }
    if(tokens[0].surface_form == tokens[1].surface_form){
      return true;
    }
    if((/終助詞/.test(tokens[0].pos_detail_1) || /終助詞/.test(tokens[1].pos_detail_1))
      || /接続助詞/.test(tokens[0].pos_detail_1)
      || (/のみ|から|だけ|とか|など|まで|ばかり|ばっかり|/.test(tokens[0].surface_form) && /格助詞/.test(tokens[1].pos_detail_1))
      || /連体化/.test(tokens[1].pos_detail_1)
      || ((/格助詞/.test(tokens[0].pos_detail_1) && /係助詞/.test(tokens[1].pos_detail_1)) && !/[をが]/.test(tokens[0].surface_form))
      || (/特殊/.test(tokens[0].pos_detail_1) || /特殊/.test(tokens[1].pos_detail_1))
      || (/引用/.test(tokens[0].pos_detail_2) && /接続助詞/.test(tokens[1].pos_detail_1))
      ){
      return false;
    }
    return true;
  }

}

export default new EnhancedEngine();