const allIngredients = require(`${__dirname}/ingredients.json`)
const fs = require('fs')

module.exports = (quantity, delta = null) => {
  const fileName = `menu-${quantity}${(delta !== null) ? '-' + delta : ''}.json`
  try {
    return require(`${__dirname}/stored/${fileName}`)
  } catch (ignore) {}

  const output = []
  for(var i = 1; i <= quantity; i++){
    const allIngredientsCopy = allIngredients.slice(0)
    const randomIngredientsQuantity = Math.round(Math.random() * 7) + 3
    const ingredients = []
    for(var ii = 0; ii < randomIngredientsQuantity; ii++){
      const randomIngredientsIndex = Math.floor(Math.random() * (allIngredientsCopy.length - randomIngredientsQuantity))
      ingredients.push(allIngredientsCopy[randomIngredientsIndex])
      allIngredientsCopy.splice(randomIngredientsIndex, 1);
    }
    output.push({
      name: `item ${i}`,
      ingredients
    })
  }

  fs.writeFileSync(`${__dirname}/stored/${fileName}`, "[")
  for(var i = 0; i < output.length; i++){
    try{
      var outputStr = JSON.stringify(output[i]) + ((i === output.length - 1) ? "]" : ",")
      fs.appendFileSync(`${__dirname}/stored/${fileName}`, outputStr, (err) => {
        if(err){
          console.log(`appendFileSync error`)
          console.log(err)
          console.log(output[i])
        }
      })
    } catch (err){
      console.log(`unknown index: ${i}`)
      console.log(err)
      console.log(output[i])
      break;
    }
  }
  return output
}