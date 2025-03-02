//Task1 - Write a function that takes an object and returns a new object with all values converted to uppercase (assuming values are strings).
const obj = { name: 'ann', surname: 'atr' };
const newObj = {};
//Когда мы перебираем объект "obj" с помощью for...in, ключ key в каждой итерации содержит одно из имен полей (name, surname и т.д.).
for (let key in obj) { //Цикл for...in перебирает все ключи в объекте obj.
    newObj[key] = obj[key].toUpperCase(); //берем каждое значение, превращаем его в большие буквы и записываем обратно в newObj.
    //newObj[key] создаст правильные ключи ("name", "surname")
    // obj[key] получит правильные значения ("ann", "atr")
}
console.log(newObj);

//Task2 - Write a function that removes all properties with `null` or `undefined` values from an object.
const list = {name: undefined, age: null, country: "Ukraine" }
for (const listValue in list) {
    if (list[listValue] === null || list[listValue] === undefined) {
        delete list[listValue]
    }
}
console.log(list);

//Task3 - Given an object { a: 1, b: 2, c: 3 }, write a function that swaps keys and values ({ 1: 'a', 2: 'b', 3: 'c' }).
const fullObject = {a: 1, b: 2, c: 3 }
const newObj1 = {}
for (const key1 in fullObject) {
    // изначально key1 =а, fullObject[key1] = 1
    // перебираем объект "fullObject", ключ key1 (а это "а") в каждой итерации содержит одно из чисел в обьекте {a: 1, b: 2, c: 3 })
    newObj1[fullObject[key1]] = key1 // даннай строка под капотом newObj1[1] = key1, на каждом шаге когда перебираем

    // fullObject[key1] - это будет новое имя ключа, то есть 1, 2, 3
    // key1  - это будет новое значение
    // Нужно использовать квадратные скобки в том случае,если  свойство является значением той или иной переменной.
    // в нашем случае 1 является значением для переменной(ключа) "а"
}
console.log(newObj1);





