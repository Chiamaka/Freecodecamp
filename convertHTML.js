/**
 * Created by chiamaka on 11/23/16.
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 RegExp
 HTML Entities
 String.prototype.replace()
 */

"use strict";
function convertHTML(str) {
    let charArray = ['&', '<', '>', '"', "'"];
    let entitiesArray = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];

    for (let letter of str) {
        for (let char in charArray) {
            if(letter === charArray[char]) {
                str = str.replace(charArray[char], entitiesArray[char]);
            }
        }
    }
    return str;
}

console.log(convertHTML("abc"));
