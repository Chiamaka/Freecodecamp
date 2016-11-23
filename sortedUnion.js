/**
 * Created by chiamaka on 11/22/16.
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

 Check the assertion tests for examples.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Arguments object
 Array.prototype.reduce()
 */

"use strict";
function uniteUnique(arr) {
    let newArray = Array.from(arguments);
    let flattenedArray = newArray.reduce(function (a,b) {
        return a.concat(b);
    },[]);
    arr = flattenedArray.filter(function (element, index, array) {
        return array.indexOf(element) === index;
    });

    console.log(arr);

}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

