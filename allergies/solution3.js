const { people, menu } = require(`${__dirname}/_dataload.js`)

console.time('runtime');
// @TODO memoizar alguma coisa?

const safeDishes = []
// @TODO desenvolver solução
console.timeEnd('runtime');

console.log(`Encontrado(s) ${safeDishes.length} pratos(s) seguro(s).`)

/*
# Complexidade de execução

@TODO Calcular complexidade


# Complexidade de espaço

@TODO Calcular complexidade
*/
