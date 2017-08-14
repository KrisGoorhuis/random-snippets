// Untested
// But I think it should work!
// Define a function that takes an array of strings, and returns the most commonly occurring string that array (this question came with an execution time limit)


var givenArray = ["strings"];
var uniqueStringsArray = [];
var uniqueStringsIndexes = [];

function findMostCommonString(givenArray) {
  for (var i = 0; i < givenArray.length; i++) {
    if (uniqueStringsArray.indexOf(givenArray[i]) === -1) {
      uniqueStringsArray.push([givenArray[i]]);
      uniqueStringsIndexespush(1);
    }
    
    if (uniqueStringsArray.indexOf(givenArray[i]) !== -1) {
      uniqueStringsIndexes[uniqueStringsArray.indexOf(givenArray[i])]++;
    }
  }
  
  var highestIndex = 0;
  for (var i = 0; i < uniqueStringsIndexes.length; i++) {
    if (uniqueStringsIndexes[i] > highestIndex) {
      highestIndex = i;
    }
    
  }
  return uniqueStringsArray[i];
}

findMostcommonString(givenArray);