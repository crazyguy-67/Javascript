// promise chaining

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Abhishek" });
    }, 2000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "Post 1", userId },
        { id: 102, title: "Post 2", userId },
      ]);
    }, 2000);
  });
}

getUsers()
  .then((user) => {
    console.log("User : ", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts : ", posts);
  })
  .catch((error) => {
    console.log(error);
  });
