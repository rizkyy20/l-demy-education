import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

const database = db;
export default database;