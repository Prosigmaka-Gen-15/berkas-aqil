var previewImg = document.getElementById('previewImg');
var miniImg = document.getElementsByClassName('miniImg');
var namaProduk = document.getElementById('namaProduk');
var hargaProduk = document.getElementById('hargaProduk');

function previewImage0(){
    var sourceImg = miniImg[0].getAttribute("src");
    previewImg.src = sourceImg;
    namaProduk.innerHTML = "Laptop-ASUS-terbaik-Zenbook-Pro-14-Duo-OLED";
    hargaProduk.innerHTML = "Rp14.000.000";
}

function previewImage1(){
    var sourceImg = miniImg[1].getAttribute("src");
    previewImg.src = sourceImg;
    namaProduk.innerHTML = "Laptop-ASUS-Keluaran-Baru-Zenbook-14X-OLED-Space-Edition";
    hargaProduk.innerHTML = "Rp15.000.000";
}

function previewImage2(){
    var sourceImg = miniImg[2].getAttribute("src");
    previewImg.src = sourceImg;
    namaProduk.innerHTML = "Laptop-ASUS-Terbaru-Zenbook-S-13-OLED";
    hargaProduk.innerHTML = "Rp16.000.000";
}

function previewImage3(){
    var sourceImg = miniImg[3].getAttribute("src");
    previewImg.src = sourceImg;
    namaProduk.innerHTML = "Laptop-ASUS-Vivobook-14X-OLED-A1403";
    hargaProduk.innerHTML = "Rp17.000.000";
}

function tambahPcs(){
    var jumlahPcs = parseInt(document.getElementById('pcs').getAttribute("value"));
    if(jumlahPcs < 99){
        var total = jumlahPcs + 1;
        document.getElementById('pcs').setAttribute("value", total);
    }
}

function kurangPcs(){
    var jumlahPcs = parseInt(document.getElementById('pcs').getAttribute("value"));
    if(jumlahPcs > 1){
        var total = jumlahPcs - 1;
        document.getElementById('pcs').setAttribute("value", total);
    }
}