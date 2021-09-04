// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

//Check if card is valid
const validateCred = (arr) => {
  let newArray = [];
  let contador = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log("Arreglo viejo iteracion " + i + " " + arr[i]);
    if (contador % 2 === 0) {
      //Es par
      if (arr[i] * 2 > 9) {
        newArray[i] = arr[i] * 2 - 9;
      } else {
        newArray[i] = arr[i] * 2;
      }
    } else {
      //Es impar
      newArray[i] = arr[i];
    }
    contador++;
  }
  let newTotal = newArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  //   console.log(newArray);
  //   console.log(newTotal);
  if (newTotal % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

let arregloVerificar = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

let ccOk = validateCred(invalid5);

//if true cc ok, if false not ok
// console.log(ccOk);

// Find invalid cards and put them in array
const findInvalidCards = (cards) => {
  let invalidCards = [];
  for (let card of cards) {
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
};

const invalid = findInvalidCards(batch);

console.log(invalid);

const idInvalidCardCompanies = (invalidCard) => {
  let arrCompanies = [];
  let countVisa = 0;
  let countAmex = 0;
  let countMastercard = 0;
  let countDiscover = 0;
  for (let card of invalidCard) {
    if (card[0] === 3 && countAmex < 1) {
      arrCompanies.push("Amex (American Express)");
      countAmex++;
    } else if (card[0] === 4 && countVisa < 1) {
      arrCompanies.push("Visa");
      countVisa++;
    } else if (card[0] === 5 && countMastercard < 1) {
      arrCompanies.push("Mastercard");
      countMastercard++;
    } else if (card[0] === 6 && countDiscover < 1) {
      arrCompanies.push("Discover");
      countDiscover++;
    }
  }
  return arrCompanies;
};

console.log(idInvalidCardCompanies(invalid));
