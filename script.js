let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

// typing text animation script
var typed = new Typed(".typing",{
    strings:["Expertise","Software Technicians","Hardware Techs","Mobile Repairs"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

var typed = new Typed(".typing",{
    strings:["Expertise","Software Technicians","Hardware Techs","Mobile Repairs"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})


$('.carausel').owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});