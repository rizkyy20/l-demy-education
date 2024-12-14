import Assignment from "../models/AssignmentModel.js";
import Users from "../models/UserModel.js";

//guru membuat tugas
export const createAssignment = async(req, res) => {
    try {
        const { title, description, dueDate, classId } = req.body;

        const user = await Users.findOne({
            where: {
                id: req.userId,
                role: 'guru'
            }
        });
        if(!user) return res.status(403).json({msg: "Akses ditolak"});

        await Assignment.create({
            title,
            description,
            dueDate,
            classId
        });

        res.json({msg: "Tugas berhasil dibuat"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

//mendapatkan semua tugas dalam kelas
export const getClassAssignment = async(req, res) => {
    try {
         // Cek apakah user adalah guru atau murid
         const user = await Users.findOne({
            where: {
                id: req.userId
            }
        });
        if(!user) return res.status(403).json({msg: "Akses ditolak"});

        // Validasi apakah user terdaftar di kelas ini
        if(user.role === 'murid') {
            const enrollment = await Enrollment.findOne({
                where: {
                    studentId: req.userId,
                    classId: req.params.classId
                }
            });
            if(!enrollment) return res.status(403).json({msg: "Anda tidak terdaftar di kelas ini"});
        }

        const assignment = await Assignment.findAll({
            where: {
                classId: req.params.classId
            }
        });
        res.json(assignment);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}