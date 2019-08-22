'use strict';


//Фильтрация уникальных элементов массива

// let values = [ "Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O",];
 
// function sort(array){
//   array.sort((a,b) => a.age > b.age ? 1: -1);
// }

// function unique (arr){
// return Array.from (new Set (arr));
// }

// let set = new Set (arr);
// let newArr = Array.from (set);
// return newArr;
// console.log (newArr(values));




//Отфильтруйте анаграммы

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function asort (arr){
//   const  noAnagram = new Map();
//   arr.forEach((word) => {
//     const key = word.toLowerCase()
//     .split ('')
//     .sort((a,b) => a > b ? 1 : -1).join(', ');
//     noAnagram.set(key, word);
//   });
// return  Array.from (noAnagram.values());

// }
// console.log (asort(arr));




// Итерируемые ключи

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys);




// Сумма свойств объекта

function sumSalaries(salaries){
  let sum = 0; 
  for (const salary of Object.values(salaries)) {
    sum += salary;
    }
return sum;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(sumSalaries(salaries));



// Подсчёт количества свойств объекта
// let user = {
//   name: 'John',
//   age: 30
// };

// let counter = 0;
// for (let key in user) {
//   counter++;
// }
// console.log( "Всего свойств - " +  counter);

// function count(obj) {
//   return Object.keys(obj).length;
// }




// Деструктурирующее присваивание

// let user = {name: "John", years: 30 };

// let {name, years: age, isAdmin = false} = user;

// console.log (name ); // John
// console.log( age ); // 30
//console.log( isAdmin );