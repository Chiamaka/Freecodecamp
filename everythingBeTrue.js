/**
 * Created by chiamaka on 12/1/16.
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

 Remember, you can access object properties through either dot notation or [] notation.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


 */

'use strict';
function truthCheck(collection, pre) {
    for (let i=0, length=collection.length; i<length; i++) {
        //if the value is a falsy value, it'll return false
           if (!collection[i][pre]) {
               return false;
           }
    }
    return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));