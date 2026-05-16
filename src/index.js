// promise failure example

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@gmail.com" && password === "123456") {
        resolve("Login successfull!");
      } else {
        reject("Inavlid email or password!");
      }
    }, 2000);
  });
}

loginUser("test@gmail.com", "wrong")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
