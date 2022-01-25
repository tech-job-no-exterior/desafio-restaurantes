const { identicDishesThreshold, restaurants } = require(`${__dirname}/_dataload.js`)

console.time('runtime')
const finalists = []
for(const restaurant of restaurants){
  var identicDishesCount = 0
  for(const dish of restaurant.menu){
    var isDishIdentic = false
    for(const restaurant2 of restaurants){
      if(restaurant.name === restaurant2.name) continue
      for(const dish2 of restaurant2.menu){
        var sameIngredientsCount = 0
        for(const ingredient of dish.ingredients){
          for(const ingredient2 of dish2.ingredients){
            if(ingredient === ingredient2){
              sameIngredientsCount++
            }
          }
        }
        if(sameIngredientsCount === dish.ingredients.length && dish.ingredients.length === dish2.ingredients.length){
          isDishIdentic = true
        }
      }
    }
    if(isDishIdentic){
      identicDishesCount++
    }
  }
  if(identicDishesCount <= identicDishesThreshold){
    finalists.push(restaurant)
  }
}
console.timeEnd('runtime')

console.log(`Encontrado(s) ${finalists.length} restaurantes(s) finalista(s).`)

/*
# Complexidade de execução

  (cada restaurante "r") x
(cada prato do menu "m") x
  (cada restaurante "r") x
(cada prato do menu "m") x
  (cada ingrediente "i") x
  (cada ingrediente "i") 
------------------------
## complexidade = r^2 * m^2 * i^2

## exemplo
r = 200 restaurantes
m = 100 pratos no menu
i = 5 ingredientes em média
resultado = 200^2 * 100^2 * 5^2
          = 10.000.000.000


# Complexidade de espaço

## complexidade = constante (não varia)
*/