let bar = document.querySelector(".bar");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector(".nav");

function closeNav() {
    if (bar.classList.contains("remove")) {
        nav.style.width="0";
        bar.classList.remove("remove");
        xmark.classList.remove("show");
    }
}
function showNav() {
    nav.style.width="100%";
    bar.classList.add("remove");
    xmark.classList.add("show");
}
function removeNav() {
    nav.style.width="0";
    bar.classList.remove("remove")
    xmark.classList.remove("show");
}

// Scroll Animations
let aboutTitle  = document.querySelector(".about .title");
let aboutContent = document.querySelectorAll(".about p");

let servicesSection = document.querySelector(".services");
let servicesRow = document.querySelectorAll(".services .row");
let servicesText = document.querySelectorAll(".services .text");
let servicesImg = document.querySelectorAll(".services img");
let ServicesTitle  = document.querySelector(".services .title");

let clientsTitle = document.querySelector(".clients .title");
let companies = document.querySelector(".clients .companies");
let stats = document.querySelector(".clients .stats");

let contactSection = document.querySelector(".contact")
let card = document.querySelector(".contact .card");
let form = document.querySelector(".contact form");

let socialCont = document.querySelector(".landing .info .social");

window.onscroll = function () {
    if (window.scrollY >= aboutTitle.offsetParent.offsetTop - 250) {
        aboutTitle.style.animation="running";
    }
    if (window.scrollY >= aboutContent[0].offsetParent.offsetTop - 250) {
        aboutContent.forEach((Content) => {
            Content.style.animation="running";
        });
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[0].offsetTop -650)) {
        servicesText[0].style.animation = "running";
        servicesImg[0].style.animation = "running";
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[1].offsetTop -650)) {
        servicesText[1].style.animation = "running";
        servicesImg[1].style.animation = "running";
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[2].offsetTop -650)) {
        servicesText[2].style.animation = "running";
        servicesImg[2].style.animation = "running";
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[3].offsetTop -650)) {
        servicesText[3].style.animation = "running";
        servicesImg[3].style.animation = "running";
    }
    if (window.scrollY >= ServicesTitle.offsetParent.offsetTop - 650) {
        ServicesTitle.style.animation="running";
    }
    if (window.scrollY >= clientsTitle.offsetParent.offsetTop - 650) {
        clientsTitle.style.animation="running";
    }
    if (window.scrollY >= companies.offsetParent.offsetTop - 650) {
        companies.style.animation="running";
    }
    if (window.scrollY >= stats.offsetParent.offsetTop - 650) {
        stats.style.animation="running";
        if(!started){
            nums.forEach((num) => {startCount(num)});
        }
        started = true;
    }
    if(window.scrollY >= (card.offsetTop + contactSection.offsetTop - 650)){
        card.style.animation="running";
    }
    if(window.scrollY >= (form.offsetTop + contactSection.offsetTop -650)){
        form.style.animation="running";
    }
    if(window.scrollY >= contactSection.offsetTop - 650){
        socialCont.style.transform="translateX(-300px)";
    }
    else if(window.scrollY <= contactSection.offsetTop){
        socialCont.style.transform="translateX(0)"
    }
};
// Stats Increase Number

let nums = document.querySelectorAll(".stats .box h3 span");
let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal)
}
