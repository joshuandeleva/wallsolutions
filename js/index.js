//handle the preloading
const preloader = document.querySelector(".preloader");
console.log(preloader);
window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear");
}
//hnadle date
document.getElementById("year").innerHTML = new Date().getFullYear();