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