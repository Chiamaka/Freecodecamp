/**
 * Created by chiamaka on 11/30/16.
 * Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Array.prototype.filter()
 */
"use strict";

function findElement(arr, func) {
    var filteredArr = arr.filter(func);
    return filteredArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });