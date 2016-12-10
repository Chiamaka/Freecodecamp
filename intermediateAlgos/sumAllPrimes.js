/**
 * Created by chiamaka on 11/28/16.
 */
"use strict";

function sumPrimes(num) {
    let primeArray = [2];
    let notPrimeArray = [];
    ((num) => {
        let prime = true;

        for (let i=2; i<=num; i++){
            for (let c=2; c<=(i-1); c++){
                if (i % c === 0) {
                    break;
                }else if (c+1 > Math.sqrt(i)) {
                    primeArray.push(i);
                    break;
                }
            }
        }
    })(num);

    let sum = primeArray.reduce(function (a,b) {
        return a + b;
    })

    return sum;
}

console.log(sumPrimes(10));
