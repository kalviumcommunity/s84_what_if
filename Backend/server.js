const express= require("express");
const app= express();
const cors = require('cors');
// const user = require('./Routes/userRoutes')
const posts = require('./Routes/postRoutes')
app.use(express.json())
app.use(cors())


// app.use('/user', user)
app.use('/posts', posts)


require('dotenv').config();
require('./Models/db');
const router = require("./Routes/postRoutes");

app.use('/posts', router)

PORT = process.env.PORT || 3000

app.get("/ping", (req, res)=>{
    res.status(200).send("Hlo..!");
})

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});