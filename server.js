const express = require('express');
//const mongoose = require('mongoose'); 
const app = express();
const path = require("path");

app.use("/libs",express.static(path.join(__dirname,"node_modules")))
app.use("/views",express.static(path.join(__dirname,"views")))


app.use("/filmler", function(req, res) {
    res.sendFile(path.join(__dirname,"/views/users","bağışlanan_Kitaplar.html"));
});

app.use("/filmler", function(req, res) {
    res.sendFile(path.join(__dirname,"/views/users","kitap_Bağışla.html"));
});

app.use("/filmler", function(req, res) {
    res.sendFile(path.join(__dirname,"/views/users","filmler.html"));
});

app.use("/kitaplar", function(req, res) {
    res.sendFile(path.join(__dirname,"/views/users","kitaplar.html"));
});

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/users","index.html"));
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});







/*mongoose.
connect('mongodb+srv://eneshan034:UKzXh0Uin6G0KcLo@cluster0.8iryqz1.mongodb.net/NODE-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to MongoDB')
    app.listen(3000, ()=>{
        console.log(`Node API app is running on port 3000`)
    })
    
}).catch((error) => {
    console.log(error)
})*/