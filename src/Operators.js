////////ОПЕРАТОРЫ///////

// Пример1 - оператор "==" и "==="
// const result1 = "0" === 0;
// console.log(result1,  typeof result1);


//Пример2 - "==" превращает строку "18" в число 18, и условие срабатывает.
// А "===" сравнивает и значение, и тип ("18" — строка, 18 — число, они разные), то будет выводится второй вариант
// let age = "18"; // Пользователь ввёл "18" (строка)
//
// if (age == 18) {
//     console.log("Доступ разрешён ✅");
// } else {
//     console.log("Доступ запрещён ❌");
// }


//Пример3
// let age = "18"; // Пользователь ввёл "18" (строка)
// let newAge = Number(age); // Преобразуем строку в число
//
// if (newAge === 18) {
//     console.log("Доступ разрешён ✅");
// } else {
//     console.log("Доступ запрещён ❌");
// }


// Пример4 - operator OR
// const result = null || `` || 100 ||  200 ||  300 // false false true
// console.log (result) // 100



// Пример5 - operator &&
const moneyInWallet = 5;
const priceOfCoffee = 3;
const isStoreOpen = true;

if(priceOfCoffee < moneyInWallet && isStoreOpen) {
  console.log("Кофе куплен ✅");
} else {
  console.log("Кофе не куплен ❌");
}


// Пример5 - operator &&
const result = 'Hi' && true && 5 && null && 10; // true true true false
console.log(result); // null (первое ложное значение)


// Пример6 - operator ??
const userName = null;
const defaultName = "Гость";
const nameToDisplay2 = userName || defaultName; //оператор || перед проверкой операндов приводит их к булеан типу и возвращает
// значение первого истинного операнда или самый последний
const nameToDisplay = userName ?? defaultName; // Если userName не null и не  undefined, то будет значение текущего операнда, иначе defaultName
console.log(nameToDisplay); // "Гость"
console.log(nameToDisplay2); // "Гость"

