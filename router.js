import Router from "express";
import UserController from "./UserController.js";

const router = new Router()

router.post('/user', UserController.create)
router.get('/user', UserController.getAll)
router.get('/user/:id', UserController.getUserId)
router.delete('/user/:id', UserController.deleteUserId)


export default router;

