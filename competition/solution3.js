const { identicDishesThreshold, restaurants } = require(`${__dirname}/_dataload.js`)

console.time('runtime')

// Cria um indice de ingredientes
const memo = new Map()
for(const restaurant of restaurants){
  const ingredientsMemo = new Map()
  memo.set(restaurant.name, ingredientsMemo)
  for(const dish of restaurant.menu){
    const ingredientsKey = dish.ingredients.sort().join()
    ingredientsMemo.set(dish.name, ingredientsKey)
  }
}

const finalists = []
for(const restaurant1 of restaurants){
  const restaurantMemo1 = memo.get(restaurant1.name)
  var identicDishesCount = 0
  for(const dish1 of restaurant1.menu){
    var isDishIdentic = false
    for(const restaurant2 of restaurants){
      const restaurantMemo2 = memo.get(restaurant2.name)
      if(restaurant1.name === restaurant2.name) continue
      for(const dish2 of restaurant2.menu){
        const ingredientsMemo1 = restaurantMemo1.get(dish1.name)
        const ingredientsMemo2 = restaurantMemo2.get(dish2.name)
        if(ingredientsMemo1 === ingredientsMemo2){
          isDishIdentic = true
        }
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

     (cada restaurante "r") x
   (cada prato do menu "m") x
 (cada ingrediente "i" ^ 2) x   // array sort com menos de 10 elementos
                            +
     (cada restaurante "r") x
   (cada prato do menu "m") x
     (cada restaurante "r") x
   (cada prato do menu "m")
---------------------------
## complexidade = (r * m * i^2) + r^2 * m^2
## O(rmi^2 + r^2 m^2)

## exemplo
r = 200 restaurantes
m = 100 pratos no menu
i = 5 ingredientes em média
resultado = (200 * 100 * 5^2) + 200^2 * 100^2
          = 400.500.000
          // ~25x mais rápido que solution1 (10.000.000.000)


# Complexidade de espaço

  (cada restaurante "r") x
(cada prato do menu "m")
------------------------
## complexidade = r * m
## O(rm)
## resultado = 200 * 100
             = 20.000
             // pior que solution1 (0)
*/