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

  async checkZyosi(tokenizer, text){
    let tokens = await tokenizer(text);
    if(!/終助詞/.test(tokens[1].pos_detail_1)
      && !(tokens[0].surface_form == "のみ" && /格助詞/.test(tokens[1].pos_detail_1))
      && !/連体化/.test(tokens[1].pos_detail_1)
      ){
      if(!arrow.zyosi.includes(tokens[0].surface_form + tokens[1].surface_form)){
        return true;
      }
    }
    return false;
  }

}

export default new EnhancedEngine();