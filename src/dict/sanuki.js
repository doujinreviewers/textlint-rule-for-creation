module.exports = [
  {
    "message": "「さ」が抜けています。",
    "expected": "$1さ$2",
    "tokens": [
      {
        "basic_form": ["良い", "無", "無い"],
        "_capture": "$1"
      },
      {
        "surface_form": "そう",
        "pos_detail_1": ["接尾", "助詞類接続"],
        "_capture": "$2"
      }
    ]
  },
];