//Пример1 - Дан обьект. И нужно в качестве ключей установить другие обьекты

const map = new Map()

const user1 = {
    id: 1,
    name: "test"
}
const user2 = {
    id: 2,
    name: "test2"
}
const user3 = {
    id: 3,
    name: "test3"
}
//Заносим значения user1 user2 user3 как ключи и даем им значения
map.set(user1, 1); // сначала пишем какой ключ установить, а потом его значение
map.set(user2, 2);
map.set(user3, 3);

//Пример1.1 - разные методы
// console.log(map.get(user1)) // проверить что находится по ключу (получить значение по ключу)
// console.log(map.has(user3)) //проверить есть ли заданный ключ в коллекции
// console.log(map.has(100)) //проверить есть в коллекции ли ключ со значением 100, получим false
// console.log(map.delete(user1)) // по определенному ключу удалить запись
// console.log(map.size) //проверить сколько элементов сейчас находится в коллекции
// console.log(map.clear) //полная очистка коллекции

//Пример1.2 - получить все ключи коллекции
const mapKeys = map.keys()
console.log(mapKeys)

//Пример1.3 - получить все значения коллекции
const mapValues = map.values()
console.log(mapValues)

//Пример1.3 - получить mapIterator, у которого есть такие вида обьекты - ключ и значение
const mapIterator = map.entries()
console.log(mapIterator)

//Пример1.4 - перебрать ключи и получить обьекты и можна дальше работать с ними (а если нужно значение mapValues или mapIterator, использовать такой же цикл)
for (const key of mapKeys) {
    console.log('current key:' , key)
}