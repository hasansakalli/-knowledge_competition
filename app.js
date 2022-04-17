var soru_alani = document.getElementById("soru_alani");
var a_secimi = document.getElementById("a_secimi");
var b_secimi = document.getElementById("b_secimi");
var c_secimi = document.getElementById("c_secimi");
var d_secimi = document.getElementById("d_secimi");
var toplamPuan = document.getElementById("toplamPuan");
var dogru = document.getElementById("dogru");
var yanlis = document.getElementById("yanlis");
var toplamPuan = document.getElementById("toplamPuan");
var soruNumber = document.getElementById("soru-number");
var wrapper =document.querySelector(".wrapper");
var sonuc =document.getElementById("sonuc");
var sonuc2 =document.getElementById("sonuc2");
var sonraki = document.getElementById("sonraki");
var sonraki = document.getElementById("onceki");
var start = document.getElementById("start");


const sorular = [
  [
    "1-2019 yılında telif hakları düşen yazarımız kimdir? ",
    "A) Oğuz Atay",
    "B) Sebahattin Ali",
    "C) Nazım Hikmet",
    "D) Ahmet Ümit",
    "C",
  ],
  [
    "2-Orhan Pamuk Nobel Edebiyat Ödülünü kaç yılında kazanmıştır?  ",
    "A) 2003",
    "B) 2004",
    "C) 2005",
    "D) 2006",
    "A",
  ],

  [
    "3-2018 yılı Yaşar Nabi Nayır Gençlik Ödülleri Öykü Ödülünü kim kazanmıştır?   ",
    "A) Semih Öztürk",
    "B) Elif Şafak",
    "C) Gamze Arslan",
    "D) Ahmet Ümit",
    "B",
  ],

  [
    "4-1948 yılında öldürülen Kürk Mantolu Madonna'nın yazarı edebiyatçımız hangisi?  ",
    "A) Sebahattin Ali",
    "B) Nazım Hikmet Ran",
    "C) Necip Fazıl Kısakürek",
    "D) Kemal Tahir",
    "A",
  ],

  [
    "5-Türk Edebiyatı tarihinde ilk edebi roman olarak değerlendirilen 'İntibah' kimin eseridir? ",
    "A) Ahmet Mithat Efendi",
    "B) Samipaşazade Sezai",
    "C) Şinasi",
    "D) Namık Kemal ",
    "D",
  ],

];
var dogruSayisi = 0;
var yanlisSayisi = 0;
var count = 0;

function basla() {
 
  wrapper.style.display="flex"
  count = 0;
  yanlisSayisi = 0;
  dogruSayisi = 0;

  soru_alani.innerHTML = sorular[count][0];
  a_secimi.innerHTML = sorular[count][1];
  b_secimi.innerHTML = sorular[count][2];
  c_secimi.innerHTML = sorular[count][3];
  d_secimi.innerHTML = sorular[count][4];
  
  
}
function newStart(){
 window.location.reload(false);
 }
function sonrakim() {
count++;
  if(count >= sorular.length){
   
    wrapper.style.display="none"
    sonuc.style.display="flex"
    start.style.display="none"
    sonuc2.style.display="flex"
    dogru.style.backgroundColor="green"
    yanlis.style.backgroundColor="red"
    toplamPuan.style.backgroundColor="skyBlue"
    
  }


 

  soru_alani.innerHTML = sorular[count][0];
  a_secimi.innerHTML = sorular[count][1];
  b_secimi.innerHTML = sorular[count][2];
  c_secimi.innerHTML = sorular[count][3];
  d_secimi.innerHTML = sorular[count][4];
  


  

    
}


function cevaplandi(item) {
  var kullaniciSecimi = item.getAttribute("data") ;

  if (kullaniciSecimi == sorular[count][5] ) {
    console.log("cevap doğru");
    
    dogruSayisi++;
    dogru.innerHTML = "Doğru Cevap: " + dogruSayisi;
    toplamPuan.innerHTML = "Toplam Puan: " + dogruSayisi * 10;
    sonrakim();
   
  } else  {
    console.log("yanlış");

    yanlisSayisi++;
    yanlis.innerHTML = "Yanlış Cevap: " + yanlisSayisi;
    sonrakim();
  }
  console.log(count);
  
 

}

