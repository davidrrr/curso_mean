var Calculadora = function (padreDom) {
		
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.inp=CreadorDom.addInput;
	this.btn=CreadorDom.addButton;
	this.operadorA = this.inp("Operando A", "operadorA");
	this.operadorB = this.inp("Operando B", "operadorB");
	this.btn(" + ", this.suma);
	this.btn(" - ", this.resta);
	this.btn(" * ", this.multiplica);
	this.btn(" / ", this.division);
	this.resultado = this.inp("Resultado", "resultado");
}
Calculadora.prototype.suma = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   + parseInt(this.operadorB.value);
}
Calculadora.prototype.resta = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   - parseInt(this.operadorB.value);
}
Calculadora.prototype.multiplica = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   * parseInt(this.operadorB.value);
}
Calculadora.prototype.division = function() {
	this.resultado.value =   parseInt(this.operadorA.value) 
						   / parseInt(this.operadorB.value);
}
