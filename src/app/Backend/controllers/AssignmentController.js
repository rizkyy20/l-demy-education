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