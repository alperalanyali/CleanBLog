const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post')
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


mongoose.connect("mongodb+srv://alanyalialper:1234@pcat.xdwxvcc.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongoose bağlantı kuruldu")
})

app.get('/',async (req,res)=>{
    const posts = await Post.find({})
    res.render('index',{posts});
})

app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/posts/:id",async (req,res)=>{
    let id = req.params.id;
    const post = await Post.findById(id);
    res.render('post',{post});
})
app.get('/add',(req,res)=>{

    res.render('add_post')
})

app.post('/add',async (req,res)=>{
    console.log(req.body)
    await Post.create(req.body);
    res.redirect('/')
})
const port =3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} port üzerinden çalışmaya başladı`)
})
