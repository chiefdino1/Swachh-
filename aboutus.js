window.addEventListener('scroll', anim);
function anim(){
	var ypos = window.pageYOffset;
	var a = document.getElementById('ab1');
	var b = document.getElementById('ab2');
	var o = document.getElementById('ab3');
	var u = document.getElementById('ab4');
	var t = document.getElementById('ab5');
	var u = document.getElementById('ab6');
	var s = document.getElementById('ab7');
	a.style.transform = "translateY(-"+ ypos + "px) translateX(-"+ ypos + "px)";
	b.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px)";
	o.style.transform = "translateY(-"+ ypos + "px) translateX(-"+ ypos + "px)";
	u.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px)";
	t.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px)";
	u.style.transform = "translateY(-"+ ypos + "px) translateX(-"+ ypos + "px)";
	s.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px)";

}