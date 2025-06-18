//////////ОБЬЕКТЫ////////////


//Пример 1 - получение значений обьекта
// const myCity  = {
//     city: "Wroclaw",
//     popular: true,
//     country: "Poland"
// }
// console.log(myCity.city)


// Пример1.1 - изменение свойства обьекта (Используя точечную запись можна менять значение свойств обьекта и создавать новые свойства)
// const myCity  = {
//     city: "Wroclaw",
// }
// myCity.city = "Krakow"
// console.log(myCity)


// Пример 1.2 - Мы не меняем значение переменной myCity, поскольку у нас const, а просто добавляем значение в обьект. Так делать можна когда const
// const myCity  = {
//     city: "Wroclaw",
// }
// myCity.people = "Angry"
// myCity.number = 500000
// console.log(myCity)

// delete myCity.people // удаляем свойство people из обьекта myCity
// console.log(myCity)

// Пример 1.3 - Добавляем новое значение в обьект который ранее создан.
// Нужно использовать квадратные скобки в том случае,если название свойства является значением той или иной переменной.
// То есть нам нужно значение "town", которое является значением переменной yourCity сделать свойством обьекта myCity.
// А если напишу myCity.yourCity , а не через квадратные скобки то создастся свойство которое называется yourCity,
// но нам необходимо свойство "town"

// const myCity  = {
//     city: "Wroclaw",
// }
// const yourCity = "town" //create new variable
// myCity [yourCity] = "Berlin"
// console.log(myCity)

//Пример 1.4 - создание обьекта + изменения свойства обьекта
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 теперь ссылается на тот же объект, что и obj1
console.log(obj1.value);
console.log(obj2.value);
obj2.value = 20; // Меняем значение через obj2
console.log(obj1.value); // 20 ❗ (так как obj1 и obj2 ссылаются на один объект)
console.log(obj2.value); // 20


//Пример 2 - обращение к свойству обьекта , когда свойство обьекта с пробелом
// const newObject = {
//     name: "Dima",
//     age: 35,
//     'country city': "Poland"
// }
// console.log(newObject.name);
// console.log(newObject ["country city"]) //когда ключ указан с пробелом в названии, тогда такой способ для вывода значение


//Пример 3 - добавление, изменения, удаление свойств в обьекте
// const newObject1 = {}
// newObject1.name = "Dmitriy"; // added
// console.log(newObject1);

// newObject1.name = "Sasha";
// console.log(newObject1); // changed

// delete newObject1.name;
// console.log(newObject1); // deleted


//Пример 4 - перебираем все свойства (ключи) обьекта , а после значения
// const user = {
//     name: 'Dmitriy',
//     email: 'dmitriy@gmail.com',
//     password: '123456'
// }
// for (const test in user) {
//     console.log(test); // вместо test может быть любое название
//     console.log(user[test]); // перебираем значение этих свойств
// }


//Пример 5 - добавления нового значения в объект который ранее создан, если название свойства является значением той или иной переменной.
// const myCity ={
//     city: 'Wroclaw',
// }
// const myCountry = "country"
// myCity[myCountry] = "Poland"
// console.log(myCity );


//Пример 7 - Обьеденение обьектов (Object.assign)
// const obj3 = {name: "Anna"}
// const obj4 = {age: 20}
// //передаем первым аргументом сначала пустой обьект в который мы будем копировать свойства,
// // а вторым и третьим те аргументы свойства которых будут добавляться к итоговому обьету
// const user = Object.assign({},obj3, obj4); //1й вариант использования
// console.log('USER: ', user);
// const user = {...obj3, ...obj4}; //2й вариант использования
// console.log('USER: ', user);


//Пример 8 - Обращение к несуществующему свойству
// const user2 = {
//     age: 20,
//     adress: {
//         //city: "Wroclaw"
//         zipcode: 12345
//     }
// }
// console.log(user2.city); //результатом будет undefined


//Пример 8.1 - использозование оператора ? (Обращение к несуществующему обьекту, но если дальше есть код то с расчетом, чтоб дальнейший код выполнился)
const user2 = {
    age: 20,
    // adress: {
    //     //city: "Wroclaw"
    //     // zipcode: 12345
    // }
}
console.log(user2.adress?.city);// ? оператор используют при обращении к свойству обьекта который теоретически может и не существовать
// (я закоментировал вложенный обьект adress и оператор ? позволяет выполнить код который идет дальге, тоесть кол "Next iteration")
console.log("Next iteration");


//Пример 9 - получить имена переменный с разных обьектов
const boy ={
    name: "Dima"
}
const girl = {
    name: "Masha",
}
const {name: boyName} = boy // в переменной boyName хранится значение свойства name из обьекта boy
const{name: girlName} = girl // в переменной girlName хранится значение свойства name из обьекта girl
console.log(boyName, girlName);


//////МУТИРОВАНИЕ ОБЬЕКТОВ////////////
//Пример 1 - Мутирование обьекта
// const myCity  = {
//     city: "Wroclaw",
// }
// myCity.city = "Gdansk"
// myCity.people = "Angry"
// myCity.number = 500000
// console.log(myCity)

//Пример 2 - Мутирование копий, Обе переменные person ссылаются на один и тот же объект в памяти и будут давать один и тот же результат.
// const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = myCity
// myCity2.city = "Gdansk"
// myCity2.people = "Angry"
// myCity.number = 500000
// console.log(myCity)


//Как избежать мутаций (использовать Object.assign). Object.assign можна использовать когда нет вложенных обьектов
// Пример 3
//const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = Object.assign({},myCity)

// myCity2.city = "Gdansk"
// myCity2.people = "Angry"
// console.log(myCity2.city)
// console.log(myCity.city)

//Пример 3.1 - как избежать мутаций (можна использовать не Object.assign а троеточие {...myCity})
// const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = {...myCity}
// myCity2.city = "Gdansk"
// console.log(myCity2.city)
// console.log(myCity.city)

//Пример 3.2 - как избежать мутаций
// const myCity  = {
//     city: "Wroclaw",
//     people: 1000
// }
// const myCity2 = JSON.parse(JSON.stringify(myCity))
// myCity2.city = "Gdansk"
// console.log(myCity2.city)
// console.log(myCity.city)




