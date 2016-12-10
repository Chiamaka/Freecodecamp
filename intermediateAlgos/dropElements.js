/**
 * Created by chiamaka on 11/30/16.
 * Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

 The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

 Return the rest of the array, otherwise return an empty array.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Arguments object
 Array.prototype.shift()
 Array.prototype.slice()
 */
"use strict";
function dropElements(arr, func) {
    for (let i=0; i<arr.length; i++) {
        if (func(arr[i])) {
            arr.splice(0, i);
            return arr;
        }
    }
    return [];
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
