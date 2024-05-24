const fs = require('fs');

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);

let oddIndex = 0;

let result = arr.map(num => {
  if (num % 2 !== 0) {
    return oddNumbers[oddIndex++];
  }
  return num;
});

let resultString = result.join(',');

fs.writeFile('file.txt', resultString, (err) => {
  if (err) throw err;
  console.log('Результат записан в файл file.txt');
});