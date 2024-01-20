$('.carous').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 3000,
});

// TRANCHE
$("#appatranche").click(function(){

  $("#tranche").css("display","block");
})

$(".tranche .open").click(function(){

  $(".tranche .fleche").css("transform","rotate(180deg)");
  $(".tranche .close").css("display","inline-block");
  $(".tranche .open").css("display","none");
  $(".tranche .none").css("height","300px");
  $(".tranche .none").css("margin-bottom","15px");
  $(".tranche .slick-slider").css("display","block");
})

$(".tranche .close").click(function(){

  $(".tranche .fleche").css("transform","rotate(0deg)");
  $(".tranche .open").css("display","inline-block");
  $(".tranche .close").css("display","none");
  $(".tranche .none").css("height","0px");
  $(".tranche .none").css("margin-bottom","0px");
})

$(".tranche .close").click(function(){
  setTimeout(function() {
      $(".tranche .slick-slider").css("display","none");
    }, 500);
})

// FANTOME
$("#appafantome").click(function(){

  $("#fantome").css("display","block");
})

$(".fantome .open").click(function(){

  $(".fantome .fleche").css("transform","rotate(180deg)");
  $(".fantome .close").css("display","inline-block");
  $(".fantome .open").css("display","none");
  $(".fantome .none").css("height","300px");
  $(".fantome .none").css("margin-bottom","15px");
  $(".fantome .slick-slider").css("display","block");
})

$(".fantome .close").click(function(){

  $(".fantome .fleche").css("transform","rotate(0deg)");
  $(".fantome .open").css("display","inline-block");
  $(".fantome .close").css("display","none");
  $(".fantome .none").css("height","0px");
  $(".fantome .none").css("margin-bottom","0px");
})

$(".fantome .close").click(function(){
  setTimeout(function() {
      $(".fantome .slick-slider").css("display","none");
    }, 500);
})

// ESMERALDA
$("#appaesmeralda").click(function(){

  $("#esmeralda").css("display","block");
})

// BORISSETTE
$("#appaborissette").click(function(){

  $("#borissette").css("display","block");
})

$(".borissette .open").click(function(){

  $(".borissette .fleche").css("transform","rotate(180deg)");
  $(".borissette .close").css("display","inline-block");
  $(".borissette .open").css("display","none");
  $(".borissette .none").css("height","300px");
  $(".borissette .none").css("margin-bottom","15px");
  $(".borissette .slick-slider").css("display","block");
})

$(".borissette .close").click(function(){

  $(".borissette .fleche").css("transform","rotate(0deg)");
  $(".borissette .open").css("display","inline-block");
  $(".borissette .close").css("display","none");
  $(".borissette .none").css("height","0px");
  $(".borissette .none").css("margin-bottom","0px");
})

$(".borissette .close").click(function(){
  setTimeout(function() {
      $(".borissette .slick-slider").css("display","none");
    }, 500);
})

// OTR
$("#appaotr").click(function(){

  $("#OTR").css("display","block");
})

// KNIF
$("#appaknif").click(function(){

  $("#knif").css("display","block");
})

// GENESE
$("#appagenese").click(function(){

  $("#genese").css("display","block");
})

$(".genese .open").click(function(){

  $(".genese .fleche").css("transform","rotate(180deg)");
  $(".genese .close").css("display","inline-block");
  $(".genese .open").css("display","none");
  $(".genese .none").css("height","300px");
  $(".genese .none").css("margin-bottom","15px");
  $(".genese .slick-slider").css("display","block");
})

$(".genese .close").click(function(){

  $(".genese .fleche").css("transform","rotate(0deg)");
  $(".genese .open").css("display","inline-block");
  $(".genese .close").css("display","none");
  $(".genese .none").css("height","0px");
  $(".genese .none").css("margin-bottom","0px");
})

$(".genese .close").click(function(){
  setTimeout(function() {
      $(".genese .slick-slider").css("display","none");
    }, 500);
})

// C4
$("#appac4").click(function(){

  $("#c4").css("display","block");
})

$(".c4 .open").click(function(){

  $(".c4 .fleche").css("transform","rotate(180deg)");
  $(".c4 .close").css("display","inline-block");
  $(".c4 .open").css("display","none");
  $(".c4 .none").css("height","315px");
  $(".c4 .none").css("padding-bottom","15px");
  $(".c4 .slick-slider").css("display","block");
})

$(".c4 .close").click(function(){

  $(".c4 .fleche").css("transform","rotate(0deg)");
  $(".c4 .open").css("display","inline-block");
  $(".c4 .close").css("display","none");
  $(".c4 .none").css("height","0px");
  $(".c4 .none").css("padding-bottom","0px");
})

$(".c4 .close").click(function(){
  setTimeout(function() {
      $(".c4 .slick-slider").css("display","none");
    }, 500);
})

// FERMETURE

$(".ferme").click(function(){

  $(".appa").css("display","none");
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
