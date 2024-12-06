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

        //cek apakah kelas ada
        const classData = await Class.findOne({
            where: {
                id: classId
            }
        });
        if(!classData) return res.status(404).json({msg: "Kelas tidak ditemukan"});

        //cek apakah sudah terdaftar
        const isEnrolled = await Enrollment.findOne({
            where: {
                studentId: studentId,
                classId: classId
            }
        });
        if(isEnrolled) return res.status(400).json({msg: "Sudah terdaftar dikelas ini"});

        //Daftarkan ke kelas
        await Enrollment.create({
            studentId: studentId,
            classId: classId
        });

        res.json({msg: "Berhasil mendaftar ke kelas"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

//Guru menyetujui atau menolak pendaftaran
export const updateEnrollmentStatus = async(req, res) => {
    const teacherId = req.userId;
    const { enrollmentId, status } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                id: teacherId,
                role: 'guru'
            }
        });
        if(!user) return res.status(403).json({msg: "Akses ditolak!"});

        //update status
        await Enrollment.update({
            status: status
        }, {
            where: {
                id: enrollmentId
            }
        });
        res.json({msg: "Status pendaftaran diperbarui"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

