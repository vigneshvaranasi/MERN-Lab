import fs from 'fs';

// Create a file current directory
fs.writeFile('file.txt', 'Hello', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

// Read a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File Data: "+data);
});

// Update a file
fs.appendFile('file.txt', ' Welcome!', (err) => {
    if (err) throw err;
    console.log('File updated successfully!');
});

// Copy a file
fs.copyFile('file.txt', 'copied-file.txt', (err) => {
    if (err) throw err;
    console.log('File copied successfully!');
});

// Rename a file
fs.rename('file.txt', 'renamed-file.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully!');
});

// Check if file exists
fs.access('file.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist!');
    } else {
        console.log('File exists!');
    }
});

// Delete a file
fs.unlink('renamed-file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully!');
});

// Get file information
fs.stat('copied-file.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats);
    console.log("File Size in Bytes: " + stats.size);
});