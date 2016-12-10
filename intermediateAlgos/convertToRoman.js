/**
 * Created by chiamaka on 11/12/16.
 */
"use strict";
function convertToRoman(num) {
    let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    let tens = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let hundreds = ['', 'C', 'CC', 'CCC', 'XD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let thousands = ['', 'M', 'MM', 'MMM'];
    let numArray = (num + "").split('');
    let numberOfTens;
    let numberOfHundreds;
    let numberOfThousands;
    let remainder;
    //if the number is less than 10 that means its a 'ones', lol.
    if (num < 10) {
        return ones[num];
    }
    //if the number array length is 2 meaning the number is between 10 and 99
    else if (numArray.length === 2) {
        numberOfTens = numArray[0];
        remainder = numArray[1];
        return `${tens[numberOfTens]}${ones[remainder]}`;
    }
    //if the number array length is 3 meaning the number is between 100 and 999
    else if (numArray.length === 3) {
        numberOfHundreds = numArray[0];
        numberOfTens = numArray[1];
        remainder = numArray[2];
        return `${hundreds[numberOfHundreds]}${tens[numberOfTens]}${ones[remainder]}`;
    }
    else {
        numberOfThousands = numArray[0];
        numberOfHundreds = numArray[1];
        numberOfTens = numArray[2];
        remainder = numArray[3];
        return `${thousands[numberOfThousands]}${hundreds[numberOfHundreds]}${tens[numberOfTens]}${ones[remainder]}`;
    }
}


