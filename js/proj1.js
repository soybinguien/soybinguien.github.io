// JavaScript Document
window.onload=function(){
	var imageGrid=document.querySelector('.p3 .container');
	var imageBg=document.querySelector('.p3');
	imageBg.style.height=(imageGrid.clientHeight-50)+'px';
	
	$("video").hover(function(){this.setAttribute("controls", "controls")},function(){this.removeAttribute("controls")});
	
};
window.onresize=function(){
	var imageGrid=document.querySelector('.p3 .container');
	var imageBg=document.querySelector('.p3');
	imageBg.style.height=(imageGrid.clientHeight-30)+'px';
}