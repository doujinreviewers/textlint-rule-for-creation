const Romanizer = require('js-hira-kata-romanize');
const romajiConv = require('@koozaki/romaji-conv');

class EnhancedEngine {

  constructor() {
    this.romanizer = new Romanizer({
      chouon: Romanizer.CHOUON_CIRCUMFLEX,
      upper: Romanizer.UPPER_NONE
    });
  }

  romanize(hiraganaOrKatakana){
    return this.romanizer.romanize(hiraganaOrKatakana);
  }

  async checkRetasu(tokenizer, text){
    let tokens = await tokenizer(text);
    let result = await tokens.reduce(async (prev, current) => {
      if (this.isTargetVerb(prev) && this.isReruWord(current)) {
        let reading_roma = this.romanize(prev.reading);
        let roma = reading_roma.slice(0, -1) + "ar" + reading_roma.slice(-1) + this.romanize(current.reading);
        let token = await tokenizer(romajiConv(roma).toHiragana());
        if (!/五段/.test(token[0].conjugated_type) && /rere|rara/.test(roma)) {
          // 恐らくれ足す言葉
          return true;
        }
      }
      return false;
    });
    return result;
  }

  isTargetVerb(token) {
    return token.pos == "動詞" && token.conjugated_type == "一段";
  }

  isReruWord(token) {
    return token.pos == "動詞" && token.pos_detail_1 == "接尾" && token.basic_form == "れる";
  }

}

export default new EnhancedEngine();