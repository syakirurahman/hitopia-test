function weightedStrings(word: string, queries: number[]) {
  const alphabets: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const weights: number[] = [];

  let char = '';
  let weight = 0;
  for (let letter of word) {
    if (char !== letter) {
      char = letter;
      weight = alphabets.indexOf(char.toLocaleLowerCase()) + 1;
    } else {
      weight += alphabets.indexOf(char.toLocaleLowerCase()) + 1;
    }
    weights.push(weight);
  }

  return queries.map(query => weights.includes(query) ? "Yes" : "No");
}

// Test 1
console.log(weightedStrings("abbcccd", [1, 3, 9, 8])); // ['Yes', 'Yes', 'Yes', 'No']

// Test 2
console.log(weightedStrings("zzyybcd", [1, 3, 26, 8])); // ['No', 'Yes', 'Yes', 'No']

// Test 2
console.log(weightedStrings("aiiuuueeo", [1, 5, 9, 15, 18, 21, 23 ])); // ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'No']
