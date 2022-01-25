const { identicDishesThreshold, restaurants } = require(`${__dirname}/_dataload.js`)

console.time('runtime')

// Cria um indice duplo de ingredientes
const memo = new Map()
const memoRestaurants = new Map()
for(const restaurant of restaurants){
  const ingredientsMemo = new Map()
  const ingredientsRestaurantMemo = new Set()
  memo.set(restaurant.name, ingredientsMemo)
  memoRestaurants.set(restaurant.name, ingredientsRestaurantMemo)
  for(const dish of restaurant.menu){
    const ingredientsKey = dish.ingredients.sort().join()
    ingredientsMemo.set(dish.name, ingredientsKey)
    ingredientsRestaurantMemo.add(ingredientsKey)
  }
}

const finalists = []
for(const restaurant1 of restaurants){
  const restaurantMemo1 = memo.get(restaurant1.name)
  var identicDishesCount = 0
  for(const dish1 of restaurant1.menu){
    var isDishIdentic = false
    for(const restaurant2 of restaurants){
      const restaurantMemo2 = memoRestaurants.get(restaurant2.name)
      if(restaurant1.name === restaurant2.name) continue
      const ingredientsMemo1 = restaurantMemo1.get(dish1.name)
      if(restaurantMemo2.has(ingredientsMemo1)){
        isDishIdentic = true
      }
    }
    if(isDishIdentic){
      identicDishesCount++
    }
  }
  if(identicDishesCount <= identicDishesThreshold){
    finalists.push(restaurant1)
  }
}
console.timeEnd('runtime')

console.log(`Encontrado(s) ${finalists.length} restaurantes(s) finalista(s).`)

/*
# Complexidade de execução

(    (cada restaurante "r") *
    (cada item do menu "m") *
 (cada ingrediente "i" ^ 2) *   // array sort com menos de 10 elementos
                          2 *   // salva os indices no restaurante e nos itens dos menus
                          ) +
     (cada restaurante "r") *
    (cada item do menu "m") *
     (cada restaurante "r")
---------------------------
## complexidade = (r * m * i^2 * 2) + r^2 * m   // não usa o "* 2" no Big-O
## O(rmi^2 + r^2 m)

## exemplo
r = 200 restaurantes
m = 100 items no menu
i = 5 ingredientes em média
resultado = (200 * 100 * 5^2 * 2) + 200^2 * 100
          = 5.000.000
          //    ~80x mais rápido que solution3 (   400.500.000)
          // ~2.000x mais rápido que solution1 (10.000.000.000)


# Complexidade de espaço

  (cada restaurante "r") *
(cada prato do menu "m") +
  (cada restaurante "r")
------------------------
## complexidade = (r * m) + r   // não usa o "+ r" no Big-O
## O(rm)
## resultado = 200 * 100 + 200
             = 20.200
             // ~0.01x pior que solution3 (20.000)
             //        pior que solution1 (     0)
*/