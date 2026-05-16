// Promise with delay

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

//   Promise returns data later
// .then handles success
// .catch handles error
