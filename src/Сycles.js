///////Циклы/////////


//ЦИКЛ for
// const myArray = ["first", "second", "third"]
// for (let i =0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

//ЦИКЛ forEach - перебор элементов в массиве
// const myArray = ["first", "second", "third"]
// myArray.forEach ((element,index) => {
//     console.log(element,index)
// } )

//ЦИКЛ do while - когда нужно выполнить хотя бы раз, даже если условия ложно. Например если i=10
// let i =0
// do {
//     console.log(i);
//     i++;
//     } while(i < 5);


//ЦИКЛ for in - с помощью него можна перебрать все свойства обьекта
const myObject = {
  x: 10,
  y: true,
  z:"abc"
}
for (const key in myObject){
  console.log(key, myObject[key])
}