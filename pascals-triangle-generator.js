var numbers = [[1]];

function generateLinesOfNumbers(limit) {

  for (var i = 1; i < limit; i++) {
    newArrayLine = [];
    newArrayLine.push(1);
    
    for (var j = 1; j < i; j++) {
      newArrayLine.push(numbers[i-1][j-1] + numbers[i-1][j]);
    }
    
    newArrayLine.push(1);
    numbers.push(newArrayLine);
  }

}

generateLinesOfNumbers(5);

console.log(numbers);