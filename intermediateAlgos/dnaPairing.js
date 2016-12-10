/**
 * Created by chiamaka on 11/20/16.
 
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

 Base pairs are a pair of AT and CG. Match the missing element to the provided character.

 Return the provided character as the first element in each array.

 For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

 The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:
 Array.prototype.push()
 String.prototype.split()
 
 */
"use strict";
(function pairElement(str){
    let basePairs = [
        ['A', 'T'],
        ['C', 'G']
    ];
    let strArray = str.split('');
    let completeArray = [];
    for (let character of strArray) {
        for (let base in basePairs) {
            if (basePairs[base].indexOf(character) > -1) {
                let count = (basePairs[base].indexOf(character)) === 0 ?  1 :  0;
                completeArray.push(character.concat(basePairs[base][count]).split(''));
            }
        }
    }
    console.log(completeArray);
}('GCGATT'));