module.exports = {
  valid: [
    { text: "今年はたいそう良いことがあった" },
    { text: "言わさせていただきます" },
    { text: "今日は暖かさそう" },
    { text: "大尉はいかにもすまなさそうに言った" },
    { text: "大尉はいかにもすまなそうに言った" },
  ],
  invalid: [
    {
      text: "早く終わらせて帰りたさそうなのがおかしかった",
      errors: [
        {
          message: "不要な「さ」が挿入されています。",
          index: 7
        }
      ]
    },
    {
      text: "刺し身をたべたさそう",
      errors: [
        {
          message: "不要な「さ」が挿入されています。",
          index: 4
        }
      ]
    },
    {
      text: "寿司が美味しさそう",
      errors: [
        {
          message: "不要な「さ」が挿入されています。",
          index: 3
        }
      ]
    },
  ]
}