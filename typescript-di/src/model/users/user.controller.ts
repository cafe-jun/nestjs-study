import { Router } from 'express';
const router = Router();

router.get('/user');
router.get('/user/:id');
router.post('/user');
router.put('/user');
router.delete('/user');
