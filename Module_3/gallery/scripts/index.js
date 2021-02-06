var photosCount = 5;
var currentPhotoIndex = 1;

function showNextPhoto() {
	currentPhotoIndex++;
	if(currentPhotoIndex > photosCount) currentPhotoIndex = 1;

	var elem = document.getElementById("currentPhoto");
	elem.src = "images/photo" + currentPhotoIndex + ".jpg"
}

function addNextPhoto() {
	var newImage = document.createElement("img");

	currentPhotoIndex++;
	if(currentPhotoIndex > photosCount) currentPhotoIndex = 1;

	newImage.src = "images/photo" + currentPhotoIndex + ".jpg"

	var containerElem = document.getElementById("gallery");
	containerElem.appendChild(newImage)
}