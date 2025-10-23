const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    default: return 'Invalid operator';
  }
}

function start() {
  rl.question('Enter calculation: ', (input) => {
    const [a, op, b] = input.trim().split(' ');
    const result = calculate(Number(a), op, Number(b));
    
    console.log(`Result: ${result}\n`);
    
    rl.question('Continue? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        start();
      } else {
        console.log('Goodbye!');
        rl.close();
      }
    });
  });
}

console.log('Calculator\n');
start();
