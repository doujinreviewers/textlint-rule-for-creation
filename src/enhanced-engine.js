const Romanizer = require('js-hira-kata-romanize');
const romajiConv = require('@koozaki/romaji-conv');
const arrow = require('./dict/arrow');

class EnhancedEngine {

  constructor() {
    this.romanizer = new Romanizer({
      mapping: Romanizer.MAPPING_KUNREI,
      chouon: Romanizer.CHOUON_CIRCUMFLEX,
      upper: Romanizer.UPPER_NONE
    });
  }

  romanize(hiraganaOrKatakana){
    return this.romanizer.romanize(hiraganaOrKatakana);
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

}

export default new EnhancedEngine();