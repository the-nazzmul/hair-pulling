### Problem
Given an array of strings `strs`, return the longest string that is a prefix of **every** string.  
If no common prefix → return `""`.


I scan **vertically**, column by column, from the left.  
As soon as one column has different letters → everything to the left of it is the answer.

That’s it. That’s the entire problem.

### Core Insight
The common prefix cannot be longer than the shortest word, and it must match character-by-character from the start.

### Algorithm I Always Use (Vertical Scan)

1. If array is empty → `""`
2. Use the first string as reference.
3. For each position `i` (0, 1, 2, …):
   - Take `char = strs[0][i]`
   - Loop through every other string:
     - If `i` is past the end of any string → done, return prefix so far
     - If any string has different char at `i` → done, return prefix so far
   - If all match → this char is part of the prefix, continue
4. If we finish the loop → the entire first string is the common prefix

