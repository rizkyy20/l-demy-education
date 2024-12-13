import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Class from "./ClassModel.js";

const { DataTypes } = Sequelize;

const Assignment =  db.define('assignment', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
});

export default Assignment;