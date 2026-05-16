// 1. Template literals
const name = "Abhishek";
const skill = "JavaScript";

console.log(`My name is ${name} and I am learning ${skill}`);

// 2. Destructuring
// Array destructuring:
const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);

// Object destructuring:
const user = {
  name: "Abhishek",
  age: 22,
  skill: "JavaScript",
};

const { name, skill } = user;

console.log(name);
console.log(skill);

// 3. Rest operator
// Looks like spread, but works differently.
function addNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(addNumbers(10, 20, 30));
// Output : 60

// 4. Optional chaining
const user = {
  name: "Abhishek",
  profile: {
    image: "avatar.png",
  },
};

console.log(user.profile?.image);
console.log(user.address?.city);

// 5. Truthy and falsy values
// Falsy values:
// false
// 0
// ""
// null
// undefined
// NaN

// 6. Ternary operator
const age = 18;

const message = age >= 18 ? "Adult" : "Minor";

console.log(message);

// 7. Short-circuiting
const isLoggedIn = true;

isLoggedIn && console.log("Show dashboard");

// 8. Basic string methods
const text = "JavaScript is awesome";

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.includes("Script"));
console.log(text.trim());
console.log(text.split(" "));

// 9. Basic object methods
const user = {
  name: "Abhishek",
  skill: "JavaScript",
  city: "Ranchi",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
