let slider = document.querySelector(".slide");
let sliderIndividual = document.querySelectorAll("section");
let contador = 1;
let ancho = sliderIndividual[0].clientWidth;

let before = document.querySelector("#before");
let next = document.querySelector("#next");

next.addEventListener('click', ()=>{
	if(contador < sliderIndividual.length){
		slider.style.transform = "translate("+(-ancho*contador)+"px)";
	    slider.style.transition = "transform .8s";
	    contador++;
	}
});

before.addEventListener('click', ()=>{
	if(contador > 0){
		contador--;
		slider.style.transform = "translate("+(-ancho*contador)+"px)";
	    slider.style.transition = "transform .8s";
	}
});

function Init() {
	document.onkeydown = Teclado;
}
Init();

function Teclado() {
	let tecla = event.keyCode;

	if (tecla == 39){
		if(contador < sliderIndividual.length){
			slider.style.transform = "translate("+(-ancho*contador)+"px)";
		    slider.style.transition = "transform .8s";
		    contador++;
		}
	}
	else if (tecla == 37) {
		if(contador > 0){
			contador--;
			slider.style.transform = "translate("+(-ancho*contador)+"px)";
		    slider.style.transition = "transform .8s";
		}
	}
}