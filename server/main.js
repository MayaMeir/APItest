



const express = require('express'); 
const cors = require('cors');

const app = express();

app.use(express.urlencoded()); 
app.use(express.json()); 

app.use(cors());

const dbModule = require('./dbModule');

app.get('/catapi', (req, res) => {
    dbModule.getAll().then(data => {
        res.send(data);
    })
})


app.get('/catapi/random', (req, res) => {
    dbModule.getAll().then(data => {
        const randNum = Math.floor(Math.random() * data.length); 
        const result = data[randNum];
        res.send(result);
    })
})

app.get('/catapi/:id', (req, res) => {
    dbModule.getAll().then(data => {
        const result = data.find(ele => ele.id == req.params.id);
        res.send(result);
    })
})



app.post('/catapi', (req, res) => {
    dbModule.addCat(req.body).then(data => {
        res.send({
            "data": data
        })
    })
})


app.delete('/catapi/:id', (req, res) => {
    
    dbModule.delete(req.params.id).then(data => {
        res.send({
            "data": data
        })
    })
})

app.listen(3003);
