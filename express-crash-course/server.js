const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => { 
    // res.send('<h1>Hello World!</h1>');
    // res.send({ message: 'Hello World!' });
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
 });

app.get('/about', (req, res) => { 
    // res.send('About!');
    res.sendFile(path.join(__dirname, 'public', 'about.html')); 
 });

app.listen(8000, () => console.log(`Server is running on Port 8000!`));
