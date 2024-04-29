import express from "express";
import dotenv from 'dotenv'
dotenv.config();


const app = express();

app.get('/', (req, res) => {
    res.send("Home page")
})

app.get('/signup', (req, res) => {
    res.send("Sign up page")
})

app.get('/login', (req, res) => {
    res.send("Login page")
})



const PORT = 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})