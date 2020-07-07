var btnb = document.querySelector(".btnb");
var about = document.querySelector("#ab");
var home = document.querySelector("#first");
var potfolio = document.querySelector("#potfolio");
var myexp = document.querySelector(".my-exp");
var picdiv = document.querySelector(".my-img");
var projects = document.querySelectorAll(".inner");
var nav = document.querySelector(".my-nav");
var ee = document.querySelector(".ee");
var myproj = document.querySelector(".my-project");
var innerh = window.innerHeight;
var spancss = document.querySelector(".per-css");
var spanhtml = document.querySelector(".per-html");
var spanjs = document.querySelector(".per-js");
var spanphp = document.querySelector(".per-php");
var spanreact = document.querySelector(".per-react");
var spansaas = document.querySelector(".per-saas");
var spanfigma = document.querySelector(".per-figma");
var project = document.querySelector('.proj');
var green = document.querySelector('.green-div');
var contactdiv = document.querySelector('.contact-div')
var contact = document.querySelector('.contact')


//animations

function scrollappear(){
    var about = document.querySelector(".about");
    var blue = document.querySelector(".blue-div");
    var  dynamic = document.querySelector(".dynamic");
    var  responsive = document.querySelector(".responsive");
    var  intuitive = document.querySelector(".intuitive");
    var  dynamic2 = document.querySelector(".dynamic2");
    

    var position = about.getBoundingClientRect().top;
    var screenpos = window.innerHeight / 2.5;
    

    if(position < screenpos){
        about.classList.add('about-scroll');
        blue.classList.add('blue-scroll');
        
        responsive.classList.add('responsive-scroll');
        intuitive.classList.add('intuitive-scroll');
        dynamic2.classList.add('dynamic2-scroll');
    }
}
console.log(window.scrollY)
window.addEventListener('scroll',scrollappear);

window.addEventListener("load",()=>{
  
    if(window.scrollY > 2200){
        contact.classList.add("contact-scroll");
    }
    else{
        contact.classList.remove("contact-scroll");
    }
})


window.addEventListener("load",()=>{
  
    if(window.scrollY < 620){
        nav.classList.add("one");
    }
    else{
        nav.classList.remove("one");
    }
})

window.addEventListener("scroll",()=>{
  
    if(window.scrollY < 650){
        nav.classList.add("one");
      
    }
    else{
        nav.classList.remove("one");
    }
})

btnb.addEventListener('click', () => {

    window.scrollTo({
        top: innerh,
        left: 0,
        behavior: 'smooth'
      });

})

home.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

potfolio.addEventListener('click',()=>{

    window.scrollTo({
        top: innerh + innerh + 10,
        left: 0,
        behavior: 'smooth'
      });
})

about.addEventListener('click',()=>{

    window.scrollTo({
        top: innerh,
        left: 0,
        behavior: 'smooth'
      });
})

window.addEventListener('scroll',()=>{
    
    if(window.scrollY > 701){
        myexp.classList.add("animation")
        picdiv.classList.add("animation")
        spancss.classList.add('per-css2')
        spanhtml.classList.add('per-html2')
        spanjs.classList.add('per-js2')
        spanphp.classList.add('per-php2')
        spanreact.classList.add('per-react2')
        spansaas.classList.add('per-saas2')
        spanfigma.classList.add('per-figma2')
    }
})

window.addEventListener('scroll', () => {
    if(window.scrollY > innerh + 400){
       myproj.classList.add('realworld-scroll');
        project.classList.add('proj-scroll');
        green.classList.add('green-scroll');
    }
})

window.addEventListener('scroll', () => {
    if(window.scrollY > innerh+innerh + 560){
        contact.classList.add('contact-scroll')
        contactdiv.classList.add('contact-div-scroll')
    }
})
console.log(innerh)
$('.effect').hide();


window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.my-nav');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
