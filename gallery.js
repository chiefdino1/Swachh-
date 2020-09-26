window.addEventListener('scroll', anim);
function anim(){
	var ypos = window.pageYOffset;
	var g = document.getElementById('g1');
	var a = document.getElementById('g2');
	var l = document.getElementById('g3');
	var e = document.getElementById('g5');
	var r = document.getElementById('g6');
	var y = document.getElementById('g7');
	
	g.style.transform = "translateY(+"+ ypos + "px) translateX(-"+ ypos + "px)";
	a.style.transform = "translateY(-"+ ypos + "px) translateX(-"+ ypos + "px)";
	l.style.transform = "translateY(-"+ ypos + "px)";
	e.style.transform = "translateY(+"+ ypos + "px)";
	r.style.transform = "translateY(-"+ ypos + "px) translateX(+"+ ypos + "px)";
	y.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px)";


}