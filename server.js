const express = require('express');

const app = express();
app.set('view engine','ejs');
const router = require('./routes/products');
app.use(router.router);

app.listen(8080,()=>{
    console.log('server started');
})