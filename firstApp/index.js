const express = require("express");
const app = express();
// app.use((req,res)=>{
//     console.log("We got your server");
//     res.send([1,2,3])
// });
app.get('/r/:dogs',(req,res)=>{
    const {dogs} = req.params;
    res.send(`We got your ${dogs}`);
});
app.get('/r/:dogs/:postId',(req,res)=>{
    const {dogs, postId} = req.params;
    res.send(`We got your ${postId}`);
});
app.listen(3000,() =>{
    console.log("Listeing on post 3000");
});