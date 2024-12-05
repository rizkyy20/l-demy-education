import express from "express";
import { getUsers, Register, Login } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { createClass, getTeacherClasses } from "../controllers/ClassController.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.post('/class', verifyToken, createClass);
router.get('/teacher/classes', verifyToken, getTeacherClasses);

export default router;