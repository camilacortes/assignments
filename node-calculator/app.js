const readline = require('readline-sync');

const add = function(num1, num2) {
  const result = num1 + num2;
  console.log(result);
};

const mul = function(num1, num2) {
  const result = num1 * num2;
  console.log(result);
};

const div = function(num1, num2) {
  const result = num1 / num2;
  console.log(result);
};

const sub = function(num1, num2) {
  const result = num1 - num2;
  console.log(result);
};

const firstNumber = readline.question('Please enter your first number ');

const secondNumber = readline.question('Please enter your second number ');

const operation = readline.question(
  'Please enter the operation to perform: add, sub, mul, div '
);

const firstnum = Number(firstNumber);
const secondnum = Number(secondNumber);

if (operation === 'add') {
  console.log('Your answer is: ');
  const result = add(firstnum, secondnum);
} else if (operation === 'sub') {
  console.log('Your answer is: ');
  const result = sub(firstnum, secondnum);
} else if (operation === 'mul') {
  console.log('Your answer is: ');
  const result = mul(firstnum, secondnum);
} else if (operation === 'div') {
  console.log('Your answer is: ');
  const result = div(firstnum, secondnum);
} else {
  console.log(" This isn't one of the options! ");
}
