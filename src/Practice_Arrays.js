//Task1 - У тебя есть массив фруктов. Выведи в консоль, сколько в нём элементов.
const fruits = ["яблоко", "банан", "груша", "апельсин"];
console.log(fruits.length);

//Task2 - Напиши код, который выведет первый и последний элемент массива.
const colors = ["красный", "синий", "зеленый", "желтый"];
console.log(colors[0])
console.log( colors[colors.length - 1])

//Task3 - Добавь "tomatoes" в конец массива fruits, а потом выведи его в консоль.
const fruits1 = ["яблоко", "банан", "груша"];
fruits1.push("tomatoes");
console.log(fruits1);

//Task4 -  Удали первый элемент из массива numbers и выведи результат.
const numbers = [10, 20, 30, 40];
numbers.pop(0)
console.log( numbers.length, numbers);

//Task5 -  Умножь все числа массива nums на 2 и запиши в новый массив.
const nums = [1, 2, 3, 4, 5];
const newNumbers = nums.map(num => num*2);
console.log( newNumbers.length, newNumbers);

//Task6 -  В массиве cars найди индекс "BMW" и выведи его в консоль.
const cars = ["Tesla", "BMW", "Audi", "Mercedes"];
console.log( cars.indexOf("BMW"));

//Task7 -  Проверь, есть ли в массиве fruits "манго" и выведи true или false.
const fruits2 = ["яблоко", "банан", "груша"];
console.log(fruits2.includes('mango'));

//Task8 -  Объедини массивы arr1 и arr2 в один и выведи результат.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const total = arr1.concat(arr2);
console.log(total)

//Task9 -  отфильтровать, Оставь в массиве numbers только четные числа.
const numbers1 = [10, 15, 20, 25, 30, 35, 40];
const num1 = numbers1.filter(number => number % 2 === 0);
console.log( num1)

//Task10 -   Найди сумму всех чисел в массиве nums.
const nums = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < nums.length; i++) { //Так как nums.length возвращает количество элементов, i < nums.length означает: Продолжать цикл, пока i меньше количества элементов в массиве.
    sum += nums[i]; // sum = sum + nums[i] - добавляем каждый элемент в sum
}
console.log(sum); // 15








