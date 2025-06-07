import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
const app: Application = express();
app.use(express.json());
app.use(cookieParser());


app.get('/',(req:Request,res:Response)=>{
    res.send("this is arman");
})

export default app;