




 export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'garber';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );