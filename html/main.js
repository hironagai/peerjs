navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

(function () {

    var myVideo = document.getElementById('myVideo');
    var yourVideo = document.getElementById('yourVideo');
    var myStream = null;
    //Media Stream APIを使ったカメラマイクアクセス
    navigator.getUserMedia({
            video: true,
            audio: true
        },
        function (stream) { // for success case
            myVideo.src = window.URL.createObjectURL(stream);
            myStream = stream;
        },
        function (err) { // for error case
            console.log(err);
        }
    );

    var peer = new Peer({
        key: Peerで発番されるKeyを設定'
    });

    //peer.on('error', function(e){
    //    console.log(e.message);
    //});
    peer.on('open', function (id) {
        //peerIDの取得
        showVideoURL(id);
    });


    peer.on('call', function (call) {
        //相手からの応答あり
        //メッセージボックスを閉じる
        $(".iframe").colorbox.close();
        call.on('stream', function (yourStream) {
            yourVideo.src = window.URL.createObjectURL(yourStream);
        });
        call.answer(myStream);
    });

    //メッセージボックスを表示する
    $(document).ready(function () {
        $(".inline").colorbox({
            inline:true,
            width:"640px"
        });
    });
    var showVideoURL = function (id) {
        document.getElementById("url").value = "http://nagai.gehirn.ne.jp/face/receiver.html?id=" + id;
        $("#startWnd").trigger("click");

    }
})();
