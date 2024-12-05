import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

//model kelas
const Class = db.define('class', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT
    },
    teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Users,
            key: 'id'
        }
    }
},
    {
        freezeTableName:true
 });

 //Relasi dengan user (guru)
 Users.hasMany(Class, { foreignKey: 'teacherId' });
 Class.belongsTo(Users, { foreignKey: 'teacherId' });

 export default Class;