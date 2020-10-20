//Ejercicio 1
/*implementa una funcion que ordene alphabeticamente las siguientes palabras Perro, Gato, Casa, Vaca, Bañera, Terraza*/
let words = ['Perro', 'Gato', 'Casa', 'Vaca', 'Bañera','Terraza'];
console.log(words.sort());

//Ejercicio 2
/*implementa una función que haga el calculo de valor total de una factura de lo siguientes elementos [{name: 'taza', price: 20}, [{name: 'polo', price: 40}, [{name: 'jeans', price: 60}]*/

let factura = [{name: 'taza', 
                price: 20
               }, 
               {name: 'polo', 
                price: 40
               }, 
               {name: 'jeans', 
                price: 60
              }];

const valorTotal = factura.map(el => el.price).reduce((acc,nmm)=>{
                            return acc + nmm;
                        }, 0);

console.log(valorTotal);

//Ejercicio 3
/*valida si alguno de los elementos de la lista anterior (pregunta 2) es mayor a 50*/

const valid = (array) => {
    return array > 50
}

console.log(factura.map(el => el.price).filter(valid));
