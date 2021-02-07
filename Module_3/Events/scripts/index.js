// let testButton = document.querySelector("button");

// testButton.onclick = function() {
// 	console.log("Event appeared!");
// }

// testButton.onmouseover = function() {
// 	testButton.style.backgroundColor = "green";
// }

// testButton.onmouseout = function() {
// 	testButton.style.backgroundColor = null;
// }

let buttons = document.getElementsByTagName("button");

var buttonClickHandler = function(eventObject) {
	console.log("button clicked!");
	eventObject.target.style.backgroundColor = "green"
}

for (let button of buttons) {
	button.onclick = buttonClickHandler;
}