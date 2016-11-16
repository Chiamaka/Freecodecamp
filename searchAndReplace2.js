/**
 * Created by chiamaka on 11/16/16.
 */
"use strict";

function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
        let afterArray = after.split('');
        afterArray[0] = afterArray[0].toUpperCase();
        after = afterArray.join('');
    }

    let regex = new RegExp(before, 'i');
    let newStr = str.replace(regex, after);
    return newStr;
}


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
