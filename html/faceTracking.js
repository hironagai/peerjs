(function () {
    var blockHeart = false; //ハートを出すか
    var blockBalloon = false; //吹き出しを出すか
    var isBalloon = false;

    //video画像から顔トラッキング
    var videoInput = document.getElementById('yourVideo');
    var ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput);

    //トラッキングデータの取得
    function positionLoop() {
        requestAnimationFrame(positionLoop);
        var positions = ctracker.getCurrentPosition();
        if (positions && blockHeart) {
            openYourEye("heartR", Math.ceil(positions[27][0]), Math.ceil(positions[27][1]), ((positions[25][0]) - Math.ceil(positions[23][0])) * 2);
            openYourEye("heartL", Math.ceil(positions[32][0]), Math.ceil(positions[32][1]), ((positions[28][0]) - Math.ceil(positions[30][0])) * 2);
        }
        if (positions && blockBalloon) {
            showBalloonMsg(Math.ceil(positions[57][1]) - Math.ceil(positions[60][1]));
            moveBalloonMsg(Math.ceil(positions[14][0]), Math.ceil(positions[14][1]));
        }
    }
    positionLoop();

    var openYourEye = function (id, x, y, size) {
        var eye = document.getElementById(id);
        eye.style.display = "block";
        eye.style.width = size + "px";
        eye.style.height = size + "px";
        eye.style.left = (x - size / 2) + "px";
        eye.style.top = (y - size / 2) + "px";
    }

    var closeYourEye = function (id) {
        var eye = document.getElementById(id);
        eye.style.display = "none";
    }

    var showBalloonMsg = function (mouthSize) {
        if (isBalloon || (mouthSize < 10)) {
            return;
        }
        //メッセージをここで決める
        var name = document.getElementById("myname").value;
        var msg = "";
        switch (Math.floor(Math.random() * 5)) {
        case 0:
                msg = "どうしよう・・・・あたし・・・" + name + "くんの事が好きかも・・・";
            break;
        case 1:
            msg = name + "くんって正面から見たら意外とイケメンだなぁー";
            break;
            case 2:
                msg = name + "くん、あたしのことどう思ってるのかな？";
                break;
            case 3:
                msg = "" + name + "くんのことなんかっ！だーーーーい、すき！";
                break;
            default:
            msg = name + "くん、すきすきすきすきすきすきすきすきすき";
        }
        document.getElementById("balloonMsg").innerHTML = msg;

        isBalloon = true;
        setTimeout(hideBalloonMsg, 5000);
    }

    var hideBalloonMsg = function () {
        isBalloon = false;
        var balloon = document.getElementById("balloon");
        balloon.style.display = "none";
    }

    var moveBalloonMsg = function (x, y) {
        //バルーン表示の場合
        if (!isBalloon) {
            return;
        }
        var balloon = document.getElementById("balloon");
        balloon.style.display = "block";
        balloon.style.top = (y - 170) + "px";
        balloon.style.left = (x + 10) + "px";

    }
    var startTokimeki = function () {
        if (blockHeart) {
            blockHeart = false;
            closeYourEye("heartR");
            closeYourEye("heartL");
        } else {
            blockHeart = true;
        }
    }
    var startMind = function () {
        if (blockBalloon) {
            blockBalloon = false;
        } else {
            blockBalloon = true;
        }
    }

    document.getElementById("experience1").addEventListener("click", startTokimeki, false);
    document.getElementById("experience2").addEventListener("click", startMind, false);

    //        //トラッキング状態の表示
    //    var canvasInput = document.getElementById('drawCanvas');
    //    var cc = canvasInput.getContext('2d');
    //
    //    function drawLoop() {
    //        requestAnimationFrame(drawLoop);
    //        cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
    //        ctracker.draw(canvasInput);
    //    }
    //    drawLoop();
})();
