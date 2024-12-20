import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id', 'name', 'email', 'role']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {

    const { name, email, password, confPassword, role } = req.body;

    // Validasi field tidak boleh kosong
    if(!name) return res.status(400).json({msg: "Nama harus diisi!"});
    if(!email) return res.status(400).json({msg: "Email harus diisi!"});
    if(!password) return res.status(400).json({msg: "Password harus diisi!"});
    if(!confPassword) return res.status(400).json({msg: "Confirm Password harus diisi!"});

     // Validasi format email
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({msg: "Format email tidak valid!"});
    }

    if(!role) return res.status(400).json({msg: "Role harus diisi!"});
    if(!['guru', 'murid'].includes(role)) return res.status(400).json({msg: "Role harus guru atau murid!"});

    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok!"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        })
        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const role = user[0].role;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '8h'
        });
        res.json({accessToken});
    } catch (error) {
        res.status(404).json({msg: "Email tidak ditemukan"});
    }
}