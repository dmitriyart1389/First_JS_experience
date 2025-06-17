//
// //Пример1 - области видимости
// const message = "Global privet"; //обьявленную перемен-ю можна использовать в любом месте в коде
//
// function logMessage() {
//   const message = "Local privet" //обьявленная перемен-я использоваться может только внутри функции
//   console.log(message);
// }
// logMessage();
// console.log(message);
//
//
//
// //Пример2 - функция с переданными параметрами
// function one (message1, count) { // здесь в круглых скобках передаются параметры
//   for (let i = 0; i < count; i++) {
//     console.log(message1)
//   }
// }
// one("Hi",3); // здесь в круглых скобках передаются аргументы,// первый аргумент попадет в первый параметр, второй арг - во второй пар-р
// one("Bye", 2);
//
//
//
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