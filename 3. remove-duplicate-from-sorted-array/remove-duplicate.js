const removeDuplicates = function (nums) {
  //  Check if array has only 1 element or empty. Then no possibility of duplicate. Cut the crap => Simple
  if (nums.length <= 1) return nums.length;

  // Now set the pointer on 1 because 0 is always unique. So much for being valueless haha
  let pointer = 1;

  //   Now I will hire a pimp to do the checking
  for (let pimpIndex = 1; pimpIndex < nums.length; pimpIndex++) {
    // If current number is different from the one before -> UNIQUE
    if (nums[pimpIndex] !== nums[pimpIndex - 1]) {
      // As this this unique, move the pointer here
      nums[pointer] = nums[pimpIndex];

      // Now move the pointer forward
      pointer++;
    }
    // That's all there is! Aha!
  }
  return pointer;
};
