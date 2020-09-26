
function openNav(){
	var a = document.getElementById('home');
	var b = document.getElementById('gallery');
	var c = document.getElementById('product');
	var d = document.getElementById('contactus');
	var e = document.getElementById('aboutus');
	var f = document.getElementById('cross');

	a.style.width = "25%";
	b.style.width = "25%";
	c.style.width = "25%";
	d.style.width = "25%";
	e.style.width = "25%";
	f.style.left = "5%";
	a.style.transitionDelay = "0s";
	e.style.transitionDelay = "0.4s";
	b.style.transitionDelay = "0.8s";
	c.style.transitionDelay = "1.2s";
	d.style.transitionDelay = "1.6s";
	f.style.transitionDelay = "0.2s";

	
}

function closeNav(){
	var a = document.getElementById('home');
	var b = document.getElementById('gallery');
	var c = document.getElementById('product');
	var d = document.getElementById('contactus');
	var e = document.getElementById('aboutus');
	var f = document.getElementById('cross');


	a.style.width = "0%";
	b.style.width = "0%";
	c.style.width = "0%";
	d.style.width = "0%";
	e.style.width = "0%";
	f.style.left = "-10%";
	a.style.transitionDelay = "2s";
	e.style.transitionDelay = "1.5s";
	b.style.transitionDelay = "1s";
	c.style.transitionDelay = "0.5s";
	d.style.transitionDelay = "0s";
	f.style.transitionDelay = "2.1s";
	
}
