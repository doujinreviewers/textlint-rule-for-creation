module.exports = [
  {
    "message": "\"適用\"の誤用である可能性があります。適応 => 適用",
    "expected": "を適用",
    "tokens": [
      {
        "surface_form": "を",
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "を",
        "reading": "ヲ",
        "pronunciation": "ヲ"
      },
      {
        "surface_form": "適応",
        "pos": "名詞",
        "pos_detail_1": "サ変接続",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "適応",
        "reading": "テキオウ",
        "pronunciation": "テキオー"
      }
    ]
  },
  {
    message: "動詞の連用形+辛い（つらい）の場合は、「ずらい」ではなく「づらい」が適切です。",
    expected: "$1づらい",
    tokens: [
      {
        "pos": "動詞",
        "pos_detail_1": "自立",
        "conjugated_form": "連用形",
        "_capture": "$1"
      },
      {
        "surface_form": "ず",
      },
      {
        "surface_form": "らい",
      }
    ]
  },
  {
    message: "動詞の連用形+辛い（つらい）の場合は、「ずらい」ではなく「づらい」が適切です。",
    expected: "$1づらい",
    tokens: [
      {
        "pos": "動詞",
        "pos_detail_1": "自立",
        "conjugated_form": "連用形",
        "_capture": "$1"
      },
      {
        "surface_form": "ずら",
      },
      {
        "surface_form": "い",
      }
    ]
  }
];