/*var llamado = " te espero en casa a las"

function llama (nombre, hora) {


    return ("Hola " + nombre + llamado + " " + hora )
}
    console.log(llama("Agos", 22));*/

    /*let miArray = [ 1, 2 , 3]
miArray.pop ()
 // elimina el 3 y si hacemos console.log , osea..
console.log(miArray.pop()) */
/*let miArray = [ 1, 2 , 3]
miArray.push (4 , 5)
// agrega el 4 y el 5, si hacemos console.log: 
console.log(miArray.push (3));
console.log(miArray);
console.log(miArray.push (5 , 6)) ;
console.log(miArray);*/
// retornará los nuevos elementos del array

/*let miArray = [1, 2, 3, 4]

// si le hago console.log 
console.log(miArray.unshift(0));
console.log(miArray);
//muestra por pantalla 5 que es la cantidad de elementos que contiene el array.
*/

let miArray = [ 1, 2 , 3]
let arrayJSON = JSON.stringify(miArray)
// ahora hacemos un console.log para ver como quedo ahora.
console.log(arrayJSON)
//console.log(miArray);

let arrayOriginal = JSON.parse (arrayJSON)
// vamos a ver como quedó 

console.log(arrayOriginal);





