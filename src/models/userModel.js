let users = []; // Array to store users temporarily

const createUser = (username, password) => {
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  return newUser;
};

const authenticateUser = (username, password) => {
  const user = users.find(user => user.username === username && user.password === password);
  return user || null;
};

module.exports = { createUser, authenticateUser };
