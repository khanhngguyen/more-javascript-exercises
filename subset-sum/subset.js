/* @param: array of non-negative integers
 * @param: (int) sum
 * @returns: subsets of array whose sum of all elements = give sum
 * @example: subset([1, 2, 3], sum = 5) => [2, 3]
 * @example: subset([3, 34, 4, 12, 5, 2], sum = 30) => no subset available
 * @example: subset([3, 34, 4, 12, 5, 2], sum = 9)=> [4, 5]
*/

// #1 using foreach
const subset = (array, sum) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // console.log("loop i" + result.length);
        let subset = [];
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == sum) {
                subset.push(array[i]);
                subset.push(array[j]);
            }
        }
        if (subset.length > 0) result.push(subset);
    }
    
    if(result.length == 0) console.log("No subset available");
    else {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
}

subset([1, 2, 3], 5);
subset([3, 34, 4, 12, 5, 2], 30);
subset([3, 34, 4, 12, 5, 2], 9);