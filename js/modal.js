// JavaScript Document
	// Get the modal
	var modal = document.querySelector(".modal");

	// Get the image and insert it inside the modal
	var modalImg = document.querySelector(".modal-content");
	
	imageOnclick=function(img){
		modal.style.display = "flex";
		modalImg.src = img.src;
	};
	
	// Get the <span> element that closes the modal
	var close = document.getElementsByClassName("close-but")[0];

	// When the user clicks on <span> (x), close the modal
	close.onclick = function() {
	modal.style.display = "none";
}