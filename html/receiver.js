navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

(function () {

    var myVideo = document.getElementById('myVideo');
    var yourVideo = document.getElementById('yourVideo');
    var myStream = null;
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

    var getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var calling = function () {
        //callして受信
        var peerid = getParameterByName("id");

        var peer = new Peer({
            key: 'PeerJSで発番されるKeyを設定'
        });
        var call = peer.call(peerid, myStream);
        //        call.on('error', function(e){
        //            console.log(e.message);
        //        });


        call.on('stream', function (youerStream) {
            //相手からの応答あり
            //メッセージボックスを閉じる
            $(".iframe").colorbox.close();
            yourVideo.src = window.URL.createObjectURL(youerStream);
        });
    }

    //画面起動時にメッセージボックスを表示する
    window.onload = function() {
        $("#startWnd").trigger("click");
    }
    $(document).ready(function(){
        $(".inline").colorbox({
            inline:true,
            width:"640px"
        });
    });
    document.getElementById("start").addEventListener("click", calling, false);

})();
