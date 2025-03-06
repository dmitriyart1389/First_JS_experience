// const set = new Set()
// const user = {
//     id: 1,
//     firstName: 'John',
// }
// set.add(user)//обьект user добавить в коллекцию set
// console.log(set) // в консоли видим что set хранит один обьект

//Пример1.1 - сделать из массива numbers массив уникальных значений
const numbers = [1,2,2,3,3,4,5,6]
const set = new Set()
for (const key of numbers) {
    set.add(key) //на каждой итерации в set добавляем текущий элемент в переборе. то есть текущее число
}
console.log(set) //результат : set состоит из 6 элементов , а не 8
console.log(set.has(1)) // проверяем есть ли к коллекции заданный элемент, результат :  true

//Пример1.2 - перебрать значение и получить вывод элементов
for (const value of set.values()) {
    console.log(value)
}
//Пример1.2 - вариант перебора  значения  с помощью
set.forEach(value => {
    console.log(value)
})