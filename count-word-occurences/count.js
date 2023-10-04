/* @param: string
 * @returns: each word in array (case insensitive) with its number of occurences
 * @example: "Scooby Dooby Doo" => Scooby: 1, Dooby: 1, Doo: 1
 * @example: "Hi, Hello hello" => Hi: 1, Hello: 2
*/

// #1 using foreach
const count = (str) => {
    if (typeof str != "string") {
        throw new TypeError("input must be string");
    }

    let result = {};
   
    strArray = str.toLowerCase().split(" ");
    strArray.forEach(str => {
        if (!result[str]) {
            result[str] = 1;
        } else {
            result[str]++;
        }
    });

    for (const [key, val] of Object.entries(result)) {
        console.log(`${key}: ${val} ` + (val > 1 ? "times" : "time"));
    }
}

count("Hi, Hello hello");
count("Scooby Dooby Doo");