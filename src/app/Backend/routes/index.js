import express from "express";
import { getUsers, Register, Login } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { createClass, deleteClass, getTeacherClasses, updateClass } from "../controllers/ClassController.js";
import { enrollClass, getMyClasses, updateEnrollmentStatus } from "../controllers/EnrollmentController.js";
import { upload } from "../middleware/FileUpload.js";
import { uploadMedia, getMediaByClass, deleteMedia } from "../controllers/MediaController.js";

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
//Media routes
router.post('/upload', verifyToken, upload.single('file'), uploadMedia);
router.get('/media/class/:classId', verifyToken, getMediaByClass);
router.delete('/media/:id', verifyToken, deleteMedia);

export default router;