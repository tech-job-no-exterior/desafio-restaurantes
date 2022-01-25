const { identicItemsThreshold, restaurants } = require(`${__dirname}/../_dataload.js`)
const { Worker } = require("worker_threads")

console.log(__dirname  );

console.time('runtime')
const finalists = []
var numThreads = restaurants.length
for(const restaurant of restaurants){
  const worker = new Worker(`${__dirname}/process.js`,{
    workerData: {
      restaurants,
      restaurant
    }
  })
  worker.on('message', (result) => {
    if(result.identicDishesCount <= identicItemsThreshold){
      finalists.push(result.restaurant)
    }
  })
  worker.on('exit', () => {
    numThreads--
    if(numThreads === 0){
      console.log(`Encontrado(s) ${finalists.length} restaurantes(s) finalista(s).`)
      console.timeEnd('runtime')
    }
  })
}