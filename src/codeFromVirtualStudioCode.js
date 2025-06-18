//Обьявление переменных
// let myName
// myName = 'Dima'
// console.log(myName)

// const yourName = 'Dima'
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




//Example1 - Method (function)
//  const city = {
//     polandCity: "Lodz",
//     cityGreeting: function () {
//                 console.log ("Greetign")
//     }
//  }
//  city.cityGreeting();




//ФУНКЦИИ

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






