function areBracketsBalanced(brackets: string) {
  const stack: string[] = []; // To save the opening bracket, and remove it after loop encounter matched closing bracket
  const bracketMatching: { [key:string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let bracket of brackets) {
    if (bracket === '(' || bracket === '{' || bracket === '[') {
        stack.push(bracket);
    }
    
    // if in this step the stack length is still 0, return 'NO' immediatelly because it means the string is not started with opening bracket
    if (stack.length === 0) return 'NO';

    if (bracket === ')' || bracket === '}' || bracket === ']') {
      const lastOpeningBracket = stack.pop() as string // get and remove the last opening bracket from stack
      if (bracketMatching[lastOpeningBracket] !== bracket) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

// Test 1
console.log(areBracketsBalanced("{[()]}")); // YES
// Test 2
console.log(areBracketsBalanced("{[(])}")); // NO
// Test 3
console.log(areBracketsBalanced("{(([])[])[]}")); // YES
// Test 4
console.log(areBracketsBalanced("}{}")); // NO