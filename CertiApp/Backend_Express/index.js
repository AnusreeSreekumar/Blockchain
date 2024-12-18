import { json } from "express";
import express from "express"
import { certRouter } from "./Routes/certRoute.js";

const app = express();

const port = 4000;
app.use(json())
app.use('/', certRouter);

app.listen(port, () => {
    console.log('Server is listening to port: ', port);
    
})