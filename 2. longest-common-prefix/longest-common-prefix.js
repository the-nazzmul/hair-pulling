/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

// 1. If array is empty → `""`
// 2. Use the first string as reference.
// 3. For each position `i` (0, 1, 2, …):
//    - Take `char = strs[0][i]`
//    - Loop through every other string:
//      - If `i` is past the end of any string → done, return prefix so far
//      - If any string has different char at `i` → done, return prefix so far
//    - If all match → this char is part of the prefix, continue
// 4. If we finish the loop → the entire first string is the common prefix

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ""; //In case the passed strings don't have any characters

  //   Take the first word as candidate. The idea is to scan things vertically. So First I will loop through each characters of the first word. First I will take the first character and see if the other words have the same character (loop through the original input array). YES? -> Next character. I will only stop if I have reached the end of current word or characters don't match. If so, then I will return everything before this position.

  // Take the first word and start the loop
  for (i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; //Character of the first word

    //Now check this character against the same position in all other words, so loop over the entire array
    for (j = 1; j < strs.length; j++) {
      /*Reasons to stop:
        1. Reached the end of the current word. Because Prefix can't be longer than the shortest word. The first condition is for that (i >= strs[j].length)
        2. Characters don't match. This is simple. The second condition is for that (strs[j][i] !== char)*/
      if (i >= strs[j].length || strs[j][i] !== char) {
        // Return everything before this position
        return strs[0].slice(0, i);
      }
    }
  }
  //In case all words share the entire first word as prefix
  return strs[0];
}

// const string = ["flowers", "flight", "frown"];
// console.log(longestCommonPrefix(string));
