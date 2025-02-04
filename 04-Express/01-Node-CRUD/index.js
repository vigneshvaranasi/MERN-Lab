import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // CRUD Operations on Student DB
    if (req.url === '/students' && req.method === 'GET') {
        fs.readFile('db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else if (req.url === '/newStudents' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.readFile('db.json', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                const students = JSON.parse(data);
                students.push(JSON.parse(body));
                fs.writeFile('db.json', JSON.stringify(students), (err) => {
                    if (err) {
                        console.error(err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                        return;
                    }
                    res.writeHead(201, { 'Content-Type': 'text/plain' });
                    res.end('Student added successfully');
                });
            });
        });
    } else if (req.url.match(/\/students\/\d+/) && req.method === 'PUT') {
        const id = req.url.split('/')[2];
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.readFile('db.json', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                const students = JSON.parse(data);
                const studentIndex = students.findIndex((student) => student.id === parseInt(id));
                if (studentIndex !== -1) {
                    students[studentIndex] = JSON.parse(body);
                    fs.writeFile('db.json', JSON.stringify(students), (err) => {
                        if (err) {
                            console.error(err);
                            res.writeHead(500, { 'Content-Type': 'text/plain' });
                            res.end('Internal Server Error');
                            return;
                        }
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('Student updated successfully');
                    });
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Student not found');
                }
            });
        });
    } else if (req.url.match(/\/students\/\d+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[2];
        fs.readFile('db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            const students = JSON.parse(data);
            const studentIndex = students.findIndex((student) => student.id === parseInt(id));
            if (studentIndex !== -1) {
                students.splice(studentIndex, 1);
                fs.writeFile('db.json', JSON.stringify(students), (err) => {
                    if (err) {
                        console.error(err);
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Internal Server Error');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Student deleted successfully');
                });
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Student not found');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page not found.');
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});