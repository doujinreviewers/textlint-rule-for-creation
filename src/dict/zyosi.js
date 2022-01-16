module.exports = [
  // {
  //   "message": "助詞の連続",
  //   "tokens": [
  //     {
  //       "pos": "助詞",
  //     },{
  //       "pos": "助詞",
  //       "pos_detail_2": ["一般", "*"]//引用や連語ならスルー
  //     }
  //   ]
  // },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": "係助詞",
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": "係助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "surface_form": ["が", "を"],
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": "係助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "surface_form": ["が", "を", "で", "に", "へ", "より"],
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": "助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "surface_form": "を",
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": "副助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": '連体化',
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": '連体化',
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": '格助詞',
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": '連体化',
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": '並立助詞',
        "_capture": "$1"
      },{
        "pos": "助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": "助詞の連続",
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": '副詞化',
        "_capture": "$1"
      },{
        "pos": "助詞",
        "pos_detail_1": "格助詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": '助詞の連続',
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": "接続助詞",
        "_capture": "$1"
      },{
        "pos": "副詞化",
        "_capture": "$2"
      }
    ]
  },
  // {
  //   "message": '助動詞の連続',
  //   "tokens": [
  //     {
  //       "pos": "助動詞",
  //     },{
  //       "pos": "助動詞",
  //     }
  //   ]
  // },
  {
    "message": '接続助詞と接続詞の連続',
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": "接続助詞",
        "_capture": "$1"
      },{
        "surface_form": ["で","が","の","を","へ","や"],
        "pos": "接続詞",
        "_capture": "$2"
      }
    ]
  },
  {
    "message": '接続助詞と助動詞の連続',
    "expected": '$1',
    "tokens": [
      {
        "pos": "助詞",
        "pos_detail_1": "接続助詞",
        "_capture": "$1"
      },{
        "surface_form": ["で","が","の","を","へ","や"],
        "pos": "助動詞",
        "_capture": "$2"
      }
    ]
  },
];