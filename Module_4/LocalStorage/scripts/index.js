document.getElementById("applySettings").onclick = function(event) {
	let color = document.getElementById("color").value;
	let fontSize = document.getElementById("fontSize").value;

	let elem = document.querySelector("p");

	elem.style.color = color;
	elem.style.fontSize = fontSize + "px";

	localStorage.setItem("color", color);
	localStorage.setItem("fontSize", fontSize);
}

var savedColor = localStorage.getItem("color");
var savedFontSize = localStorage.getItem("fontSize");

let elem = document.querySelector("p");

if (savedColor) {
	document.getElementById("color").value = savedColor;
	elem.style.color = savedColor;
}

if (savedFontSize) {
	document.getElementById("fontSize").value = savedFontSize;
	elem.style.fontSize = savedFontSize + "px";
}