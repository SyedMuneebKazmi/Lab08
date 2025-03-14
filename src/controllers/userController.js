const { createUser, authenticateUser } = require('../models/userModel');
const { generateToken } = require('../utils/authUtils');

const registerUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = createUser(username, password);
  res.status(201).json({ message: 'User created', userId: newUser.id });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = authenticateUser(username, password);

  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const token = generateToken(user);
  res.status(200).json({ token });
};

module.exports = { registerUser, loginUser };
