/* @param: string
 * @param: subString
 * @returns: count of occurences of the substring
 * @example: count("This is a string", "is") => 2
 * @example: count("Hello", "e") => 1
 * @example: count("Blue Whale", "Blute") => 2
*/

// #1 using foreach
const count = (str, substr) => {
    if (typeof str != "string" || typeof substr != "string") {
        throw new TypeError("inputs must be string");
    }

    let count = 0;
    let index = str.indexOf(substr);

    //indexOf returns -1 if not found
    while (index > -1) {
        count++;
        //move to next occurence
        index = str.indexOf(substr, index + substr.length);
    }

    return count;
}

console.log(count("This is a string", "is"));
console.log(count("Hello", "e"));
console.log(count("Blue Whale", "Blute"));
console.log(count("hihihohohehehahahi", "hi"));