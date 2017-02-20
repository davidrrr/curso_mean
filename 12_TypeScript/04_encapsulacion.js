var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Padre = (function () {
    function Padre() {
        this.propPrivada = 0;
        this.propPublica = 0;
        this.propProtegida = 0;
    }
    Padre.prototype.damePropPrivada = function () {
        return this.propPrivada;
    };
    return Padre;
}());
var tuPadre = new Padre();
console.log("PropPrivada Padre= " + tuPadre.damePropPrivada() + " propPublica = " + tuPadre.propPublica);
var HijoDePadre = (function (_super) {
    __extends(HijoDePadre, _super);
    function HijoDePadre(otroValor) {
        var _this = _super.call(this) || this;
        // this.propPrivada= 33;
        _this.propPublica = 55;
        _this.propProtegida = 66;
        _this.propValor = otroValor;
        return _this;
    }
    HijoDePadre.prototype.toString = function () {
        return this.propPublica + " " + this.propValor;
    };
    return HijoDePadre;
}(Padre));
var tuHijoSiTienes = new HijoDePadre(89);
//tuHijoSiTienes.propProtegida=7;
//¿¿Si creo un objeto de tipo Padre y le asigno un objeto de tipo hijo, ¿Que pasa si llamamos al método toString()???
var otroHijo = new HijoDePadre(89);
console.log(otroHijo.toString());
