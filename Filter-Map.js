
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mascotas = [
    {nombre: 'Puchini', edad: 12, tipo: 'perro'},
    {nombre: 'Chanchito Feliz', edad: 3, tipo: 'perro'},
    {nombre: 'Pulga', edad: 10, tipo: 'perro'},
    {nombre: 'Pelusa', edad: 16, tipo: 'gato'}
];

/** Implementando el Metodo Filter */
/* // const numerosFiltrados = numeros.filter( i => i <5);
const numerosFiltrados = numeros.filter( (i) => {
    return i < 5;
});
// console.log(numerosFiltrados);

const catPets = mascotas.filter( (x) => {
    return x.tipo == 'perro';
})
// console.log(catPets); */

/** Implementando el Metodo Map() */
let numbers = [1, 5, 10, 15];
let double = numbers.map( x => x*2);
//console.log(double);

// Esto devuelve la raiz cuadrada
let numbers2 = [1, 4, 9];
let roots = numbers2.map( x => Math.sqrt(x));
//console.log(roots);

// Trabajando con el Array mascotas
const suma = (ns) => {
    let acumulado = 0;
    for(i=0; i < ns.length; i++){
        acumulado += ns[i];
    }
    return acumulado;
}
const edades = mascotas.map( x => x.edad)
//const result = suma(edades)
const result = edades.reduce( (acc, el) => acc + el, 0);// Esta linea no muestra como se suman todos los elementos de un Array en Programacion Funcional.
console.log(result / edades.length)