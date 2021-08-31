const botonIrArriba = document.querySelector("#botonIrArriba");

botonIrArriba.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"

	})		
});