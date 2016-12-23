var CreadorDOM = function () {
	
}
CreadorDOM.prototype.addInput = function(texto, nombre) {		
	var texto = document.createTextNode(texto);
	this.formCalc.appendChild(texto);
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	this.formCalc.appendChild(document.createElement("br"));
	nuevoInput.name = nombre;
	nuevoInput.value = "0";
	nuevoInput.setAttribute("size", "12");
	return nuevoInput;
}
CreadorDOM.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
