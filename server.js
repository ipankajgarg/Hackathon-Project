const path = require('path');
const express = require('express');
const port  = process.env.PORT ||8080

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
//    res.send("hbh")
    res.sendFile(path.resolve(__dirname, 'build/index.html')) 
})
app.listen(port)
console.log('server start')


