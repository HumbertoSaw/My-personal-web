const botonIrArriba = document.querySelector("#botonIrArriba");

botonIrArriba.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrProyectos = document.querySelector("#botonIrProyectos");

botonIrProyectos.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:600,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrContactos = document.querySelector("#botonIrContactos");

botonIrContactos.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:1250,
		left:0,
		behavior: "smooth"

	})		
});