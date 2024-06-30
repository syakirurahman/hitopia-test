# Hitopia Test

This program can only run on Command Line Interface

## How to Run 

Install dependencies:

```sh
npm install
```

### Run the specific file using `ts-node` command

```ts
ts-node weighted-string.ts
ts-node balanced-brackets.ts
ts-node highest-palindrome.ts
```

The function return will be printed on Command Line Interface.

## Balanced Bracket Complexity Analysis

The complexity of the function `areBracketsBalanced` in `balanced-brackets.ts` is as follows:

### Time Complexity

O(n) where n is the length of the bracket string. Each character in string is processed once, with JS array method (either `push` or `pop`) being O(1).

### Space Complexity

O(n) in the worst case, if all characters are opening brackets and stored in the stack array.

### Explanation

- The function iterates through each character in the input string.
- Opening brackets are pushed onto the stack.
- Closing brackets are checked against the last item on the stack.
- The function ensures all brackets are balanced by the end of the iteration.