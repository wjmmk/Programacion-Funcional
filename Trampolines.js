const trampoline = fn => (...args) => {
    let result = fn(...args)
    while( typeof result === 'function') {
        result = result()
    }
    return result;
}

const suma = ( number, sum = 0) => (
    number === 0
     ? sum
     : () => suma( number -1, sum + number)
)
const tsuma = trampoline(suma)
const result = tsuma(1000000000)// El numero exacto donde se rompe mi maquina es: 8931
console.log(result)