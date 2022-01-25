const { parentPort, workerData } = require("worker_threads");
const { restaurants, restaurant } = workerData

var identicDishesCount = 0
for(const dish of restaurant.menu){
  var isDishIdentic = false
  for(const restaurant2 of restaurants){
    if(restaurant.name === restaurant2.name) continue
    for(const dish2 of restaurant2.menu){
      var sameIngredientsCount = 0
      for(const ingredient of dish.ingredients){
        for(const ingredient2 of dish2.ingredients){
          if(dish.ingredients.length === dish2.ingredients.length && ingredient === ingredient2){
            sameIngredientsCount++
          }
        }
      }
      if(sameIngredientsCount === dish.ingredients.length){
        isDishIdentic = true
      }
    }
  }
  if(isDishIdentic){
    identicDishesCount++
  }
}
parentPort.postMessage({
  identicDishesCount
})