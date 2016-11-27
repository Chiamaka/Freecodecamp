/**
 * Created by chiamaka on 11/24/16.

 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 RegExp
 String.prototype.replace()
 */
"use strict";
function spinalCase(str) {
    str = str.charAt(0).toLowerCase() + str.slice(1); //turn the first letters to lowercase
    if (/_/g.test(str)) {
        str = str.replace(/_/g, ' ');
    }

    if (/([A-Z])/g.test(str)) {
        str = str.replace(/([A-Z])/g, ' $1');
    }

    if (/\s/g.test(str)) {
        str = str.replace(/ +/g, '-');
    }

    return str.toLocaleLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
