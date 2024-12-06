import Enrollment from "../models/EnrollmentModel.js";
import Class from "../models/ClassModel.js";
import Users from "../models/UserModel.js";

//murid mendaftar ke kelas
export const enrollClass = async(req, res) => {
    const studentId = req.userId;
    const { classId } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                id: studentId,
                role: 'murid'
            }
        });
        if(!user) return res.status(403).json({msg: "Akses ditolak"});
        

    } catch (error) {
        
    }
}