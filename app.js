const express = require('express');
const app = express();
port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    data ={
        "slackUsername": "litch",
        "backend": true,
        "age": 23,
        "bio": "A backend developer (Node js)",
    }
    res.send(data);
});

app.listen(3000,()=>{
    console.log('server running on port 3000')
})