window.addEventListener('scroll', anim);
function anim(){
	var ypos = window.pageYOffset;
	var p = document.getElementById('pr1');
	var r = document.getElementById('pr2');
	var o = document.getElementById('pr3');
	var d = document.getElementById('pr4');
	var u = document.getElementById('pr5');
	var c = document.getElementById('pr6');
	var t = document.getElementById('pr7');
	var s = document.getElementById('pr8');
	p.style.transform = "translateY(+"+ ypos + "px) translateX(-"+ ypos + "px) rotate(-"+ ypos*180 + "deg)";
	r.style.transform = "translateY(+"+ ypos + "px) translateX(-"+ ypos + "px) rotate(-"+ ypos*180 + "deg)";
	o.style.transform = "translateY(-"+ ypos + "px) translateX(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	d.style.transform = "translateY(-"+ ypos + "px) translateX(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	u.style.transform = "translateY(-"+ ypos + "px) translateX(+"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	c.style.transform = "translateY(-"+ ypos + "px) translateX(+"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	t.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px) rotate(-"+ ypos*180 + "deg)";
	s.style.transform = "translateY(+"+ ypos + "px) translateX(+"+ ypos + "px) rotate(-"+ ypos*180 + "deg)";

}