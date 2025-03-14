const { verifyToken } = require('../utils/authUtils');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const user = verifyToken(token.split(' ')[1]);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.user = user;
  next();
};

module.exports = authMiddleware;
