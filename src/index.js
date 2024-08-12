// require('dotenv').config({path: './env'})
// Import necessary packages
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Configure dotenv to load environment variables
dotenv.config({
    path: './.env'  // Ensure the path is correct and the file exists
});

// Connect to the database and start the server
connectDB()
    .then(() => {
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`⚙️ Server is running at port : ${port}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });










/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/