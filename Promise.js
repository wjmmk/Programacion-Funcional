/* const p1 = Promise.resolve(1);

console.log(p1);

p1
 .then(x => x + 5)
 .then(x => Promise.resolve(x + 6))
 .then(x => Promise.reject('Error al tratar de resolver la Promesa', x))
 .then(x => console.log('Esto no se va a llamar', x))
 .catch( e => console.log(e)) */

 /* const delayed = x => new Promise( (res, rej) => setTimeout( () => res(x), 3000));

 delayed(7)
    .then(x => console.log(x)) */

import 'isomorphic-fetch'

fetch('https://jsonplaceholder.typicode.com/users')
  .then(x => x.json())
  .then((x) => console.log(x))