import { Router} from 'express';
import { container } from "tsyringe"
import UserController from '../../controllers/userController';
import { validate, userSchema } from "../../middlewares/validate";

const router = Router();

router.post('/', validate(userSchema,"body" ), async (req, res) => {

    const userController = container.resolve(UserController);
    await userController.create(req, res);

});

// router.get('/', UserController.getAllUsers);
// router.get('/:id', UserController.getUserById);

export default router;