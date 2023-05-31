const express = require('express');
const {connection} = require('./db');
const {studentApi} = require('./api/student.api');

const app = express();

app.use(express.json());
app.use("/",studentApi);

app.listen(process.env.PORT, async ()=>{
    try {
        await connection
        console.log('Server connected to db')
    
    } catch (error) {
        console.log(err)
    }    
    console.log('Server running')
})