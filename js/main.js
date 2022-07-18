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

window.onscroll = function () {
    if (window.scrollY >= aboutTitle.offsetParent.offsetTop - 500) {
        aboutTitle.style.animation="running";
    }
    if (window.scrollY >= aboutContent[0].offsetParent.offsetTop - 500) {
        aboutContent.forEach((Content) => {
            Content.style.animation="running";
        });
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[0].offsetTop -500)) {
        servicesText[0].style.animation = "running";
        servicesImg[0].style.animation = "running";
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[1].offsetTop -500)) {
        servicesText[1].style.animation = "running";
        servicesImg[1].style.animation = "running";
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[2].offsetTop -500)) {
        servicesText[2].style.animation = "running";
        servicesImg[2].style.animation = "running";
    }
    if (window.scrollY >= (servicesSection.offsetTop + servicesRow[3].offsetTop -500)) {
        servicesText[3].style.animation = "running";
        servicesImg[3].style.animation = "running";
    }
    if (window.scrollY >= ServicesTitle.offsetParent.offsetTop - 500) {
        ServicesTitle.style.animation="running";
    }
    if (window.scrollY >= clientsTitle.offsetParent.offsetTop - 500) {
        clientsTitle.style.animation="running";
    }
    if (window.scrollY >= companies.offsetParent.offsetTop - 500) {
        companies.style.animation="running";
    }
    if (window.scrollY >= stats.offsetParent.offsetTop - 500) {
        stats.style.animation="running";
    }
};

// Stats Increase Number

let nums = document.querySelectorAll(".stats h3 span");

nums.forEach((num) => {startCount(num)})

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent = goal) {
            clearInterval(count);
        }
    }, 20)
}