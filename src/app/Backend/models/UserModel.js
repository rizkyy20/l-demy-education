import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
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