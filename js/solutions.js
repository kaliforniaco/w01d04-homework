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


const sumNumbers=(value) => {
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);

}
return sum;
//console.log(sum); <-- works fine, below returns 'undefined'
}
console.log(sumNumbers(720));


