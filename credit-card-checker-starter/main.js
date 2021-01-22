const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants")
const { TIMEOUT } = require("dns")

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
let validateCred = (array) => {
    // uses sum of odd places to valididate credit cards 

    
    let reversedString = [];
    for(let i = array.length - 1 ; i >= 0; i--){

        reversedString.push(array[i]);
    }
    // add the sums poistion with it's index at a skip of two 

    let evenSpacesDoubled = 0;
    let evenIndex = 0;
    for(let j = 1; j < reversedString.length; j+=2){
        if(reversedString[j] < 5){ 
        evenSpacesDoubled+=reversedString[j] * 2;

        }
        else if(reversedString[j]>=5){
            let temp = reversedString[j] * 2;
            temp = temp.toString();
            evenSpacesDoubled += Number(temp[0]) + Number(temp[1]);
        }
    }

    for(let evenCheck = 0; evenCheck < reversedString.length; evenCheck+=2){
        evenIndex+=reversedString[evenCheck];
    }
      
    let validCheck = (evenSpacesDoubled + evenIndex) % 10 === 0;
    return validCheck;
}

let findInvaliedCards = batch.map(card => {
    return validateCred(card);
})



const fakeCards = {
                    'Amex' : new Array(),
                    'Visa': new Array(),
                    'MasterCard': new Array(),
                    'Discover': new Array()
                    };


let idInvalidCardCompanies = (array) => {


    if(array[0] === 3){
        if(validateCred(array) === false){
        fakeCards['Amex'].push([array.join('')]);
    }}
    else if(array[0] === 4){
        if(validateCred(array) === false){
        fakeCards['Visa'].push([array.join('')]);
    }}
    else if(array[0] === 5){
        if(validateCred(array) === false){
        fakeCards['MasterCard'].push([array.join('')]);
        }}
    else if(array[0] === 6){
        if(validateCred(array) === false){
        fakeCards['Discover'].push([array.join('')]);
        }}

    }


let updateFakeCards = batch.map(arr => {
    return idInvalidCardCompanies(arr);
})





