const fakeUsers = [
  {
    _id: "user1",
    email: "user1@example.com",
    password: "password1",
    name: "User One",
  },
  {
    _id: "user2",
    email: "user2@example.com",
    password: "password2",
    name: "User Two",
  },
];

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    const foundUser = fakeUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      resolve({ token: foundUser._id }); // use _id as token
    } else {
      reject(new Error("Invalid email or password"));
    }
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    const user = fakeUsers.find((user) => user._id === token);

    if (user) {
      resolve({ data: user });
    } else {
      reject(new Error("Invalid token"));
    }
  });
};
