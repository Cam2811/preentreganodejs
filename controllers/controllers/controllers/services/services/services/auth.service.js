import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const USERS = [
  { username: 'admin', password: '1234' } // Usuario de ejemplo
];

export const login = async (username, password) => {
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) return null;

  const payload = { username: user.username };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });

  return token;
};
