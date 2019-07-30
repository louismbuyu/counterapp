const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin',"http://localhost:3000");
    res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers',"Content-type");
    next();
});

app.get('/', (req,res) => {
    return res.json({message: "hello"});
});

app.post('/plus', (req,res) => {
    const counterValue = req.body.counterValue;
    return res.json({counterValue: counterValue + 1});
});

app.post('/minus', (req,res) => {
    const counterValue = req.body.counterValue;
    return res.json({counterValue: counterValue - 1});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log('Server is running on: '+PORT);
});