<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>最強のビデオチャット</title>
    <script src="js/clmtrackr.min.js"></script>
    <script src="js/model_spca_20_svm.js"></script>
    <script type="text/javascript" src="http://cdn.peerjs.com/0.3/peer.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="./lib/colorbox/jquery.colorbox.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="./lib/colorbox/colorbox.css" />
    <link rel="stylesheet" href="main.css" />
</head>

<body>
    <input type="hidden" id="myname" value="<?php echo $_POST['myname']; ?>">
    <p class="threed">
        モテ男体験装置
    </p>
    <div id="videoarea">
        <div id="videoDisplay">
            <video id="yourVideo" width="640" height="480" autoplay="1" poster="images/bg_img_l.png"></video>
            <video id="myVideo" width="170" height="130" autoplay="1" poster="images/bg_img_s.png" muted></video>
            <canvas id="drawCanvas" width="640" height="480"></canvas>
            <img id="heartR" class="heart" src="images/heart.png" />
            <img id="heartL" class="heart" src="images/heart.png" />
            <div id="balloon">
                <div id="balloonMsg" class="box"></div>
            </div>
        </div>
        <input id="experience1" type="button" class="btn btn-success btn-large" value="うわー絶対オレに気があるわ体験">
        <input id="experience2" type="button" class="btn btn-success btn-large" value="君がなに考えてるか手に取るように分かるわ体験">
    </div>
    <a id="startWnd" href="#inline_content" class="inline"></a>
    <div style='display:none'>
        <div id='inline_content'>
            <p class="cameraMsg">
                ブラウザの「カメラとマイクへのアクセス」を許可したら、
                <br/> このURLを相手に伝えてね。
            </p>
            <input type="text" id="url" class="form-control" value="" />
        </div>
    </div>

    <script src="main.js"></script>
    <script src="faceTracking.js"></script>
</body>

</html>
