let bar = document.querySelector(".bar");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector(".nav");

function showNav() {
    nav.style.height="260px";
    bar.classList.add("remove");
    xmark.classList.add("show");
}
function removeNav() {
    nav.style.height="0";
    bar.classList.remove("remove")
    xmark.classList.remove("show");
}