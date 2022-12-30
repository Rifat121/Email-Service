const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
const api = require('./routes/api')

app.use(bodyParser.json());
app.use(cors());
app.use('/api',api)
app.get('/',function(req,res){
    res.send('Hello from Server');
})

app.post('/signup',function(req,res){
    console.log(req.body);
    // console.log()
    res.status(200).send({"message":"Data Received"});
})
app.post('/login',function(req,res){
    console.log(req.body);
    // console.log()
    res.status(200).send({"message":"Data Received"});
})

app.listen(PORT, function(){
    console.log("Server running on localhost: "+ PORT);
});