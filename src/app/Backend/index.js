import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Class from "./models/ClassModel.js";
import Users from "./models/UserModel.js";
import Enrollment from "./models/EnrollmentModel.js";
dotenv.config();
const app = express();
const port = 3002;

try {
    await db.authenticate();
    console.log('Database Connected...');
    await Class.sync();
    //await Users.sync();
    await Enrollment.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
 })