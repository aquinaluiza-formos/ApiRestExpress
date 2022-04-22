const express = require('express');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const fs = require('fs')
const https = require('https')

const PORT = process.env.PORT || 3050;
// init
const app = express();
// settings
app.set('port', PORT);

//middleware 
app.use(morgan('dev'));

//Global variables
const httpsOptions = {
    key: fs.readFileSync('./security/example.com+2-key.pem'),
    cert: fs.readFileSync('./security/example.com+2.pem')
}
// routes
app.use(require('./routes'));

// public



// start server
const server = https.createServer(httpsOptions, app).listen(PORT, ()=> console.log(`server run in port: ${PORT}`));
