const https = require('https');
const fs = require('fs');

// Load SSL/TLS credentials
const options = {
    key: fs.readFileSync('certs/private-key.pem'),
    cert: fs.readFileSync('certs/certificate.pem'),
};

// Create the HTTPS server
const server = https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Secure World!');
});

// Start the server
const PORT = 443;
server.listen(PORT, () => {
    console.log(`HTTPS server running on https://localhost:${PORT}`);
});