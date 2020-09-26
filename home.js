window.addEventListener('scroll', anim);
function anim(){
	var ypos = window.pageYOffset;
	var h = document.getElementById('hp1');
	var p = document.getElementById('hp2');
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	h.style.transform = "translateX(-"+ ypos + "px)";
	p.style.transform = "translateX(+"+ ypos + "px)";
	if(ypos > 400){
		box1.style.opacity = "1";
		box2.style.opacity = "1";
		box3.style.opacity = "1";
		box4.style.opacity = "1";
		box1.style.transitionDelay = "0s";
		box2.style.transitionDelay = "0.5s";
		box3.style.transitionDelay = "1s";
		box4.style.transitionDelay = "1.5s";
	}
	
}