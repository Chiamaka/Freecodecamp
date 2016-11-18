/**
 * Created by chiamaka on 11/17/16.
 */
"use strict";

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strArray = str.split('');
    let consonantTracker = [];

    for (let letter of strArray) {
        if (vowels.indexOf(letter) === -1) {
            consonantTracker.push(letter);
        } else {
            break;
        }
    }
    strArray.splice(0, consonantTracker.length);
    (consonantTracker.length === 0) ? consonantTracker.push('way') : consonantTracker.push('ay');

    strArray.push(consonantTracker.join(''));
    str = strArray.join('');
    return str;
}