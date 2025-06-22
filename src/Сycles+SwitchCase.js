///////Циклы/////////

//ЦИКЛ  while - это цикл когда нужно выполнять действия пока условие истинно, до тех пор пока не станет ложным
// let  i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//ЦИКЛ do while - когда нужно выполнить хотя бы раз, даже если условия ложно. Например если i=100
// let i =100
// do {
//   console.log(i);
//   i++;
// } while(i < 5);


//ЦИКЛ for - это цикл когда нужно выполнить действия определенное количество раз, например перебрать массив
//ПРИМЕР 1- перебор чисел от 0 до 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ПРИМЕР 2 - перебор массива
// const myArray = ["first", "second", "third"]
// for (let i =0; i < myArray.length; i++){
//     console.log(myArray[i])
// }


// ЦИКЛ for in - цикл для перебора свойст в обьекте. С помощью него можна перебрать все свойства обьекта
// const myObject = {
//   x: 10,
//   y: true,
//   z:"abc"
// }
// for (const key in myObject){
//   console.log(key, myObject[key])
// }


//МЕТОД forEach - это метод массива (не цикл), который позволяет перебрать все элементы массива и выполнить функцию для каждого элемента
// Пример 1- перебор элементов в массиве
// const myArray = ["first", "second", "third"]
// myArray.forEach ((element,index) => {
//     console.log(element,index)
// } )


//////Switch Case//////
// Switch Case- это конструкция, которая позволяет выполнять разные действия в зависимости от значения переменной

//Пример 1 - если хотим проверить какие то диапазоны значений то скобках пишут true, а в case пишут условия
// const age = 80;
// switch (true) {
//   case age < 18:
//     console.log("Вы несовершеннолетний");
//     break;
//   case age >= 18 && age < 65:
//     console.log("Вы взрослый человек");
//     break;
//   case age >= 65:
//     console.log("Вы пенсионер");
//     break;
//   default:
//     console.log("Некорректный возраст");
// }

// Пример 2 - пример со строками
// const drink = "Кофе";
// switch (drink) {
//   case "Чай":
//     console.log("Вы выбрали чай.");
//     break;
//   case "Кофе":
//     console.log("Вы выбрали кофе.");
//     break;
//   case "Сок":
//     console.log("Вы выбрали сок.");
//     break;
//   default:
//     console.log("Такого напитка нет в меню.");
// }

//Пример 3 - пример с числами
// const day = 2;
// switch (day) {
//   case 1:
//     console.log("Понедельник");
//     break;
//   case 2:
//     console.log("Вторник");
//     break;
//   case 3:
//     console.log("Среда");
//     break;
//   default:
//     console.log("Неверный номер дня");
// }
