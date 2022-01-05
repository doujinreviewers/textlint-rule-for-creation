# textlint-rule-for-creation
日本語の明確な誤りのみを検出するtextlintルール

創作での使用を想定し、クリエイターの邪魔をしないことを目指す

## 誤りとするもの
- 誤字脱字
- 助詞の連続
- サ抜き言葉、サ入れ言葉、れ足す言葉

## 表現の範疇として許容するもの
- 誤りとするもの以外の全て

  例えば、文章の形式、スタイル、文体、文の冗長さ、二重否定、二重助詞、表記ゆれ、送り仮名のゆれ、記号や三点リーダーの使い方など

- ら抜き言葉

  これで喋るキャラがいるかもしれないし、作品の雰囲気に必要かもしれない

## インストール

    npm install textlint-rule-for-creation

## 使い方

`.textlintrc`に設定して使う

```json
{
    "rules": {
        "for-creation": true
    }
}
```

コマンドラインで使う

```
textlint --rule for-creation README.md
```

### Build

`src/` 以下がソースコード

ビルド後のコードは `lib` フォルダーに入る

    npm run build

### Test

[textlint-tester](https://github.com/textlint/textlint-tester)で `test` フォルダのコードを実行

    npm test

## License

MIT

## 特記
[script-compiler](https://github.com/textlint/editor/tree/master/packages/%40textlint/script-compiler)でworkerにコンパイルして使いたいが、

2022年1月の時点では外部ファイルのロードに問題がある（nodeのfsモジュールがブラウザで動作しないため）

そのため、本ルールではfsモジュールを使用しなくても良いようにしている

問題が修正されるまではこの設計を維持する

## 参考
### worker

  [textlint 12リリース、ブラウザで動くtextlint editorをベータリリース](https://efcl.info/2021/05/27/textlint-12-editor/)

### ルール
  []()
  []()