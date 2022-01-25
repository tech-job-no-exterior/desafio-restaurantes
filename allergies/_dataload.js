const makePeople = require(`${__dirname}/../datasets/makePeople`)
const makeMenu = require(`${__dirname}/../datasets/makeMenu`)

const numPeople = 10
const numMenuItems = 1000

console.time('datasets loaded')
const people = makePeople(numPeople)
const menu = makeMenu(numMenuItems)
console.timeEnd('datasets loaded')

module.exports = {
  numPeople,
  numMenuItems,
  people,
  menu
}