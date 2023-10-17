

// CIRCLE ANIMATION //
const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots ;

    for(let i = 0 ; i < dots ; i++){
        
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;


    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0 ; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})
// --------MENU LIST------ //
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activMenu();
window.addEventListener("scroll",activMenu);

// --------sticky navbar------ //
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
   header.classList.toggle("sticky",window.scrollY > 50)
})
// --------toggle icon navbar------ //
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open")
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open")
}
// --------paralex------ //

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollbottom = document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


///MIXER
var mixer = mixitup('.portfolio-gallery');


var typed = new Typed(".word",{
    StringS:["Frontend","Designer","Freelencer"],
    typedSpeed :150,
    backSpeed:150,
    looped:true
})


