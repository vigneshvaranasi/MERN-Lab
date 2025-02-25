const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http:localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.get('/', (req, res) => {
    res.send("Hello")
});

app.get('/users', (req, res) => {
    const usersData = [
        {
            name:"Vignesh",
            age:20,
            mail:"vignesh@gmail.com",
            phone:1234567890
        },
        {
            name:"Eswar",
            age:25,
            mail:"eswar@gmail.com",
            phone:9876543210
        },
        {
            name:"Fakruddin",
            age:17,
            mail:"fakruddin@gmail.com",
            phone:3334445551
        },
        {
            name:"pavan",
            age:20,
            mail:"pavan@gmail.com",
            phone:1234567890
        },
    ]
    res.send({ message: "Users Data", payload: usersData });
});

app.listen(5000,()=>{
    console.log("Server is running on port http:localhost:5000");
})