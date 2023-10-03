/* @param: string
 * @return: number - index of first unique character
 * @example: unique("javascript") => 0
 * @example: unique("sesquipedalian") => 3
 * @example: unique("aabb") => -1 */

const unique = (str) => {
  if (typeof str != "string") {
    throw new TypeError("should be string");
  }
  
  let result = {};
  // result =  { h:1, i:2, e:3 }
  
  for (const char of str) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  
//   console.log(result);
  
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] == 1) {
      return i;
    }
  }
  return -1;
}

console.log(unique("javascript"));
console.log(unique("sesquipedalian"));
console.log(unique("aabb"));
