/////МАССИВЫ///////


// const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //1й вариант создания
// const secondArray = new Array(10); //1й вариант создания

//Пример1 - работа с массивами, пробую разные методы массивов
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

//Пример4 - метод МАР, перебирает все элементы массива и возращает новый массив (не меняют оригинальный массив)
// const myArray = [10,20,55]
// console.log(myArray)
// const newArray = myArray.map(element => element+10) //перебираем и добавляем по единице к каждому элементы массива и возвращаем новый массив
// console.log(newArray)
// console.log(myArray)

// const newArray1 = myArray.map( element => console.log( element+1))
// console.log(newArray1)


// const arr = [
//     "Hi",
//     100,
//     true,
//     {name: 'Dima'},
//     ()=> console.log("TestArray"),
//     [true, false, true],
// ]
// console.log( arr[3].name); // 1й вариант обращения к элементу
// console.log( arr[3]['name']); // 2й вариант обращения к элементу
// arr[4]() // обращаемся к следующему элементу массива - функции
// console.log( arr[5][0]); // обращаемся к элементу вложенного массива

// arr [0] = "Good bye" // меняю содержимое первого элемента массива
// console.log( arr[0]);

// console.log( arr.length); // показывает сколько элементов сейчас в массиве
// console.log( arr[arr.length - 1]);// 1й способ получить доступ к последнему элементу массива
// console.log( arr.at(-1));//2й способ получить первый элемент массива с конца

//Example1 - push добавление элементов в конец массива
// const arr1 = ['A', 'B', 'C'];
// console.log( arr1);
// arr1.push('Г', 'Д')
// console.log( arr1);

// //Example2 - pop удаление элементов в конце массива
// const arr3 = ['Dima', 'Masha', 'Sasha'];
// console.log( arr3.pop());
// console.log(arr3)

// Example3 - unshift добавление элементов в начало массива
// const arr2 = ['Г', 'Д'];
// console.log( arr2);
// arr2.unshift('A', 'B', 'C')
// console.log( arr2);

// Example4 - shift удаление элементов c начала массива
// const arr4 = ['Dima', 'Masha', 'Sasha'];
// console.log( arr4.shift());
// console.log(arr4)

//Example5 - toString приведение массива к строке
// const arr5 = ['Dima', 100, true];
// console.log( arr5.toString());
// console.log( arr5.join(''));// 2й вариант приведение к строке

// //Example6 - обьеденение массива, method concat
// const arr6 = ['Dima', 100, true];
// const arr7 = ['Sasha', 500, false];
// const total = arr6.concat(arr7);
// console.log( total);

//Example7 - перебор элементов массива (for)
// const massive = [1, 2, 3, 4, 5];
// for (let i = 0; i < massive.length; i++) {
//     console.log( massive[i]);
// }

// //Example7.1 - перебор элементов массива (forEach)
// const massive1 = [1, 2, 3, 4, 5];
// massive1.forEach((numberInmassive) => {
//     console.log( numberInmassive );
// })

// //Example8 - indexOf() найти индекс элемента массива
// const massive2 = [10, 20, 3, 4, 5];
// console.log( massive2.indexOf(1))

//Example8.2 - найти индекс элемента массива после определенного значения
// const massive4 = [15, 20, 30, 15, 50];
// console.log( massive4.indexOf(15, 2))

// //Example8.1 - includes проверить наличие элемента массива после определенного значения
// const massive3 = [15, 20, 30, 15, 50];
// console.log( massive3.includes(15, 2))

// //Example9 - find ищет первый подходящий элемент
// const numbers = [15, 20, 30, 40, 50];
// const found = numbers.find(number => number % 2 === 0);
// console.log( found)

