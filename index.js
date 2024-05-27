const express = require("express")

const cors = require("cors");

const mongoose = require("mongoose");

const apiRouter = require("./Router/apiRouter");
const app = express();

app.use(express.json());

app.use(cors());


   const db = mongoose.connect("mongodb+srv://yoganandimihir9313:THFnGv8lYuczmQbT@cluster0.ulsxyg5.mongodb.net/Connection_practice?retryWrites=true&w=majority&appName=Cluster0")

    db.then(()=>{
        console.log("Successfully connected to database");
    }).catch((error)=>{
        console.log("Connection error" , error)
    })

    app.use("/api" , apiRouter);

app.listen(4000 , ()=>{
    console.log("Your server is running....");
})