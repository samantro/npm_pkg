const express = require('express');
const app = express();
const sharper = require('./src/sharper.js');

app.get('/sharp', sharper);

app.listen(3000, () => {
    console.log("App listening on 3000");
});