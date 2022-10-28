const allNames = require('./names.json')
const allIngredients = require('./ingredients.json')
const fs = require('fs')

module.exports = (quantity) => {
  const fileName = `people-${quantity}.json`
  try {
    return require(`${__dirname}/stored/${fileName}`)
  } catch (ignore) {}

  const output = []
  for(var i = 1; i <= quantity; i++){
    const randomNameIndex = Math.floor(Math.random() * allNames.length)
    const randomLastNameIndex = Math.floor(Math.random() * allNames.length)
    const name = `${allNames[randomNameIndex]} ${allNames[randomLastNameIndex]}`

    const allIngredientsCopy = allIngredients.slice(0)
    const randomIngredientsQuantity = Math.round(Math.random() * 2)
    const allergies = []
    for(var ii = 0; ii < randomIngredientsQuantity; ii++){
      const randomIngredientsIndex = Math.floor(Math.random() * (allIngredientsCopy.length - randomIngredientsQuantity))
      allergies.push(allIngredientsCopy[randomIngredientsIndex])
      allIngredientsCopy.splice(randomIngredientsIndex, 1);
    }
    output.push({
      name,
      allergies
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