//Task1 - Write a function that takes an object and returns a new object with all values converted to uppercase (assuming values are strings).
const obj = { name: 'ann', surname: 'atr' };
const newObj = {};
//Когда мы перебираем объект "obj" с помощью for...in, ключ key в каждой итерации содержит одно из имен полей (name, surname и т.д.).
for (let key in obj) { //Цикл for...in перебирает все ключи в объекте obj.
    newObj[key] = obj[key].toUpperCase(); //Мы просто берем каждое значение, превращаем его в большие буквы и записываем обратно в newObj.
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




