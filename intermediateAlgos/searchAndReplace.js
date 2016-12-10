/**
 * Created by chiamaka on 11/16/16.
 */
"use strict";
function myReplace(str, before, after) {
    // turn the string to be searched(1st argument) into an array for easy manipulation
    let strArray = str.split(' ');

    //if the 2nd argument is capitalized, capitalize the 3rd argument
    if (before[0] === before[0].toUpperCase()) {
        let afterArray = after.split('');
        afterArray[0] = afterArray[0].toUpperCase();
        after = afterArray.join('');
    }

    //loop through the strArray and check where the word matches with the 2nd argument being searched for
    //and take that position and use splice
    for (let wordCounter in strArray) {
        if (strArray[wordCounter] === before) {
            strArray.splice(wordCounter,1,after);
            str = strArray.join(' ');
        }
    }
    return str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
