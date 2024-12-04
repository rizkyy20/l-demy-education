import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM('murid', 'guru'),
        allowNull: false,  // tidak boleh kosong
        validate: {
            notEmpty: true,  // tidak boleh string kosong
            isIn: [['guru', 'murid']] // hanya boleh nilai 'guru' atau 'murid'
        }  // Tutup validate
    }   // Tutup role
},{
    freezeTableName:true
})

export default Users;