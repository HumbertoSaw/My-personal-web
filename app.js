// Boton que regresa a la parte de arriba del html principal
const botonIrArriba = document.querySelector("#botonIrArriba");

botonIrArriba.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"

	})		
});
//boton que lleva a la seccion de proyectos
const botonIrProyectos = document.querySelector("#botonIrProyectos");

botonIrProyectos.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:600,
		left:0,
		behavior: "smooth"

	})		
});
//boton que lleva a la seccion de contactos
const botonIrContactos = document.querySelector("#botonIrContactos");

botonIrContactos.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:1250,
		left:0,
		behavior: "smooth"

	})		
});
//Boton que recarga la pagina
const botonRecargar = document.querySelector("#botonRecargar");
botonRecargar.addEventListener("click", function(){
	window.location.reload();

});