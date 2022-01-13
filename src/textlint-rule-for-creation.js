import { createTextlintMatcher } from "morpheme-match-textlint";
import { tokenize } from "kuromojin";
import EnhancedEngine from "./enhanced-engine";

const loadDictionaries = () => {
  // unavoidable
  let dict1 = require('./dict/zyosi');
  let dict2 = require('./dict/gozidatuzi');
  let dict3 = require('./dict/retasu');
  let dict4 = require('./dict/sanuki');
  return dict1.concat(dict2, dict3, dict4);
}

const reporter = (context) => {
  const { Syntax, RuleError, fixer, report, getSource } = context;
  const matchAll = createTextlintMatcher({
    tokenize: tokenize,
    dictionaries: loadDictionaries()
  });
  const engine = EnhancedEngine
  return {
    [Syntax.Str](node) {
      return new Promise(async (resolve, reject) => {
        const text = getSource(node);
        let results = await matchAll(text);
        for (const result of results) {
          if(result.message == "れ足す言葉の可能性があります"){
            if(!(await engine.checkRetasu(tokenize, text.slice(result.range[0],result.range[1])))){
              continue;
            }
          }
          if (result.expected) {
            report(node, new RuleError(result.message, {
              index: result.index,
              fix: fixer.replaceTextRange(result.range, result.expected)
            }));
          } else {
            report(node, new RuleError(result.message, {
              index: result.index
            }));
          }
        }
        resolve();
      });
    }
  };
};

export default {
  linter: reporter,
  fixer: reporter
};