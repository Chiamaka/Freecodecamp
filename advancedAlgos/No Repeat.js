/**
 * Created by chiamaka on 2/4/17.
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

 For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Permutations
 RegExp
 */

function permAlone(str) {
    const array = str.split('');
    let newArray = [];
    const regex = /([a-z])\1+/;

    function swap(a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    //Heap algorithm here
    function generate(n) {
        if (n === 1) {
            newArray.push(array.join(''));
        } else {
            for (let i=0; i<n-1; i++) {
                generate(n-1);
                if (n % 2 === 0) {
                    swap(i, n-1);
                } else {
                    swap(0, n-1);
                }
            }
            generate(n-1);
        }
    }
    generate(array.length);

    const filteredArray = newArray.filter(function (item) {
        return !regex.test(item);
    });

    return filteredArray.length;
}

console.log(permAlone('aabb'));

