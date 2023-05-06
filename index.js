/*1. Crea una función que retorne la potencia de un número dado, esta función
deberá recibir la potencia y el número a potenciar. */
function potencia(a,b){
    return Math.pow(a, b)
}
console.log(potencia(3,2));

/*2. Crea una función que tome el array números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855*/
function sumOfCubes(a,b,c){
     return Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
}
console.log(sumOfCubes(2,3,5))

/*Utilizando función arrow, crear una función que reciba como parámetros un
nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre
es sebastián yabiku y mi edad 33”*/
function persona(nombre, apellido, edad){
    return `Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`
}
console.log(persona("Arturo", "Zamboa", 26))

/*4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar
parametros rest)*/
function sumAll(...args) {
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
console.log(sumAll(1,3,4));

/*5. Crear una función que reciba un array de valores y filtre los valores que no son
string */
function filtrado(arr){
    let filtered = arr.filter(item => typeof(item)  !== 'string');
    console.log(filtered);
}
filtrado([2,"casa"]);

/*6. Cree una función que tome una array de números y devuelva los números ordenados del
mínimo al máximo, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5] */
function ordenar(numeros){
    numeros.sort(function(a, b){return a - b});
    return console.log(numeros)
}
ordenar([4,2]);

/*7. Cree una función que tome una array de números y devuelva los números el
mínimo y el máximo, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5] */
function minMax(...arr){
    min = Math.min(...arr);
    max = Math.max(...arr);
    return [min,max]
}
console.log(minMax(12,34,54,3))

/*12 Cree una función para multiplicar todos los valores de un array por la cantidad
de valores del array dado.
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/

function multiply(...args){
    const mult = args.length
    const result = args.filter(arg => arg * mult)
    console.log(result)
}
multiply();

/* 7 Escriba una función que tome un array de 10 enteros (entre 0 y 9) y devuelva
una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890" */

function formatPhoneNumber(arr) {
    let phoneNumberString = arr.join('');
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

/*8 Dada una palabra, escriba una función que devuelva el primer índice y el último
índice de un carácter */
function captura(palabra, letra){
    let indices = [];
    const arr = palabra.split('');
    let idx = arr.indexOf(letra);
    while(idx != -1){
        indices.push(idx);
        idx = arr.indexOf(letra, idx + 1)
    }
    min = Math.min(...indices);
    max = Math.max(...indices);
    return [min, max]
}
console.log(captura('manzana', 'a'))

/*9. Cree la función que toma una array de objetos y devuelve la suma de los
presupuestos de las personas.
getBudgets([
 { name: "John", age: 21, budget: 23000 },
 { name: "Steve", age: 32, budget: 40000 },
 { name: "Martin", age: 16, budget: 2700 }
]) ➞ 65700
*/
const presupuesto = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
   ]

function getBudgets(){
    let suma = presupuesto.reduce((almacenar, captura) => almacenar + captura.budget, 0);
    console.log(suma)
}

getBudgets();