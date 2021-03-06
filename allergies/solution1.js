const { people, menu } = require(`${__dirname}/_dataload.js`)

console.time('runtime');
const safeDishes = []

for(const dish of menu) {
  var isSafe = true
  for(const ingredient of dish.ingredients) {
    for(const person of people) {
      for(const allergy of person.allergies) {
        if(allergy === ingredient){
          isSafe = false
          break
        }
      }
    }
  }
  if(isSafe){
    safeDishes.push(dish)
  }
}
console.timeEnd('runtime');

console.log(`Encontrado(s) ${safeDishes.length} pratos(s) seguro(s).`)

/*
# Complexidade de execução
(cada prato do menu "m") *
  (cada ingrediente "i") *
       (cada pessoa "p") *
      (cada alergia "a")
------------------------
## complexidade = m * i * p * a
## O(mipa)

m = 1.000.000 pratos no menu
i = 5 ingredientes em média
p = 75 pessoas
a = 3 alergias em média
## resultado = 1.000.000 * 5 * 75 * 3
             = 1.125.000.000


# Complexidade de espaço

## complexidade = constante (não varia)
## O(1)
## resultado = 0
*/
