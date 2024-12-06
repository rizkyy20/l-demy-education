import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Class from "./ClassModel.js";

const { DataTypes } = Sequelize;

const Enrollment = db.define('enrollment', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending'
    }
}, {
    freezeTableName: true
})

//Relasi
Users.hasMany(Enrollment, { foreignKey: 'studentId' });
Enrollment.belongsTo(Users, { foreignKey: 'studentId' });
Class.hasMany(Enrollment, { foreignKey: 'classId' });
Enrollment.belongsTo(Class, { foreignKey: 'classId' });

export default Enrollment;