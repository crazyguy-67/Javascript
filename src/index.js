// Promises

// A Promise means:
// I promise to give you a result in the future — either success or failure.
// A promise has 3 states:
// pending   → still working
// fulfilled → success
// rejected  → failed

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong!");
  }
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));
