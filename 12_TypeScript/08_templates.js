function invertir(elementos) {
    var invertido = [];
    for (var posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
var arrayOriginal = ["clientes", "clientes2"];
//let textosInvertidos :string[] = invertir<string>(["clientes","clientes2"]);
var textosInvertidos = invertir(arrayOriginal);
console.log("arrayOriginal: " + arrayOriginal + "\ntextosInvertidos: " + textosInvertidos);
var arrayOriginal2 = [11, 22, 33, 44, 55];
var arrayInvertido = invertir(arrayOriginal2);
console.log("arrayOriginal: " + arrayOriginal + "\ntextosInvertidos: " + textosInvertidos);
/*
let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);

abstract class DAOGenerico <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    stringify(objeto :T){
        return objeto+"";
    }
}
class ArrayGenericDAO <T>{
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

var dao: DAOGenerico<Persona> = null;
dao.add(new Persona("","",""));
*/ 
