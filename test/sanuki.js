module.exports = {
  valid: [
    { text: "これは問題無さそう" },
    { text: "これは良さそう" },
  ],
  invalid: [
    {
      text: "これは問題無そう",
      errors: [
        {
          message: "「さ」が抜けています。",
          index: 5
        }
      ]
    },
    {
      text: "これは良そう",
      errors: [
        {
          message: "「さ」が抜けています。",
          index: 3
        }
      ]
    },
  ]
}