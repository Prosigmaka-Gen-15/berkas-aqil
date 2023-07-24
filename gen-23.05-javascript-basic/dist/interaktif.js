var previewImg = document.getElementById('previewImg');
var miniImg = document.getElementsByClassName('miniImg');

function previewImage0(){
    var sourceImg = miniImg[0].getAttribute("src");
    previewImg.src = sourceImg;
}

function previewImage1(){
    var sourceImg = miniImg[1].getAttribute("src");
    previewImg.src = sourceImg;
}

function previewImage2(){
    var sourceImg = miniImg[2].getAttribute("src");
    previewImg.src = sourceImg;
}

function previewImage3(){
    var sourceImg = miniImg[3].getAttribute("src");
    previewImg.src = sourceImg;
}