/* @param: array
 * @returns: new array includes elements where each element only appears once
 * @example: unique([1, 2, 1, 2, 3]) => [ 1, 2, 3 ]
 * @example: unique(["Scooby", "Dooby", "Dooby", "Doo"]) => ["Scooby", "Doo"]
 * @example: unique(["DS", "Algo", "OS", "HTML", "DS", "OS", "Java", "HTML", "Algo"]) => ["DS", "Algo", "OS", "HTML", "Java"]
*/

// #1 using foreach
const unique = (array) => {
    let result = [];
    array.forEach(element => {
        if(!result.includes(element)) {
            result.push(element);
        }
    });
    return result;
}

// #2 using Set()
// const unique = (array) => {
//     return Array.from(new Set(array));
// }

console.log(unique([1, 2, 1, 2, 3]));
console.log(unique(["Scooby", "Dooby", "Dooby", "Doo"]));
console.log(unique(["DS", "Algo", "OS", "HTML", "DS", "OS", "Java", "HTML", "Algo"]));