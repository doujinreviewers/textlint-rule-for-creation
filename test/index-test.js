"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
import rule from "../src/textlint-rule-for-creation";
tester.run("textlint-rule-for-creation", rule, {
  valid: [
    { text: "付けれる" },
    { text: "出れる" },
    { text: "見れる" },
    { text: "食べれる" },
    { text: "来れる" },
    { text: "着れる" },
    { text: "起きれる" },
    { text: "決めれる" },
    { text: "開けれる" },
    { text: "開けれない" },
    { text: "付けれない" },
    { text: "出れない" },
    { text: "見れない" },
    { text: "食べれない" },
    { text: "来れない" },
    { text: "着れない" },
    { text: "起きれない" },
    { text: "決めれない" },
  ],
  invalid: [
    {
      text: "書けれる",
      errors: [
        {
          message: "れ足す言葉の可能性があります",
          index: 0
        }
      ]
    },
    {
      text: "読めれる",
      errors: [
        {
          message: "れ足す言葉の可能性があります",
          index: 0
        }
      ]
    },
    {
      text: "行けれる",
      errors: [
        {
          message: "れ足す言葉の可能性があります",
          index: 0
        }
      ]
    },
    {
      text: "飛べれる",
      errors: [
        {
          message: "れ足す言葉の可能性があります",
          index: 0
        }
      ]
    },
    {
      text: "飛ばせれない",
      errors: [
        {
          message: "れ足す言葉の可能性があります",
          index: 0
        }
      ]
    },
    {
      text: "書けれない",
      errors: [
        {
          message: "れ足す言葉の可能性があります",
          index: 0
        }
      ]
    },
  ]
});