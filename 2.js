const numberToSearch = 34;
let numbers = [0, 1];
for (let index = 0; numbers[numbers.length - 1] < numberToSearch; index++) {
  var newNumber = numbers[index] + numbers[index + 1];
  numbers.push(newNumber);
}

if (numbers.indexOf(numberToSearch) != -1) {
  if (numberToSearch == 1) {
    console.log(`O número ${numberToSearch} está presente na sequencia de Fibonacci na posição 1 e 2`);
  } else {
    console.log(`O número ${numberToSearch} está presente na sequencia de Fibonacci na posição ${numbers.indexOf(numberToSearch)}`);
  }
} else {
  console.log(`O número ${numberToSearch} não está presente na sequencia de Fibonacci`);
}