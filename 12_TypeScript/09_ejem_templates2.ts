class Silla{
    nombre: String;
    constructor (nom: String){
        this.nombre=nom;
    }
}

class Sofa{
    nombre: String;
    constructor (nom: String){
        this.nombre=nom;
    }
}

//let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);

abstract class DAOGenerico2 <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    abstract list(): T[];
    stringify(objeto :T){
        return objeto+"";    //Se convierte a String añadiendo la cadena vacia
    }
}

//var dao1: DAOGenerico2<T> = null;

class ArrayGenericDAO2 <T> extends DAOGenerico2<T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    list():T[] {
        return this.almacen;
    }
}

//var daoSilla: DAOGenerico2<Silla>=null;
var daoSilla: DAOGenerico2<Silla>= new ArrayGenericDAO2<Silla>();
var daoSofa: DAOGenerico2<Sofa>=new ArrayGenericDAO2<Sofa>();

daoSilla.add(new Silla("Silla1"));
daoSilla.add(new Silla("Silla2"));

daoSofa.add(new Silla("Sofa1"));
daoSofa.add(new Silla("Sofa2"));

//var dao: DAOGenerico<Persona> = null;
//dao.add(new Persona("","",""));