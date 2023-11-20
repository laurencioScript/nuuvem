import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);

// Adicione outras rotas conforme necessário

export default router;