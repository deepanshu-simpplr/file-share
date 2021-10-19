const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT||3000;

const connectDB = require('./config/db');
const { createSecureContext } = require('tls');
connectDB();


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.use('/user', require('./routes/user'));

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})