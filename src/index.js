const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig.js');


app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
});