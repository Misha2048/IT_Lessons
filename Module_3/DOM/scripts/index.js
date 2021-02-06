let gallery = document.getElementById("cats-gallery");

for (let i = 1; i <= 5; i++) {
	let img = document.createElement("img");
	img.src = "http://lorempixel.com/200/200/cats/"+i;
	gallery.appendChild(img);
}


let count = gallery.children.length;
let totalElement = document.getElementById("total-cats");
totalElement.innerText = count;

let firstPhoto = document.querySelector(".gallery img:first-child");
firstPhoto.classList.add("red-border");

let headerElement = document.querySelector("h1");
headerElement.parentElement.removeChild(headerElement);

let footer = document.querySelector(".footer");
gallery.appendChild(footer);