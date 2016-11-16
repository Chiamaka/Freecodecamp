/**
 * Created by chiamaka on 11/15/16.
 */
"use strict";


function whatIsInAName(collection, source) {
    let presentArray = [];
    let sourceArray = Object.keys(source);
    let counter = sourceArray.length;
        while(counter) {
            for (let item of collection) {
                if(sourceArray.length > 1) {
                    if (item.hasOwnProperty(sourceArray[counter])) {
                        presentArray.push(item)
                    }
                } else {
                    if (item.hasOwnProperty(sourceArray[0]) && item[sourceArray[0]] === source[sourceArray[0]] ) {
                        presentArray.push(item)
                    }
                }
            }
            counter--;
        }
    return presentArray;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
