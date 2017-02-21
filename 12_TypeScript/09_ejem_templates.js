var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Silla = (function () {
    function Silla(nom) {
        this.nombre = nom;
    }
    return Silla;
}());
var Sofa = (function () {
    function Sofa(nom) {
        this.nombre = nom;
    }
    return Sofa;
}());
//let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);
var DAOGenerico2 = (function () {
    function DAOGenerico2() {
    }
    DAOGenerico2.prototype.stringify = function (objeto) {
        return objeto + ""; //Se convierte a String añadiendo la cadena vacia
    };
    return DAOGenerico2;
}());
//var dao1: DAOGenerico2<T> = null;
var ArrayGenericDAO2 = (function (_super) {
    __extends(ArrayGenericDAO2, _super);
    function ArrayGenericDAO2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.almacen = [];
        return _this;
    }
    ArrayGenericDAO2.prototype.add = function (objeto) {
        this.almacen.push(objeto);
    };
    ArrayGenericDAO2.prototype.del = function (objeto) {
        // recorrer, buscar y eliminar! (Terminator)
    };
    ArrayGenericDAO2.prototype.list = function () {
        return this.almacen;
    };
    return ArrayGenericDAO2;
}(DAOGenerico2));
//var daoSilla: DAOGenerico2<Silla>=null;
var daoSilla = new ArrayGenericDAO2();
var daoSofa = new ArrayGenericDAO2();
daoSilla.add(new Silla("Silla1"));
daoSilla.add(new Silla("Silla2"));
daoSofa.add(new Silla("Sofa1"));
daoSofa.add(new Silla("Sofa2"));
//var dao: DAOGenerico<Persona> = null;
//dao.add(new Persona("","","")); 
