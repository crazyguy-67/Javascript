# Full Stack JavaScript Journey

This roadmap is for restarting/revising full-stack development from JavaScript fundamentals to backend development.

Goal:

> Build strong JavaScript logic, understand frontend DOM basics, learn async/API calls, then start backend development with Node.js and Express.

---

## Table of Contents

1. [Phase 1: JavaScript Fundamentals](#phase-1-javascript-fundamentals)
2. [Phase 1 Extras](#phase-1-extras)
3. [Important Array Methods](#important-array-methods)
4. [Phase 2: DOM Manipulation](#phase-2-dom-manipulation)
5. [Todo App with DOM](#todo-app-with-dom)
6. [localStorage](#localstorage)
7. [ES Modules](#es-modules)
8. [Async JavaScript](#async-javascript)
9. [Fetch API](#fetch-api)
10. [Error Handling](#error-handling)


---

# Phase 1: JavaScript Fundamentals

The goal of Phase 1 is to become comfortable writing basic JavaScript logic without React, Node.js, or any framework.

## Topics

- Variables: `let`, `const`
- Data types:
  - string
  - number
  - boolean
  - null
  - undefined
  - array
  - object
- Operators:
  - `+`, `-`, `*`, `/`, `%`
  - `===`, `!==`, `>`, `<`, `>=`, `<=`
  - `&&`, `||`, `!`
- Conditions:
  - `if`
  - `else if`
  - `else`
  - `switch`
- Loops:
  - `for`
  - `while`
  - `for...of`
- Functions:
  - normal functions
  - arrow functions
  - parameters
  - return values
- Arrays
- Objects

## Example: Variables

```js
const name = "Abhishek";
const age = 22;
const city = "Ranchi";

console.log(name);
console.log(age);
console.log(city);
```

## Example: Conditions

```js
const age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

## Example: Loop

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## Example: Function

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result);
```

## Phase 1 Practice

Build these small console programs:

1. Calculator
2. Even/Odd checker
3. Student marks calculator
4. Expense tracker
5. Todo list in console

---

# Phase 1 Extras

These are small but very important for React and backend development.

## Template Literals

```js
const name = "Abhishek";
const skill = "JavaScript";

console.log(`My name is ${name} and I am learning ${skill}`);
```

## Destructuring

### Object destructuring

```js
const user = {
  name: "Abhishek",
  age: 22,
  skill: "JavaScript",
};

const { name, skill } = user;

console.log(name);
console.log(skill);
```

### Array destructuring

```js
const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);
```

## Rest Operator

```js
function addNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(addNumbers(10, 20, 30));
```

## Optional Chaining

```js
const user = {
  name: "Abhishek",
  profile: {
    image: "avatar.png",
  },
};

console.log(user.profile?.image);
console.log(user.address?.city);
```

## Truthy and Falsy Values

Falsy values:

```txt
false
0
""
null
undefined
NaN
```

Example:

```js
const name = "";

if (name) {
  console.log("Name exists");
} else {
  console.log("Name is missing");
}
```

## Ternary Operator

```js
const age = 18;

const message = age >= 18 ? "Adult" : "Minor";

console.log(message);
```

## Short-Circuiting

```js
const isLoggedIn = true;

isLoggedIn && console.log("Show dashboard");
```

## String Methods

```js
const text = " JavaScript is awesome ";

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.includes("Script"));
console.log(text.trim());
console.log(text.split(" "));
```

## Object Methods

```js
const user = {
  name: "Abhishek",
  skill: "JavaScript",
  city: "Ranchi",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
```

---

# Important Array Methods

These are must-know for React, backend logic, and full-stack development.

## Quick Meaning

```txt
map       -> transform every item
filter    -> keep only matching items
reduce    -> convert array into single value
slice     -> copy part of array
splice    -> change original array
find      -> get first matching item
sort      -> arrange items
includes  -> check if value exists
push/pop  -> add/remove from end
...       -> copy/merge arrays or objects
```

## map

Use `map` when you want to transform every item.

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);
```

## filter

Use `filter` when you want to keep only matching items.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
```

## reduce

Use `reduce` when you want one final value.

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(total);
```

## slice

`slice` copies part of an array and does not change the original array.

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
```

## splice

`splice` changes the original array.

```js
const fruits = ["apple", "banana", "mango", "orange"];

fruits.splice(1, 2);

console.log(fruits);
```

## find

`find` returns the first matching item.

```js
const users = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" },
];

const user = users.find((user) => {
  return user.id === 2;
});

console.log(user);
```

## sort

`sort` arranges items and changes the original array.

```js
const numbers = [100, 5, 20, 1];

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);
```

## includes

```js
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.includes("JavaScript"));
console.log(skills.includes("React"));
```

## push and pop

```js
const fruits = ["apple", "banana"];

fruits.push("mango");
fruits.pop();

console.log(fruits);
```

## Spread Operator

```js
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);
```

## Mutating vs Non-Mutating Methods

Methods that usually do not change original array:

```txt
map
filter
reduce
slice
find
includes
spread operator
```

Methods that change original array:

```txt
push
pop
splice
sort
```

---

# Phase 2: DOM Manipulation

DOM means Document Object Model.

Simple meaning:

> Browser converts HTML into a JavaScript-controllable object.

## Topics

- `getElementById`
- `querySelector`
- `querySelectorAll`
- changing text
- changing HTML
- changing styles
- adding/removing classes
- events
- form handling
- creating elements
- removing elements

## Selecting Elements

```html
<h1 id="title">Hello</h1>
```

```js
const title = document.getElementById("title");

console.log(title);
```

## Changing Text

```js
title.textContent = "Hello JavaScript";
```

## Changing HTML

```js
const box = document.getElementById("box");

box.innerHTML = "<h2>Hello from JS</h2>";
```

## Changing Styles

```js
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.fontSize = "40px";
```

## Classes

```js
title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("active");
```

## Events

```html
<button id="btn">Click me</button>
```

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});
```

## Input Event

```html
<input id="nameInput" type="text" />
<p id="output"></p>
```

```js
const input = document.getElementById("nameInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});
```

## Form Submit

```html
<form id="form">
  <input id="nameInput" type="text" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>

<p id="result"></p>
```

```js
const form = document.getElementById("form");
const input = document.getElementById("nameInput");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  result.textContent = `Hello ${input.value}`;
});
```

## Creating Elements

```js
const list = document.getElementById("list");

const li = document.createElement("li");
li.textContent = "Learn JavaScript";

list.appendChild(li);
```

## Removing Elements

```js
const item = document.getElementById("item");

item.remove();
```

## DOM Mini Projects

1. Counter app
2. Character counter
3. Password show/hide
4. Theme toggle
5. Todo app

---

# Todo App with DOM

This project combines arrays, objects, functions, DOM, events, forms, and rendering.

## Features

- Add todo
- Show todos
- Delete todo
- Mark todo as completed

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Todo App</title>
  </head>
  <body>
    <h1>Todo App</h1>

    <form id="todoForm">
      <input id="todoInput" type="text" placeholder="Enter todo" />
      <button type="submit">Add Todo</button>
    </form>

    <ul id="todoList"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

## JavaScript

```js
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let todos = [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a todo");
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);

  todoInput.value = "";

  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;

    if (todo.completed) {
      span.style.textDecoration = "line-through";
    }

    span.addEventListener("click", function () {
      todo.completed = !todo.completed;
      renderTodos();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      todos = todos.filter(function (item) {
        return item.id !== todo.id;
      });

      renderTodos();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}
```

## Todo App Upgrades

1. Show total todos count
2. Show completed todos count
3. Add clear all button
4. Add edit todo feature
5. Add localStorage

---

# localStorage

`localStorage` stores data inside the browser.

Important:

```txt
localStorage only stores strings
```

So for arrays and objects, use:

```js
JSON.stringify();
JSON.parse();
```

## Save Text

```js
localStorage.setItem("name", "Abhishek");
```

## Get Text

```js
const name = localStorage.getItem("name");

console.log(name);
```

## Remove Item

```js
localStorage.removeItem("name");
```

## Clear Everything

```js
localStorage.clear();
```

## Save Object

```js
const user = {
  name: "Abhishek",
  skill: "JavaScript",
};

localStorage.setItem("user", JSON.stringify(user));
```

## Get Object

```js
const storedUser = localStorage.getItem("user");

const user = JSON.parse(storedUser);

console.log(user);
```

## Todo App with localStorage

Change:

```js
let todos = [];
```

to:

```js
let todos = JSON.parse(localStorage.getItem("todos")) || [];
```

Add save function:

```js
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
```

Call this whenever todos change:

```js
saveTodos();
renderTodos();
```

## Theme Toggle Example

### HTML

```html
<button id="themeBtn">Toggle Theme</button>
```

### CSS

```css
.dark {
  background-color: black;
  color: white;
}
```

### JavaScript

```js
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
```

---

# ES Modules

Modules help us split code into multiple files.

Instead of one large file:

```txt
script.js
```

Use:

```txt
main.js
math.js
users.js
api.js
```

Connect files using:

```js
import
export
```

## HTML Setup

```html
<script type="module" src="main.js"></script>
```

## Named Export

### math.js

```js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

### main.js

```js
import { add, multiply } from "./math.js";

console.log(add(10, 20));
console.log(multiply(5, 3));
```

## Default Export

### calculator.js

```js
function calculator(a, b) {
  return a + b;
}

export default calculator;
```

### main.js

```js
import calculator from "./calculator.js";

console.log(calculator(10, 5));
```

## Named vs Default Export

Named export:

```js
export function add(a, b) {
  return a + b;
}
```

Import with curly braces:

```js
import { add } from "./math.js";
```

Default export:

```js
export default function add(a, b) {
  return a + b;
}
```

Import without curly braces:

```js
import add from "./math.js";
```

## Import Everything

```js
import * as math from "./math.js";

console.log(math.add(10, 20));
console.log(math.multiply(5, 3));
```

## Rename Import

```js
import { add as sum } from "./math.js";

console.log(sum(10, 20));
```

---

# Async JavaScript

Async JavaScript helps us handle delayed work like API calls, timers, file reading, and database calls.

Learn in this order:

```txt
callbacks
promises
async/await
fetch/API calls
```

## Synchronous Code

```js
console.log("One");
console.log("Two");
console.log("Three");
```

Output:

```txt
One
Two
Three
```

## Asynchronous Code

```js
console.log("One");

setTimeout(() => {
  console.log("Two");
}, 2000);

console.log("Three");
```

Output:

```txt
One
Three
Two
```

## Callback

A callback is a function passed into another function.

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("Abhishek", sayBye);
```

## Async Callback

```js
function fetchUser(callback) {
  setTimeout(() => {
    const user = {
      name: "Abhishek",
      age: 22,
    };

    callback(user);
  }, 2000);
}

fetchUser((user) => {
  console.log(user);
});
```

## Promise

A Promise gives a future result: success or failure.

States:

```txt
pending
fulfilled
rejected
```

Example:

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise with Delay

```js
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: 1,
        name: "Abhishek",
      };

      resolve(user);
    }, 2000);
  });
}

fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Promise Chaining

```js
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Abhishek" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "Post 1", userId },
        { id: 102, title: "Post 2", userId },
      ]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Async/Await

`async/await` is a cleaner way to write promises.

```js
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Abhishek" });
    }, 2000);
  });
}

async function main() {
  const user = await fetchUser();
  console.log(user);
}

main();
```

## Async/Await with try/catch

```js
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@gmail.com" && password === "123456") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

async function handleLogin() {
  try {
    const result = await loginUser("test@gmail.com", "wrong");
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

handleLogin();
```

## Callback vs Promise vs Async/Await

Callback:

```js
fetchUser((user) => {
  console.log(user);
});
```

Promise:

```js
fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
```

Async/Await:

```js
try {
  const user = await fetchUser();
  console.log(user);
} catch (error) {
  console.log(error);
}
```

---

# Fetch API

`fetch()` is used to call an API.

## Fetch with then/catch

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

## Fetch with async/await

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();
```

## Better Fetch Pattern

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUsers();
```

## GET Request

GET means read data.

```js
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    console.log(posts);
  } catch (error) {
    console.log(error.message);
  }
}

getPosts();
```

## POST Request

POST means send/create data.

```js
async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Learning Fetch",
        body: "Fetch is important for full stack",
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

createPost();
```

## Common HTTP Methods

```txt
GET     -> read data
POST    -> create data
PUT     -> replace/update full data
PATCH   -> update partial data
DELETE  -> delete data
```

## REST API Style

```txt
GET    /api/users        -> get all users
GET    /api/users/1      -> get one user
POST   /api/users        -> create user
PATCH  /api/users/1      -> update user
DELETE /api/users/1      -> delete user
```

---

# Error Handling

Error handling prevents your app from crashing or behaving badly.

## Basic try/catch

```js
try {
  console.log("Start");

  const result = 10 / 2;

  console.log(result);
} catch (error) {
  console.log("Something went wrong");
}
```

## Catch Real Error

```js
try {
  console.log(user.name);
} catch (error) {
  console.log("Error:", error.message);
}
```

## throw

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

## Validation Example

```js
function login(email, password) {
  if (!email) {
    throw new Error("Email is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }

  return "Login successful";
}

try {
  const result = login("", "123456");
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

## finally

```js
try {
  console.log("Trying...");
  throw new Error("Something failed");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Cleanup done");
}
```

## Async Error Handling

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUsers();
```

---
