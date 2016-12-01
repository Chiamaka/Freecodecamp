/**
 * Created by chiamaka on 12/1/16.
 * Return an English translated sentence of the passed binary string.

 The binary string will be space separated.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 String.prototype.charCodeAt()
 String.fromCharCode()

 */

"use strict";


function binaryAgent(str) {
    let strArray = str.split(' ');
    let array = [];

    for (let i=0,length=strArray.length; i<length; i++) {
        array[i] = String.fromCharCode(parseInt(strArray[i], 2));
    }
    return array.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
