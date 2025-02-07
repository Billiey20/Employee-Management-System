import express from "express";
import cors from 'cors';
import {adminRouter} from "./Routes/AdminRoutes.js";
import { EmployeeRouter } from "./Routes/EmployeeRoute.js";


const app = express();

app.use(cors({
   origin: ["http://localhost:5173"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true
}));

app.use(express.json())



app.use('/auth', adminRouter)
app.use ('/employee', EmployeeRouter)

app.use(express.static('Public'))

app.options('/auth/adminlogin', cors());

app.listen(5000, () =>{
    console.log("Server is doing ok!!")
});