//- 2. The difference between a parameter and an argument is that a PARAPATER is defined when
//a variable or function is declared, while an ARGUMENT is passed as a value when calling
//a function.

//- 3. Within a function, while CONSOLE.LOG simply writes arguments to the Console,
//RETURN is used to store that value for later use.

//- 

const checkPalindrome=(wordCase) => {    
    let wordLow = wordCase.toLowerCase();
    const length = wordLow.length;
    for (var i = 0; i < length / 2; i++) {
        if (wordLow.charAt(i) !== wordLow.charAt(length - 1 - i)) {
            return false;
        }
}
    return true;
}

if (checkPalindrome("EvadeMeDave")) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is NOT a palindrome");
}

//- Tested case and boolean: good

// Number Sum

const sumNumbers=(value) => {
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
return sum;
}
console.log(sumNumbers(720));

//-

// Pythagoras

const calculateSide = (sideA, sideB) => {  //**confirm varnamecase!
    return(Math.sqrt((sideA * sideA) + (sideB * sideB)));
    
}
console.log(`${calculateSide(8, 6)}`);

//-

//Sum Array
const sumArray=(numbersArr) => {
let sum=0;
for (let i=0; i<numbersArr.length; i++){
    sum += (numbersArr[i]);  
}
return sum;
};

console.log(sumArray([1,2,3,4,5,6]));


// Prime Numbers

function printPrime(value) {
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}

printPrime(100);


