const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig.js');
const pingRoutes = require('./routes/pingRoute.js')

app.use('/api/v1/ping',pingRoutes)

app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
});