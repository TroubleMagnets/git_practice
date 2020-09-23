// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


const validateCred = checkArray => {
    let moduloArray = []; //Declare empty, mutable list moduloArray for testing
    let sumModulo = 0;

    for (let i = 0; i < checkArray.length; i++) {
        moduloArray.push(checkArray[i]);
    }; //Create a copy of each element in checkArray and transpose into moduloArray

    for (let i = checkArray.length - 2; i >= 0; i -= 2) { //Starting from the second last element in the checkArray list, iterate by -2 each time.
        if (checkArray[i] * 2 > 9) {
            moduloArray[i] = checkArray[i] * 2 - 9;
        } else {
            moduloArray[i] = checkArray[i] * 2;
        }
    };

    for (let j = 0; j < moduloArray.length; j++) {
        sumModulo = sumModulo + moduloArray[j];
    }; //Sums all elements of sumModulo

    return sumModulo % 10 === 0; //Returns true if the modulus 10 of var sumModulo is equal to 0.
};


const findInvalidCards = checkInvalidCards => {
    let invalidCards = []; //Set list of invalidCards

    for (let i = 0; i < checkInvalidCards.length; i++) {
        if (validateCred(checkInvalidCards[i]) !== true) {
            invalidCards.push(checkInvalidCards[i])
        };
    }; //Appends each element of checkInvalidCards list into invalidCards list if the element is determined to be false by the function validateCred().

    return invalidCards; //Returns a list of invalidCards.
};

const idInvalidCardCompanies = invalidCards => {
    invalidCards = findInvalidCards(invalidCards); //Calls the findInvalidCards function on new batch of invalidCards list.
    let invalidCardCompanies = [];

    for (let i = 0; i < invalidCards.length; i++) {
        if (invalidCards[i][0] === 3 && !invalidCardCompanies.includes('Amex')) {
            invalidCardCompanies.push('Amex') //Appends "Amex" to the invalidCardCompanies list if the first digit of the card is equal to 3 and the invalidCardCompanies list does not contain "Amex".
        } else if (invalidCards[i][0] === 4 && !invalidCardCompanies.includes('Visa')) {
            invalidCardCompanies.push('Visa') //See above except for "Visa".
        } else if (invalidCards[i][0] === 5 && !invalidCardCompanies.includes('Mastercard')) {
            invalidCardCompanies.push('Mastercard') //See above except for "Mastercard".
        } else if (invalidCards[i][0] === 6 && !invalidCardCompanies.includes('Discover')) {
            invalidCardCompanies.push('Discover') //See above except for "Discover".
        };
    };

    return invalidCardCompanies; //Returns a list of invalidCardsCompanies.
};

console.log(idInvalidCardCompanies(batch));


