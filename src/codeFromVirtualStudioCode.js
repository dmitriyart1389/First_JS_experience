//Обьявление переменных
// let myName
// myName = 'Dima'
// console.log(myName)

// const yourName = 'Mariana'
// console.log(yourName)


// Создел переменную, записал в нее обьект
// const one = {a:10, b:false}
// console.log(one)

// Создал вторую переменную, записал в нее значение первого обьета one, и после изменил свойства в обьекте
// const two = one
// two.a = 20
// two.b = true
// two.c = 'privet'
// console.log(two)


//В последней строке “а” уже не функция, а переменная со значением, по этому и ругается
//Example 1
// function a() {
//     console.log ('Bye')
// }
// a=10
// a()


//Example 2 - получение значений обьекта
// const myCity  = {
//     city: "Wroclaw",
//     popular: true,
//     country: "Poland"
// }
// console.log(myCity.city)




//Используя точечную запись можна менять значение свойств обьекта и создавать новые свойства
// Пример1
// const myCity  = {
//     city: "Wroclaw",
// }
// myCity.city = "Krakow"
// console.log(myCity)

// Пример2 - Мы не меняем значение переменной myCity, поскольку у нас const, а просто добавляем значение в обьект. Так делать можна когда const
// Так же можем удалять свойства обьекта
// const myCity  = {
//     city: "Wroclaw",
// }
// myCity.people = "Angry"
// myCity.number = 500000
// console.log(myCity)

// delete myCity.people
// console.log(myCity)


// Пример 1 - Добавляем новое значение в обьект который ранее создан.
// Нужно использовать квадратные скобки в том случае,если название свойства является значением той или иной переменной.
// То есть нам нужно значение "town", которое является значением переменной yourCity сделать свойством обьекта myCity.
// А если напишу myCity.yourCity , а не через квадратные скобки то создастся свойство которое называется yourCity,
// но нам необходимо свойство "town"
// const myCity  = {
//     city: "Wroclaw",
// }
// const yourCity = "town" //create new variable
// myCity [yourCity] = "Berlin"
// console.log(myCity)



//Example1 - Method (function)
//  const city = {
//     polandCity: "Lodz",
//     cityGreeting: function () {
//                 console.log ("Greetign")
//     }
//  }
//  city.cityGreeting();


//МУТИРОВАНИЕ
//Пример1 - Мутирование обьекта
// const myCity  = {
//     city: "Wroclaw",
// }
// myCity.city = "Gdansk"
// myCity.people = "Angry"
// myCity.number = 500000
// console.log(myCity)

//Пример2 - Мутирование копий, Обе переменные person ссылаются на один и тот же объект в памяти и будут давать один и тот же результат.
// const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = myCity
// myCity2.city = "Gdansk"
// myCity2.people = "Angry"
// myCity.number = 500000
// console.log(myCity)


//МУТИРОВАНИЕ. Как избежать мутаций (использовать Object.assign). Object.assign можна использовать когда нет вложенных обьектов
// Пример1
//const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = Object.assign({},myCity)

// myCity2.city = "Gdansk"
// myCity2.people = "Angry"
// console.log(myCity2.city)
// console.log(myCity.city)

//Пример2 - как избежать мутаций (можна использовать не Object.assign а троеточие {...myCity})
// const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = {...myCity}
// myCity2.city = "Gdansk"
// console.log(myCity2.city)
// console.log(myCity.city)

//Пример3 - как избежать мутаций
// const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = JSON.parse(JSON.stringify(myCity))
// myCity2.city = "Gdansk"
// console.log(myCity2.city)
// console.log(myCity.city)



//ФУНКЦИИ
//Пример1
// let a = 5
// let b = 10
// function sum(a,b) {
//     const c = a+b
// console.log(c)
// }
// sum(a,b) // вызываю функцию

//  a = 100
//  b = 10
// sum(a,b) // если присвоил др значения то так же могу повторно вызвать функцию, но результат уже будет другой

//Пример2 - не рекомендуется так делать, лучше не менять (мутировать) внешние обьекты которые передаются внутри функции как аргументы.
// const personOne = {
//     name: "Dima",
//     age: 34
// }
// function increasePersonAge(person){ //функция мутирует (изменяет) внешний обьект
//     person.age +=1
//     return person
// }
// increasePersonAge(personOne) //передача обьекта по ссылке
// console.log(personOne.age)

//Пример3 - колбек функции, функция которая вызывается внутри другой функции
// function printName() {
//     console.log ("Dima")
// }
// console.log('Srart')
// setTimeout(printName,2000) //через 2 сек выводится результат функции printName


//ОБЛАСТИ ВИДИМОСТИ
// const a=55
// function myFn() {
//     function innerFn(){
//         console.log(a)
//     }
//     innerFn()
// }
// myFn()



//ОПЕРАТОР ... - это оператор разделения обьекта на свойства
// Можна создавать новые обьекты на основе других и так же обьеденять
//Пример1 - создание новогого обьекта
// const button = {
//     width: 200,
//     text: 'Buy'
// }
// const redButton = {
//     ...button, //разделяем обьект на свойства, а потом добавляем новые свойства в обьект.
//     //Если в обьекте "button" уже есть свойство "color" то color: 'red' который мы указываем ниже перезапишет тот color что в обьекте
//     //Если поменять местами ...button, и  color: 'red' - то наоборот будет, color: 'red' перезапишется тем что в обьекте
//     color: 'red'
// }
// console.table(redButton) // вывести содержание в табличном виде



//СТРЕЛОЧНАЯ ФУНКЦИЯ
//Пример1 - как дать имя стрелочной функции
// const myFunction = (a,b) =>{
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFunction(5,3))

//Пример2
// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt: addedAt,
// })
//     const firstPost = {
//         id:1,
//         author: "Dima"
//     }
// newPost(firstPost)
// const a = newPost(firstPost)
// console.table(a)


//МАССИВЫ
//Пример1 - пробую разные методы массивов
// const myArray = [10,20,55]
// console.log(myArray)
// console.log(myArray[1])

// myArray[2] = 'abc'
// console.log(myArray)
// console.log(myArray[2])

// myArray[3] = 'newElement'
// console.log(myArray)
// console.log(myArray[3])

// myArray.push(65) //метод добавляет значение в конце массива
// console.log(myArray)

// myArray.pop(65)//метод удаляет последнее значение в конце массива
// console.log(myArray)

//Пример2 - методы добавление и удаление последних элементов массива
// const myArray = [10,20,55]
// console.log(myArray)

// const removeElement = myArray.pop() //удаляет последний элемент массива
// console.log(myArray)
// console.log(removeElement) //выводит с конца удаленный элемент массива

// myArray.unshift('first') //добавляет элемент в начало массива
// console.log(myArray)
// myArray.shift('first') //удаляет 1й элемент массива
// console.log(myArray)

// Пример3 - метод FOREACH, перебирает все элементы массива и возможно выполнить действия с этими элементами
// const myArray = [10,20,55]
// myArray.forEach(element => console.log(element)) //перебирает и выводит все элементы массива
// console.log(myArray)
// myArray.forEach(element => console.log(element+1)) //добавляем по единице к каждому элементы массива

//Пример3 - метод МАР, перебирает все элементы массива и возращает новый массив (не меняют оригинальный массив)
// const myArray = [10,20,55]
// console.log(myArray)
// const newArray = myArray.map(element => element+10) //перебираем и добавляем по единице к каждому элементы массива и возвращаем новый массив
// console.log(newArray)
// console.log(myArray)

// const newArray1 = myArray.map( element => console.log( element+1))
// console.log(newArray1)


//ОПЕРАТОР IF
//Example1
// const person = {
//     age: 20
// }
// if (!person.name){ //если НЕ name в обьекте person- то выводим "Имя не указано"
//     console.log ("Имя не указано")
// }

//Example2
// const age = 25
// if (age > 18) {
//     console.log("Adult")
// }else if (age>=12){
//     console.log ("Teenager")
// }else {
//     console.log ("Child")
// }

// Так же можно переписать по другому где используется только IF
//Example2.1
// const age = 16
// if (age >= 18) {
//     console.log("Adult")
// }
// if (age>=12 && age < 18){
//     console.log ("Teenager")
// }
// if (age < 12){
//     console.log ("Child")
// }

//Example3
// const a = true
// const b = 10
// const sumPositiveNumbers = (a, b) => {
//     if (typeof a!== "number" || typeof b !=="number") {
//         return "One of the argumets is not number"
//     }
//     if (a<= 0 || b<= 0) {
//         return "Numbers are positive"
//     }
//     return a+b
// }
// console.log(sumPositiveNumbers (a,b))



//ТЕРНАРНЫЙ ОПЕРАТОР
// const value = 0
// value
// ? console.log ("Условия истинно")
// : console.log ("Условие ложно")


//ЦИКЛ for
// const myArray = ["first", "second", "third"]
// for (let i =0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

//ЦИКЛ forEach - перебор элементов в массиве
// const myArray = ["first", "second", "third"]
// myArray.forEach ((element,index) => {
//     console.log(element,index)
// } )

//ЦИКЛ do while - когда нужно выполнить хотя бы раз, даже если условия ложно. Например если i=10
// let i =0
// do {
//     console.log(i);
//     i++;
//     } while(i < 5);


//ЦИКЛ for in - с помощью него можна перебрать все свойства обьекта

const myObject = {
    x: 10,
    y: true,
    z:"abc"
}
for (const key in myObject){
    console.log(key, myObject[key])
}