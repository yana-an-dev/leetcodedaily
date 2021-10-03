let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
//console.log(accounts);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let array_sum = [];

accounts.forEach((element) => {
  array_sum.push(element.reduce(reducer));
});

console.log(Math.max(...array_sum));

// let max;
// for (let i =0; i < array_sum.length; i++){
//     i = max;
//     i
// }
