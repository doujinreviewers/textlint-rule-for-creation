module.exports = {
  valid: [
    { text: "魔法を使う" },
    { text: "錬金術でポーションを作ったので、アトリエで販売することにした。" },
  ],
  invalid: [
    {
      text: "魔法をを使う",
      errors: [
        {
          message: "助詞の連続",
          index: 2
        }
      ]
    },
    {
      text: "錬金術でポーションを作ったのでで、アトリエで販売することにした。",
      errors: [
        {
          message: "接続助詞と助動詞の連続",
          index: 13
        }
      ]
    },
    {
      text: "錬金術でポーションを作ったのでが、アトリエで販売することにした。",
      errors: [
        {
          message: "接続助詞と接続詞の連続",
          index: 13
        }
      ]
    },
  ]
}