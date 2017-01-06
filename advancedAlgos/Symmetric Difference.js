/**
 * Created by chiamaka on 12/25/16.
 *
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

 Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Array.prototype.reduce()
 Symmetric Difference
 */

function sym(...arr) {
    const newArr = [];

    arr.forEach(current => {
        const temp = [];
        current.forEach((value) => {
            //remove all duplicates in the current array
            if (temp.indexOf(value) === -1) {
                temp.push(value);
            }
        });

        temp.forEach((value) => {
            //if element is not found, push it. If it is found, delete it.
            if (newArr.indexOf(value) === -1) {
                newArr.push(value);
            } else {
                newArr.splice(newArr.indexOf(value), 1);
            }
        });
    });

    return newArr.sort((a, b) => a > b);
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

