/**
 * Created by chiamaka on 1/6/17.
 * 
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

 Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Global Array Object
 */
"use strict"
function updateInventory(arr1, arr2) {
    const currentInv = arr1,
        newInv = arr2;
    const currentItems = currentInv.map((item) => item[1]); //get the name of items in the current inventory
    const currentPrices = currentInv.map((item) => item[0]); //get the price of items in the current inventory
    const newItems = newInv.map(item => item[1]); //get the name of items in the new inventory
    const newPrices = newInv.map(item => item[0]); //get the price of items in the new inventory

    //get an array of the repeating items(just the name) in both the current and new inventory
    const overLappingItems = newItems.filter(item => {
        if (currentItems.includes(item)) {
           return item;
        }
    });

    //get an array of the new items(name and price) from the new inventory that isn't in the current inventory
    const newItemsToBeAdded = newInv.filter(item => {
        if (!currentItems.includes(item[1])) {
            return item;
        }
    });

    //calculate the price of the new + the current inventory and replace in the current inventory to reflect accordingly
    overLappingItems.map(item => {
        currentInv[currentItems.indexOf(item)][0] = currentPrices[currentItems.indexOf(item)] + newPrices[newItems.indexOf(item)];
    });

    //push the new items from the new inventory into the current inventory
    newItemsToBeAdded.map(item => {
        currentInv.push(item);
    });

    //return a result sorted according to the name of the items in the current inventory.
    return currentInv.sort((a, b) => {
        if(a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });

}


console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));