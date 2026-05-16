// A call back is a function passed into another funciton.

function greet(name, callback) {
  console.log("hello" + name);
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("Abhishek", sayBye);

// Here, sayBye is the callback.
