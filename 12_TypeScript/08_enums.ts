enum TipoDeVia{
    Calle = 7,
    Plaza = 3,
    Camino, // Vale 4
    Avenida, // Vale 5
    Carretera = 13, // Vale 13
    Prueba // Vale 14
}

console.log("Calle "+ TipoDeVia.Calle);
console.log("Avenida "+ TipoDeVia.Avenida);
console.log("Prueba "+ TipoDeVia.Prueba);

namespace TipoDeVia{
    // Por defecto todo en un namespace es privado, hace falta export 
    export function esAvenida(texto: string): TipoDeVia{
        if(texto=="Avda"){
            return TipoDeVia.Avenida;
        }
    }
}

namespace TipoDeVia{
    // Por defecto todo en un namespace es privado, hace falta export 
    export function esAvenida2(texto: string): TipoDeVia{
        if(texto=="Avenida"){
            return TipoDeVia.Avenida;
        }
    }
}

var miTipoVia: TipoDeVia = TipoDeVia.Calle;

console.log("Tipo de via: "+ miTipoVia);
console.log("Tipo de via: "+ TipoDeVia[miTipoVia]);

var avenida = TipoDeVia.esAvenida("Avda");

console.log("Tipo de Via: "+ avenida);
switch(avenida){
    case TipoDeVia.Avenida:

    break;
    case TipoDeVia.Calle:

    break;
    default: 
    break;
}