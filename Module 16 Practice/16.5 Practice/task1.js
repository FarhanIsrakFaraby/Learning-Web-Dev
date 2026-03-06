const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// console.log(colors);
// colors.reverse();
// console.log(colors);
const rev_colors = [];
for (const color of colors){
    rev_colors.unshift(color);
}
console.log (rev_colors);