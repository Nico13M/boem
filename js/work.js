$(".boris").hover(function(){

  $("#boris").css("display","block");
}, function(){
  $("#boris").css("display","none");
})

$(".club").hover(function(){

  $("#club").css("display","block");
}, function(){
  $("#club").css("display","none");
})

$(".mssff").hover(function(){

  $("#mssff").css("display","block");
}, function(){
  $("#mssff").css("display","none");
})

$(".batard").hover(function(){

  $("#batard").css("display","block");
}, function(){
  $("#batard").css("display","none");
})

$(".teufelsberg").hover(function(){

  $("#teufelsberg").css("display","block");
}, function(){
  $("#teufelsberg").css("display","none");
})

$(".pac").hover(function(){

  $("#pac").css("display","block");
}, function(){
  $("#pac").css("display","none");
})

$(".synesthesic").hover(function(){

  $("#synesthesic").css("display","block");
}, function(){
  $("#synesthesic").css("display","none");
})

$(".otr").hover(function(){

  $("#otr").css("display","block");
}, function(){
  $("#otr").css("display","none");
})

$(".og").hover(function(){

  $("#og").css("display","block");
}, function(){
  $("#og").css("display","none");
})

$(".mental").hover(function(){

  $("#mental").css("display","block");
}, function(){
  $("#mental").css("display","none");
})

$(".aurillac").hover(function(){

  $("#aurillac").css("display","block");
}, function(){
  $("#aurillac").css("display","none");
})

$(".chevalier").hover(function(){

  $("#chevalier").css("display","block");
}, function(){
  $("#chevalier").css("display","none");
})

$(".dbnkr").hover(function(){

  $("#dbnkr").css("display","block");
}, function(){
  $("#dbnkr").css("display","none");
})

$(".rebellion").hover(function(){

  $("#rebellion").css("display","block");
}, function(){
  $("#rebellion").css("display","none");
})

$(".familistere").hover(function(){

  $("#familistere").css("display","block");
}, function(){
  $("#familistere").css("display","none");
})

$(".stremon").hover(function(){

  $("#stremon").css("display","block");
}, function(){
  $("#stremon").css("display","none");
})



$(".proj").hover(function(){

  $(".over").css("display","none");
}, function(){
  $(".over").css("display","block");
})

// TAGS

$("#typo").click(function(){

  $(".photocli").css("display","none");
  $(".edition").css("display","none");
  $(".affiche").css("display","none");
  $(".identite").css("display","none");
  $(".anne").css("display","none");
  $(".ligne").css("display","block");
  $(".typo").css("display","table");

  $("#typo").css("text-decoration","underline");

  $("#photo").css("text-decoration","none");
  $("#affiche").css("text-decoration","none");
  $("#edition").css("text-decoration","none");
  $("#identite").css("text-decoration","none");
})

$("#photo").click(function(){

  $(".typo").css("display","none");
  $(".edition").css("display","none");
  $(".affiche").css("display","none");
  $(".identite").css("display","none");
  $(".anne").css("display","none");
  $(".ligne").css("display","block");
  $(".photocli").css("display","table");

  $("#photo").css("text-decoration","underline");

  $("#typo").css("text-decoration","none");
  $("#typo").css("text-decoration","none");
  $("#affiche").css("text-decoration","none");
  $("#edition").css("text-decoration","none");
  $("#identite").css("text-decoration","none");
})

$("#affiche").click(function(){

  $(".typo").css("display","none");
  $(".edition").css("display","none");
  $(".photocli").css("display","none");
  $(".identite").css("display","none");
  $(".anne").css("display","none");
  $(".ligne").css("display","block");
  $(".affiche").css("display","table");

  $("#affiche").css("text-decoration","underline");

  $("#typo").css("text-decoration","none");
  $("#photo").css("text-decoration","none");
  $("#identite").css("text-decoration","none");
  $("#edition").css("text-decoration","none");
})

$("#edition").click(function(){

  $(".typo").css("display","none");
  $(".affiche").css("display","none");
  $(".photocli").css("display","none");
  $(".anne").css("display","none");
  $(".identite").css("display","none");
  $(".ligne").css("display","block");
  $(".edition").css("display","table");

  $("#edition").css("text-decoration","underline");

  $("#typo").css("text-decoration","none");
  $("#photo").css("text-decoration","none");
  $("#identite").css("text-decoration","none");
  $("#affiche").css("text-decoration","none");
})

$("#identite").click(function(){

  $(".typo").css("display","none");
  $(".affiche").css("display","none");
  $(".photocli").css("display","none");
  $(".anne").css("display","none");
  $(".edition").css("display","none");
  $(".ligne").css("display","block");
  $(".identite").css("display","table");

  $("#identite").css("text-decoration","underline");

  $("#typo").css("text-decoration","none");
  $("#photo").css("text-decoration","none");
  $("#edition").css("text-decoration","none");
  $("#affiche").css("text-decoration","none");
})


$("#effacer").click(function(){

  $(".typo").css("display","table");
  $(".photocli").css("display","table");
  $(".edition").css("display","table");
  $(".affiche").css("display","table");
  $(".identite").css("display","table");
  $(".anne").css("display","table");
  $(".ligne").css("display","none");

  $("#photo").css("text-decoration","none");
  $("#typo").css("text-decoration","none");
  $("#identite").css("text-decoration","none");
  $("#affiche").css("text-decoration","none");
  $("#edition").css("text-decoration","none");
})


//pour faire des parallax:

// $(window).scroll(function(e){
//   parallax();
// });


// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('.elementr').css('margin-top',-(scrolled*1)+'px');
//   $('.elementb').css('margin-top',-(scrolled*2)+'px');
//   $('.elementr1').css('margin-top',-(scrolled*1)+'px');
//   $('.elementb1').css('margin-top',-(scrolled*2)+'px');
//   $('.elementba').css('margin-top',-(scrolled*0.5)+'px');
//   $('.elementra').css('margin-top',-(scrolled*0.5)+'px');
//   $('.elementra').css('margin-top',-(scrolled*0.5)+'px');
// }



//comande de base:

// $(".click").click(function(){

//   $(".changement").css("opacity","1");
// })




//pour ouvrir un lien avec du délai

// $(".vio").click(function(){
//   setTimeout(function() {
//       window.location.replace("autre6/index8.html");
//       }, 1000);
// })




//pour changer un élément a l'ouverture d'un document

// $( document ).ready(function() {

//   $(".changement").css("opacity","0");
// });



// point d'encrage smooth:

// pour régler la vitesse

// $(function() {
//     /**
//     * Smooth scrolling to page anchor on click
//     **/
//     $("a[href*='#']:not([href='#'])").click(function() {
//         if (
//             location.hostname == this.hostname
//             && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//         ) {
//             var anchor = $(this.hash);
//             anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//             if ( anchor.length ) {
//                 $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
//             }
//         }
//     });
// });

// ou

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// pour mettre un son :

// function appa(){
//   var appa = new Audio();
//   appa.src = "click.mp3";
//   appa.play();
// }

// mettre dans le html :
// <div onclick="appa()" class=exemple>


// pour mettre ca web cam :

// var video = document.querySelector("#videoElement");

// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }

// var video = document.querySelector("#videoElement");
