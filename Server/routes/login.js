import express from 'express'

import { createLogin, getLogin } from '../controllers/login.js';
const router = express.Router();

// router.get('/login', (req, res) => {
//     res.send('Logged In');
// })
router.get('/',getLogin);
router.post('/',createLogin);
export default router