/**
 * Created by chiamaka on 12/1/16.
 * Flatten a nested array. You must account for varying levels of nesting.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Array.isArray()

 */

"use strict";
function steamrollArray(arr) {
    let array = [];
    while (arr.length) {
        let value = arr.shift();
        if (Array.isArray(value)) {
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;

}

console.log(steamrollArray([[["a"]], [["b"]]]));