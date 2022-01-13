module.exports = {
  valid: [
    { text: "異世界に適応する" },
    { text: "魔法を適用する" },
    { text: "書きづらい" },
    { text: "読みづらい" },
  ],
  invalid: [
    {
      text: "魔法を適応する",
      errors: [
        {
          message: "\"適用\"の誤用である可能性があります。適応 => 適用",
          index: 2
        }
      ]
    },
    {
      text: "書きずらい",
      errors: [
        {
          message: "動詞の連用形+辛い（つらい）の場合は、「ずらい」ではなく「づらい」が適切です。",
          index: 0
        }
      ]
    },
    {
      text: "読みずらい",
      errors: [
        {
          message: "動詞の連用形+辛い（つらい）の場合は、「ずらい」ではなく「づらい」が適切です。",
          index: 0
        }
      ]
    },
  ]
}