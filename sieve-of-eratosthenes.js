
function logPrimesUnder(upperLimit) {
    var sieveArray = [];
    var primesArray = [];

    // Making an array full of trues.
    // Anything left marked true at the end has a prime index;
    // We can just ignore 0 and 1 - they'll be chopped off in buildPrimesArray()
    function generateSieveArray() {
        for (i = 0; i <= upperLimit; i++) {
            sieveArray.push(true);
        }
    }
    
    
    // 2 is the first prime. Eliminate everything that is a multiple of it with a false flag.
    // 3 is the next prime. Eliminate.
    // i is now 4 - but 4 has been set to false already. No math.
    // 5 is prime. Eliminate.
    // i is now 6 - but it's been set to false already. No math.
    // and so on...
    // Less math makes it less un-fast.
    function filter() {
        for (var i = 2; i < sieveArray.length; i++) {
            if (sieveArray[i] === true) {
                for (var j = i*i; j < sieveArray.length; j+= i) {
                    sieveArray[j] = false;
                }
            }
        }
    }
    
    // 2 is the first prime. Start there. Just hack 0 and 1 off.
    // Push an index for each true. Those are your surviving numbers and your primes!
    function buildPrimesArray() {
        for (var i = 2; i < sieveArray.length; i++) {
            if (sieveArray[i] === true) {
                primesArray.push(i);
            }
        }
    }
    
    generateSieveArray();
    filter();
    buildPrimesArray();
    
    for (var i = 0; i < primesArray.length; i++) {
        console.log(primesArray[i]);
    }
}


logPrimesUnder(100);

