// Fetch with async/await
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

// Wait for API response.
// Then convert response to JSON.
// Then print data.
