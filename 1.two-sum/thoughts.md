
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume:
- Exactly one solution exists
- You cannot use the same element twice
- Answer can be returned in any order

Example 1: nums = [2,7,11,15], target = 9  →  [0,1]
Example 2: nums = [3,2,4],     target = 6  →  [1,2]
Example 3: nums = [3,3],       target = 6  →  [0,1]



---

## Step 1: Think

I am at a party. Task: find two people whose ages sum to 90.

Brute-force (bad):  
Ask every person about every other person → 100 × 99 questions.

Smart (what I want):  
Walk around once.  
For each person:  
- "I need someone who is 90 − my age"  
- Has anyone already said that age?  
  → Yes → pair found!  
  → No → remember this person's age

This is the entire Two Sum algorithm. Simple

---

## Step 2: The Real Algorithm

1. One pass through the array
2. For each number `current` at index `i`:
   - Calculate the needed partner: `complement = target - current`
   - Ask: "Have I seen `complement` before?"
     - Yes → return `[previous index, i]`
     - No → remember that `current` is at index `i`
3. Use a hash map so the "have I seen it?" check is instant

**Crucial rule**: Check first, then store  
→ Prevents using the same element twice

---

## Step 3: Mental Edge-Case Check

`nums = [3,3]`, `target = 6`

- i=0 → current=3 → need 3 → not seen → store 3 at 0
- i=1 → current=3 → need 3 → YES, seen at 0 → return [0,1]

Perfect.

---

## Step 4: Now Write the Code


