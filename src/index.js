// Fetch with .then()

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

// FLOW
//  fetch API
// → get response
// → convert response to JSON
// → use data
// → catch error if failed
