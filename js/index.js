//handle the preloading
const preloader = document.querySelector(".preloader");
console.log(preloader);
window.addEventListener("load", vanish);

function vanish() {
	preloader.classList.add("disappear");
}
//hnadle date
document.getElementById("year").innerHTML = new Date().getFullYear();
//handle auto filter
var getAllItems = document.querySelectorAll(".wall-item-main");
//show all categories
function showAll() {
	getAllItems.forEach(function (elememt) {
		elememt.classList.add("show");
	});
}
//filter by category
function showCategory(category) {
	getAllItems.forEach(function (element) {
		if (element.classList.contains(category)) {
			element.classList.add("show");
			console.log(category);
		} else {
			element.classList.remove("show");
			console.log(category);
		}
	});
}
showAll();

//animate some parts of the code
const element = document.querySelector(".contact-imga");
//add the class to animate
element.classList.add("animate__animated", "animate__slideOutLeft");
//properties
element.style.setProperty("--animate-duration", "0.2s");
//end animation
element.addEventListener("animationend", () => {
	// return to its original postion
	element.style.setProperty({
		position: "relative",
	});
});

//frequently asked questions 
const questionBx = document.querySelectorAll(".questionBx");
const box = document.getElementById("box");
questionBx.forEach((e) => {
	e.addEventListener("click", function () {
		this.classList.toggle("show");
		box.style.animation = "jump 300ms forwards";
		setTimeout(() => {
			box.style.animation = "";
		}, 300);
	});
});