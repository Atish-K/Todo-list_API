require("dotenv").config();
const express = require("express"); 

//Initialize the app
const app = express();

//Middleware

app.use(express.json());    //  inorder to parse json object
app.use(express.urlencoded({extended:true}));


app.use("/",(req,res)=>{
    res.send("Hello");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})