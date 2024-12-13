import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Class from "./ClassModel.js";

const { DataTypes } = Sequelize;

const Media = db.define('media',{
    type: {
        type: DataTypes.ENUM('photo', 'video'),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uploaderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        references: {
            model: Class,
            key: 'id'
        }
    }
},{
    freezeTableName: true
});

export default Media;