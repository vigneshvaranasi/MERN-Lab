import { request } from 'https';

// Options for the HTTPS request
const options = {
    hostname: 'localhost',
    port: 443,
    path: '/',
    method: 'GET',
    rejectUnauthorized: false, // For self-signed certificates during testing
};

// Make the HTTPS request
request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    res.on('data', (chunk) => console.log(`Body: ${chunk}`));
    res.on('end', () => console.log('Response ended.'));
}).on('error', (err) => console.error(`Error: ${err.message}`)).end();