const express = require('express');

const app = express();
app.use(express.json())

app.post('/', (req, res) => {
    const { string } = req.body;
    res.status(201).send(checkpallindrome(string))
})

function checkpallindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
} 

app.listen(8000)