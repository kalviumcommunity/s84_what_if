const express= require("express");
const app= express();
const user = require('./Routes/routes')

app.use('/user', user)


require('dotenv').config();
const mongoose = require('./Models/db');

PORT = process.env.PORT || 3000

app.get("/ping", (req, res)=>{
    res.status(200).send("Hlo..!");
})

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});