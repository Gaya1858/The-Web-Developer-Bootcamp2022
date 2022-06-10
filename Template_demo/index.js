const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home'); // renders the html file
});


app.listen(3000,()=>{
    console.log("Listening");
});