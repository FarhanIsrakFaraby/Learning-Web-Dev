const statement = 'I am a hard working person';
const words = statement.split(' ');
let result = '';

for (let i = words.length - 1; i >= 0; i--) {
  result += words[i];
  if (i !== 0) result += ' ';
}

console.log(result); 