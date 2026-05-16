// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// for ..of
const fruits = ["apple", "banana", "gauva"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Multiplication table example:

const number = 5;

for (let i = 1; i < number; i++) {
  console.log(`${number}*${i} = ${number * i}`);
}
