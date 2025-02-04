import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello this is a Express Server');
});

app.get('/getEmployees',(req,res)=>{
    fs.readFile('db.json','utf8',(err,data)=>{
        if(err) throw err;
        res.send(data);
    });
})
app.post('/addEmployee', (req, res) => {
    const { id, name, salary } = req.body;
    if (!id || !name || !salary) {
        return res.status(400).send('Missing required fields');
    }
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const employees = JSON.parse(data);
        employees.push({ id, name, salary });
        fs.writeFile('db.json', JSON.stringify(employees), (err) => {
            if (err) throw err;
            res.send('Employee added successfully!');
        });
    });
});

app.listen(5000,()=>{
    console.log('Server is running on http://localhost:5000');
})