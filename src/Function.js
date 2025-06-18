////ФУНКЦИИ//////


// //Пример1 - области видимости
// const message = "Global privet"; //обьявленную перемен-ю можна использовать в любом месте в коде

// function logMessage() {
//   const message = "Local privet" //обьявленная перемен-я использоваться может только внутри функции
//   console.log(message);
// }
// logMessage();
// console.log(message);



// //Пример2 - функция с переданными параметрами
// function one (message1, count) { // здесь в круглых скобках передаются параметры
//   for (let i = 0; i < count; i++) {
//     console.log(message1)
//   }
// }
// one("Hi",3); // здесь в круглых скобках передаются аргументы,// первый аргумент попадет в первый параметр, второй арг - во второй пар-р
// one("Bye", 2);



// //Пример3.1 - функция с переопределеннием переменной
// const message2 = "Hello";
//   function two (message2, count) {
//   message2 = `${message2} world`; //здесь переопределяем переменную
//   for (let i = 0; i < count; i++) {
//     console.log(message2)
//   }
// }
// two(message2, 3); //первым аргументом передается переменная message2, но так как мы ее переопределили то будет Hello world
//   console.log(message2);


//Пример3.2 - функция с переопределеннием переменной (второй вариант, более правильный)
const globalMessage = "Hello";
function fun_1 (message3, count = 3 ) {
  const messageFormatted = `${message3} world`
  for (let i = 0; i < count; i++) {
    console.log(messageFormatted)
  }
}
fun_1(globalMessage); //первым аргументом передается переменная message2, но так как мы ее переопределили то будет Hello world
console.log(globalMessage);


//Пример4- функция с return
function sum (a, b){
  return a + b;
}
console.log(sum(10, 10));



//Пример5- функция с return
function getAgeType (age){
  if(typeof  age !== 'number') {
    return "Age incorrect";
  }
  if(age < 1 || age > 120) {
    return "Age not exist";
  }
  if(age < 18 ) {
    return "Not 18+";
  }
  return "Adult"
}
console.log(getAgeType("privet") );
console.log(getAgeType(0.5) );
console.log(getAgeType(17));
console.log(getAgeType(35));


//Пример 6
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

//Пример 7 - не рекомендуется так делать, лучше не менять (мутировать) внешние обьекты которые передаются внутри функции как аргументы.
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

//Пример 8 - колбек функции, функция которая вызывается внутри другой функции
// function printName() {
//     console.log ("Dima")
// }
// console.log('Srart')
// setTimeout(printName,2000) //через 2 сек выводится результат функции printName



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

