import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Assignment from "./AssignmentModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Submission = db.define('submission', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    assignmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Assignment,
            key: 'id'
        }
    },
    score: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0,
            max: 100
        }
    },
    feedback: {
        type: DataTypes.TEXT
    },
    submissionDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    attachment: {
        type: DataTypes.STRING //URL atau path ke file tugas
    }
}, {
    freezeTableName: true
});

export default Submission;