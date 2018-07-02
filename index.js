let express = require('express');
let app = express();
let portNumber = process.env.EXPRESSPORT || 3000;

app.get('/', (req,res) => {
    res.send('done');
})

app.listen(portNumber, ()=> {
    console.log('started server on port: ', portNumber);
})