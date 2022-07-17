let bar = document.querySelector(".bar");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector(".nav");
var navLinks = document.querySelector(".nav li a");

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