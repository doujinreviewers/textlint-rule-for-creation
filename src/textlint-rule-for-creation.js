import { createTextlintMatcher } from "morpheme-match-textlint";
import { tokenize } from "kuromojin";

const loadDictionaries = () => {
    // unavoidable
    let dict1 = require('./dict/dict');
    let dict2 = require('./dict/dict2');
    return dict1.concat(dict2)
}

const reporter = (context) => {
    const { Syntax, RuleError, fixer, report, getSource } = context;
    const matchAll = createTextlintMatcher({
        tokenize: tokenize,
        dictionaries: loadDictionaries()
    });
    return {
        [Syntax.Str](node) {
            const text = getSource(node);
            return matchAll(text).then(results => {
                results.forEach(result => {
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
                });
            });
        }
    };
};

export default {
    linter: reporter,
    fixer: reporter
};