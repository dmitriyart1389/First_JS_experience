////ФУНКЦИИ//////

//Пример 1 - функция с параметрами и аргументами
// let a = 19
// let b = 10
// function sum(a,b) {
//     const c = a+b
// console.log(c)
// }
// sum(a,b) // вызываю функцию
//
// a = 100
// b = 10
// sum(a,b) // если присвоил др значения то так же могу повторно вызвать функцию, но результат уже будет другой


// Пример 1.1 - области видимости
// const message = "Global privet"; // обьявленную перемен-ю можна использовать в любом месте в коде
// function logMessage() {
//   const message = "Local privet" // обьявленная перемен-я использоваться может только внутри функции
//   console.log(message);
// }
// logMessage();
// console.log(message);



// Пример2 - функция с переданными параметрами
// function one (message1, count) { // при обьявлении функции в круглых скобках передаются параметры
//   for (let i = 0; i < count; i++) { //здесь и в след строчке тело функции
//     console.log(message1)
//   }
// }
// one("Hi",3); // при вызове функции в круглых скобках передаются аргументы
// one("Bye", 2); // первый аргумент попадет в первый параметр, второй арг - во второй пар-р



// Пример 3.1 - функция с переопределеннием переменной
// const message2 = "Hello";
//   function two (message2, count) {
//   message2 = `${message2} world`; //здесь переопределяем переменную
//   for (let i = 0; i < count; i++) {
//     console.log(message2)
//   }
// }
// two(message2, 3); //первым аргументом передается переменная message2, но так как мы ее переопределили то будет Hello world
//   console.log(message2);


//Пример 3.2 - функция с переопределеннием переменной (второй вариант, более правильный)
// const globalMessage = "Hello";
// function fun_1 (message3, count = 3 ) {
//   const messageFormatted = `${message3} world`
//   for (let i = 0; i < count; i++) {
//     console.log(messageFormatted)
//   }
// }
// fun_1(globalMessage); //первым аргументом передается переменная message3, но так как мы ее переопределили то будет Hello world
// console.log(globalMessage);



// //Пример 4.1- функция с return вариант с вызовом функции
// function sum (a, b){
//   return a + b;
// }
// console.log(sum(10, 19));

//Пример 4.2- функция с return (вариант с присвоением результата переменной)
// function sum (a, b){
//   return a + b;
// }
// const result = sum(10, 15); // присвоение результата переменной result
// console.log(result); //вывод результата в консоль


//Пример 5- функция с return
// function getAgeType (age){
//   if(typeof  age !== 'number') {
//     return "Age incorrect";
//   }
//   if(age < 1 || age > 120) {
//     return "Age not exist";
//   }
//   if(age < 18 ) {
//     return "Not 18+";
//   }
//   return "Adult"
// }
// console.log(getAgeType("privet") );
// console.log(getAgeType(0.5) );
// console.log(getAgeType(17));
// console.log(getAgeType(35));



//Пример 5.1 - функция в которой сразу идёт проверка входных данных, и если они отсутствуют — функция возвращает сообщение об ошибке
// function greet(name) {
//   if (!name) {
//     return 'Ошибка: имя не передано!';
//   }
//   return `Привет, ${name}!`;
// }
// console.log(greet());  // Ошибка: имя не передано!
// console.log(greet('Анна')); // Привет, Анна!



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



//Пример 8 callback - колбек функции, функция которая вызывается внутри другой функции
// function printName() {
//     console.log ("Dima")
// }
// console.log('Start')
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



//Пример 2 - Это пример функции высшего порядка + стрелочные функции как коллбэки.
//Это называется функции обратного вызова (callback functions). Они позволяют тебе управлять порядком действий. Ты как бы говоришь:
//«Сначала сделай это (fn1), потом — основное (Привет!), а затем — заверши (fn2)».

//logMessage - Это функция высшего порядка — она принимает две другие функции как аргументы: actionBefore и actionAfter.
// const logMessage = (actionBefore, actionAfter) => {
//   actionBefore() // actionBefore() выполняется до console.log('Привет!')
//   console.log('Привет!') // actionAfter() выполняется после
//   actionAfter()
// }
// const fn1 = () => console.log('before') //fn1() выведет в консоль before
// const fn2 = () => console.log('after') //fn2() выведет в консоль after
// logMessage(fn1, fn2) //  вызываю функцию logMessage, передавая fn1 и fn2 в качестве аргументов.



//Пример3 - здесь стрелочная функция без имени, а просто присваивается переменной
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


//Return в стрелочной функции
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1,5))

// let result = sum(1, 2);
// console.log( result ); // 3
