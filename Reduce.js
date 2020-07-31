// const reducer = (acumulador, valorActula) => nuevoAcumulador;

const reducido = [1, 2, 3].reduce( (acc, el) => acc + el , 0)
// console.log(reducido)

const numeros  = [1, 2, 3, 4, 5];

const mascotas = [
    {nombre: 'Puchini', edad: 12, tipo: 'perro'},
    {nombre: 'Chanchito', edad: 3, tipo: 'perro'},
    {nombre: 'Pulga', edad: 10, tipo: 'perro'},
    {nombre: 'Pelusa', edad: 16, tipo: 'gato'}
];

const indexed = mascotas.reduce( (acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})

// console.log(indexed)

const anidado = [1, [2, 3], 4, [5]]

const arrayPlano = anidado.reduce( (acc, el) => acc.concat(el), []);
console.log(arrayPlano)