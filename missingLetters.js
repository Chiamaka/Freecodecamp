/**
 * Created by chiamaka on 11/22/16.
 * Find the missing letter in the passed letter range and return it.

 If all letters are present in the range, return undefined.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 String.prototype.charCodeAt()
 String.fromCharCode()

 */

"use strict";

function fearNotLetter(str) {
    let startCode = str.charCodeAt(0),
        lostChar;
    for (let i=1, length=str.length; i<length; i++) {
        startCode++;
        if (startCode !== str.charCodeAt(i)) {
            lostChar = String.fromCharCode(startCode);
            break;
        } else {
            lostChar = undefined;
        }
    }
    return lostChar;
}
fearNotLetter("yz");

