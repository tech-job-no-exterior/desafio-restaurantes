const makeMenu = require(`${__dirname}/../datasets/makeMenu`)

const numRestaurants = 200
const numMenuItems = 100
const identicDishesThreshold = 1

console.time('datasets loaded')
const restaurants = []
for(var i = 0; i < numRestaurants; i++){
  restaurants.push({
    name: `restaurant ${i}`,
    menu: makeMenu(numMenuItems, i),
    ingredientsIndex: new Set()
  })
}
console.timeEnd('datasets loaded')

module.exports = {
  numRestaurants,
  numMenuItems,
  identicDishesThreshold,
  restaurants
}