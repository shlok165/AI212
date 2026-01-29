// 1. let & const
let age = 20;
const college = "IIT RPR";

// 2. Arrow Function
const square = (num) => num * num;

// 3. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];

// 4. Destructuring
const student = {
  name: "Shlok",
  age: 19,
  city: "Nagpur",
};

const { name, city } = student;

// 5. Array Methods
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(n => n * n);
const evenNumbers = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);

console.log(square(5));
console.log(mergedArray);
console.log(name, city);
console.log(squares, evenNumbers, sum);
