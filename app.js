const express = require('express');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/',(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})
app.get('/add',(req,res)=>{

    res.render('add_post')
})

const port =3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} port üzerinden çalışmaya başladı`)
})
