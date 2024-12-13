import Submission from "../models/SubmissionModel.js";
import Assignment from "../models/AssignmentModel.js";
import Users from "../models/UserModel.js";

//murid kumpulkan tugas
export const submitAssignment = async(req, res) => {
    try {
        const { assignmentId } = req.body;
        const file = req.file;

        await Submission.create({
            studentId: req.userId,
            assignmentId: assignmentId,
            attachment: file ? `/uploads/${file.filename}` : null
        });

        res.json({msg: "Tugas berhasil dikumpulkan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

//guru memberikan nilai
export const gradeSubmission = async(req, res) => {
    try {
        const { submissionId, score, feedback } = req.body;

        const user = await Users.findOne({
            where: {
                id: req.userId,
                role: 'guru'
            }
        });
        if(!user) return res.status(403).json({msg: "Akses ditolak"});

        await Submission.update({
            score,
            feedback
        }, {
            where: {
                id: submissionId
            }
        });

        res.json({msg: "Nilai berhasil diberikan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}