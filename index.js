const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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