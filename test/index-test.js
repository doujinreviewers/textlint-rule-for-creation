"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
import rule from "../src/textlint-rule-for-creation";
tester.run("textlint-rule-for-creation", rule, {
    valid: [
        { text: "text" },
        { text: "長さは可変だ" },
        { text: "人は1人では育つことができない" }
    ],
    invalid: [
        {
            text: "これは省略することが可能だが、省略しない。",
            errors: [
                {
                    message: `"することが可能だ"は冗長な表現です。"することが可能"を省き簡潔な表現にすると文章が明瞭になります。`,
                    index: 5
                }
            ]
        },
    ]
});