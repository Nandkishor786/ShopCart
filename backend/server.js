import dotenv from 'dotenv'
import expresss from 'express'
dotenv.config();

import { connectDB } from './config/db.js';
import cors from "cors"
import paymentRoutes from "./routes/paymentRoutes.js"

const app = expresss();
connectDB();
const PORT = process.env.PORT;

const corsOptions = {
    origin:process.env.CLIENT_URL,
    Credential:true,
    methods:[
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH",
    ],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
    ],
}
app.use(expresss.json());
app.use(cors(corsOptions));

app.use("/api/payment",paymentRoutes);

app.get("/",(req,res)=>{
   res.status(200).json({msg:"Wellcome to ShopCart server"});
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})