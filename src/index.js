// map       -> transform every item
// filter    -> keep only matching items
// reduce    -> convert array into single value
// slice     -> copy part of array
// splice    -> change original array
// find      -> get first matching item
// sort      -> arrange items
// includes  -> check if value exists
// push/pop  -> add/remove from end
// ...       -> copy/merge arrays or objects

const { use } = require("react");

///------------------------------------------------------------//

// 1. map()
// Use map when you want to convert every item into something new.

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);

// 2. filter()
// Use filter when you want to remove unwanted items and keep matching ones.

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// 3. reduce()
// Use reduce when you want to convert an array into one final value.
// Common use: total, sum, count, grouping.

const numbers = [10, 20, 30];

const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(total);

// 4. slice()
// Use slice when you want to copy a part of an array.
// It does not change the original array.

const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);

// 5. splice()
// Use splice when you want to add/remove/change items in original array.
// It changes the original array.

const fruits = ["apple", "banana", "mango", "orange"];

fruits.splice(1, 2);

console.log(fruits);

// OUTPUT
// ["apple", "orange"]
// Meaning:
// splice(1, 2)
// start from index 1
// remove 2 items

// Add item
const fruits = ["apple", "orange"];

fruits.splice(1, 0, "banana");

console.log(fruits);

// Output:

// ["apple", "banana", "orange"]

// Replce item
const fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1, "mango");

console.log(fruits);

// Output:

// ["apple", "mango", "orange"]

// 6. find()
// Use find when you want the first matching item.

const users = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" },
];

const user = users.find((user) => {
  return user.id === 2;
});

console.log(user);

// Output
// { id: 2, name: "Rahul" }

// 7. sort()
// Use sort to arrange items.
// Important: sort() changes the original array.
// String sort:

const names = ["Rahul", "Aman", "Amit"];
names.sort();
console.log(names);

// Output
// ["Abhishek", "Aman", "Rahul"]

// Number sort

const numbers = [100, 5, 20, 1];

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);

// Descending Order
numbers.sort((a, b) => {
  return b - a;
});

// Sort users by age:
const users = [
  { name: "Abhishek", age: 22 },
  { name: "Rahul", age: 19 },
  { name: "Aman", age: 25 },
];

users.sort((a, b) => {
  return a.age - b.age;
});

console.log(users);

// 8. includes()
// Use includes to check whether an array contains a value.
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.includes("Javascript"));
console.log(skills.includes("React"));

// 9. push() and pop()
// push()
// Adds item at the end.
const fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);

// pop()
// Removes item from the end.
const fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits);

// 10. Spread operator ...
// Spread is used to copy, merge, or expand arrays/objects.

const numbers = [1, 2, 3];
const copy = [...numbers];
console.log(copy);

// Add item without changing original array
const skills = ["HTML", "CSS"];
const newSkills = [...skills, "JavsScript"];
console.log(newSkills);

// Merge arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

const fullStack = [...frontend, ...backend];
console.log(fullStack);

// Copy object
const user = {
  name: "Abhishek",
  age: 22,
};

const copiedUser = { ...user };
console.log(copiedUser);

// Update object
const user = {
  name: "Abhishek",
  skill: "JavaScript",
};

const updatedUser = {
  ...user,
  skill: "React",
};

console.log(updatedUser);

// Methods that do not change original array
// map
// filter
// reduce
// slice
// find
// includes
// spread operator

// change the array
// push
// pop
// splice
// sort
