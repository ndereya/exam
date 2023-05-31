const express = require('express');
const {connection} = require('./db');
const {studentApi} = require('./api/student.api');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use("/",studentApi);
app.use(cors());

//Enable CORS for specific origins

app.listen(process.env.PORT, async ()=>{
    try {
        await connection
        console.log('Server connected to db')
    
    } catch (error) {
        console.log(err)
    }    
    console.log('Server running')
})