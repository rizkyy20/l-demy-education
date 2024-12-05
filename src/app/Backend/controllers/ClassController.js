import Class from "../models/ClassModel.js";
import Users from "../models/UserModel.js";

//Membuat kelas baru (hanya guru)
export const createClass = async (req, res) => {
    const { name, description } = req.body;;
    const teacherId = req.userId; //dari token JWT


    try {
        // Cek apakah user adalah guru
         const user = await Users.findOne({
             where: {
                 id: teacherId,
                role: 'guru'
           }
      });

    if (!user) return res.status(403).json({msg: "Akses ditolak"});

    await Class.create({
        name: name,
        description: description,
        teacherId: teacherId
    });

      res.json({ msg: "Kelas berhasil dibuat" });
    } catch (error) {
         res.status(500).json({msg: error.message});
    }
}

//Mendapatkan semua kelas yg diajar oleh guru
export const getTeacherClasses = async (req, res) => {
    try {
        const classes = await Class.findAll({
            where: {
                teacherId: req.userId
            },
            include: [{
                model: Users,
                attributes: ['name', 'email']
            }]
        });
        res.json(classes);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}