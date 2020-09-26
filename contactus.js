window.addEventListener('scroll', anim);
function anim(){
	var ypos = window.pageYOffset;
	var c = document.getElementById('cu1');
	var o = document.getElementById('cu2');
	var n = document.getElementById('cu3');
	var t = document.getElementById('cu4');
	var a = document.getElementById('cu5');
	var c2 = document.getElementById('cu6');
	var t2 = document.getElementById('cu7');
	var u = document.getElementById('cu9');
	var s = document.getElementById('cu10');

	c.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	o.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	n.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	t.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	a.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
   c2.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
   t2.style.transform = "translateY(-"+ ypos + "px) rotateY(-"+ ypos*180 + "deg)";
	u.style.transform = "translateY(+"+ ypos + "px) rotateX(-"+ ypos*180 + "deg)";
	s.style.transform = "translateY(+"+ ypos + "px) rotateX(-"+ ypos*180 + "deg)";
}