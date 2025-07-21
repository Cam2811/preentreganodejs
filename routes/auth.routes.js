import express from 'express';
import { login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Esta es una respuesta simulada (después la vamos a conectar al JWT real)
  if (username === 'admin' && password === '1234') {
    res.json({ token: 'FAKE-TOKEN' });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

export default router;
