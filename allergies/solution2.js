const { people, menu } = require(`${__dirname}/_dataload.js`)

console.time('runtime');

const allergies = []
for(const person of people) {
  for(const allergy of person.allergies) {
    if(!allergies.includes(allergy)){
      allergies.push(allergy)
    }
  }
}
console.log(`A lista combinada de alergias contem ${allergies.length} items.`)

const safeDishes = []
for(const dish of menu) {
  var isSafe = true
  for(const ingredient of dish.ingredients) {
    for(const allergy of allergies) {
      if(allergy === ingredient){
        isSafe = false
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

(
                    (cada pessoa "p") *
         (cada alergia no grupo "a'")   // Atenção aqui! é o conjunto total de alergias
) +
(
             (cada prato do menu "m") *
               (cada ingrediente "i") *
(procurar se contém em allergies "a'")   // array.includes() tem complexidade linear => O(a')
)
----------------------------
## complexidade = (p * a') + (m * i * a')
## O(pa' + mia')

m = 1.000.000 pratos no menu
i = 5 ingredientes em média
p = 75 pessoas
a = 3 alergias em média
a' = 30 alergias no grupo (alergias únicas no grupo)
n = Qual seria a complexidade disso, ein?
## resultado = (1.000.000 * 5 * 30) + (75 * 30)
             = 155.002.225
             // ~7.25x mais rápido que solution1 (1.125.000.000)


# Complexidade de espaço

(cada alergia no grupo "a'")
----------------------------
## complexidade = a'
## O(a')
## resultado = 30
             // pior que solution1 (0)
*/
