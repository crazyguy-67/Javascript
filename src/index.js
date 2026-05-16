// callback with async code
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
