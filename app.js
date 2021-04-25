const card = document.querySelector('.card');
const shoe = card.querySelector('img');
const title = card.querySelector('.title');
card.addEventListener('mousemove', (e) => {
	let xaxis = (window.innerWidth/2 - e.pageX) / 15;
	let yaxis = (window.innerHeight/2 - e.pageY) / 15;
	shoe.style.transform = "translateX(-50%) translateZ(220px) rotateZ(-20deg)";
	title.style.transform = "translateZ(140px)";
	card.style.transform = `translate(-50%,-50%) rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
});

card.addEventListener('mouseenter', (e) => {
	card.style.transition = "none";
	shoe.style.width = "235px";
	shoe.style.height = "135px";
	shoe.style.transform = "translateX(-50%) translateZ(220px)";
	title.style.transform = "translateZ(140px)";
});

card.addEventListener('mouseleave', (e) => {
	card.style.transition = "all 0.5s ease-out";
	title.style.transform = "translateZ(0px)";
	shoe.style.width = "220px";
	shoe.style.height = "120px";
	shoe.style.transform = "translateX(-50%) translateZ(0px)";
	card.style.transform = `translate(-50%,-50%)`;
			
});