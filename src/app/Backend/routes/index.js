import express from "express";
import { getUsers, Register, Login } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { createClass, deleteClass, getTeacherClasses, updateClass } from "../controllers/ClassController.js";
import { enrollClass, getMyClasses, updateEnrollmentStatus } from "../controllers/EnrollmentController.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
//class routes
router.post('/class', verifyToken, createClass);
router.get('/teacher/classes', verifyToken, getTeacherClasses);
router.patch('/class/:id', verifyToken, updateClass);
router.delete('/class/:id', verifyToken, deleteClass);
//enrollment/pendaftaran
router.post('/enroll', verifyToken, enrollClass);
router.patch('/enrollment/status', verifyToken, updateEnrollmentStatus);
router.get('/my-classes', verifyToken, getMyClasses);

export default router;