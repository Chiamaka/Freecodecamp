/**
 * Created by chiamaka on 11/27/16.
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

 The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Remainder
 */
"use strict";

function sumFibs(num) {
    let fibArray = [];
    //get the fibonacci numbers into an array
    ((num) => {
        let a = 1, b = 0, temp;
        while (num > 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
            fibArray.push(temp);
        }
    })(num);

    //filter the odd out of the fibonacci array.
    let oddNumbers = () => fibArray.filter(function (number) {
        return (number%2 !==0 && number <= num);
    });

    //add the odd array gotten from oddNumbers together.
    let sum = (array) => {
        if (array.length === 0) return 1;
        return array.reduce(function (a,b) {
            return a + b;
        });
    };
    return sum(oddNumbers());
}

console.log(sumFibs(75025));
