module.exports = [
  {
    "message": "不要な「さ」が挿入されています。",
    "expected": "$2$3",
    "tokens": [
      {
        "conjugated_form": "ガル接続",
        "basic_form": ["辛い", "美味しい", "寒い"],
        "_capture": "$2"
      },
      {
        "surface_form": "さ",
        "_index": true
      },
      {
        "basic_form": "そう",
        "pos_detail_1": ["接尾", "助詞類接続"],
        "_capture": "$3"
      }
    ]
  },
  {
    "message": "不要な「さ」が挿入されています。",
    "expected": "$1$2$3",
    "tokens": [
      {
        "pos": "動詞",
        "_capture": "$1"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "_capture": "$2"
      },
      {
        "surface_form": "さ",
        "_index": true
      },
      {
        "basic_form": "そう",
        "pos_detail_1": ["接尾", "助詞類接続"],
        "_capture": "$3"
      }
    ]
  },
];