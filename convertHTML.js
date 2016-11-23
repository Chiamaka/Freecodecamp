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
    let charObj = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&apos;'
    };
    for (let letter of str) {
        for (let property in charObj) {
            if(letter === property) {
                str = str.replace(property, charObj[property]);
            }
        }
    }
    return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
