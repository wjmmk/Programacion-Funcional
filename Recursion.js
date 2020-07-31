/** Explicacion de Recursivida -> Funcion que se llama a si misma hasta que se cumpla una condicion */
/* const conteoregresivo = (a) => {
    if( a < 0 ) return
    console.log(a)
    return conteoregresivo( a - 1)
}

conteoregresivo(5) 

const suma = ( number, sum = 0) => (
    number === 0
     ? sum
     : () => suma( number -1, sum + number)
)
const result = tsuma(8931)// El numero exacto donde se rompe mi maquina es: 8931
console.log(result)*/

//const axios = require('axios');
import axios from "axios";// Si se quiere usar import; se debe agregar esta linea: ("type": "module") dentro del archivo package.json

const llamarApi = async (url, llamados = 0) => {
    try {
        const { data } = await axios.get(url);

        const numerosFiltrados = data.filter( (x) => {
            return x.id <= 5;
        });
        console.log(numerosFiltrados);
        //console.log(data)
    } catch (e) {
        if( llamados > 5){
            return '';
        }

        console.log(e);
        return llamarApi(url, llamados +1 )
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users');