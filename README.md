# これはなに？

[PEERJS](http://peerjs.com/)、[clmtrackr](https://github.com/auduno/clmtrackr)を使ったビデオチャットアプリです。
ビデオチャット画像に顔認識処理を組み合わせて、ビデオ表示される相手の顔を加工します。

# ソースコードを利用する場合

以下の部分を書き換える必要あり。

```receiver.js
        var peer = new Peer({
            key: 'PeerJSで発番されるKeyを設定'
        });
```

```main.js
    var peer = new Peer({
        key: 'PeerJSで発番されるKeyを設定'
    });
```

keyは[PEERJS](http://peerjs.com/)にてユーザー登録することで取得できる。(無料)

