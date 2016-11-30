/**
 * Created by chiamaka on 11/30/16.
 */

"use strict";
function smallestCommons(arr) {
    let min, max, numbers = [];
    (arr[0] < arr[1]) ? (min = arr[0], max = arr[1]): (min = arr[1], max = arr[0]);

    for (let i=min; i<=max; i++) {
        numbers.push(i);
    }

    function gcd(a,b) {
        return (b===0) ? a : gcd(b, a%b);
    }

    function lcm(a,b) {
        return ((a*b)/gcd(a,b));
    }

    let multiple = min;

    numbers.forEach(function (num) {
        multiple = lcm(multiple, num);
    });

    return multiple;

}


console.log(smallestCommons([1,5]));
