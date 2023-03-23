const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const postController = require('./controllers/postController');
const pageController= require('./controllers/pageController');
var methodOverride = require('method-override')
const app = express();


//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',{
    methods: ['GET', 'POST']
}));

//Connect to MongoDB
mongoose.connect("mongodb+srv://alanyalialper:1234@pcat.xdwxvcc.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongoose bağlantı kuruldu")
})

//Routes
app.get('/',postController.getAllPost );
app.get("/posts/:id",postController.getPost);
app.post('/add',postController.createPost);
app.put('/posts/edit/:id',postController.updatePost);
app.delete('/post/delete/:id',postController.deletePost);
app.get("/about",pageController.getAboutPage);
app.get('/add',pageController.getAddPage);
app.get('/posts/edit/:id',pageController.getEditPage);
const port =3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} port üzerinden çalışmaya başladı`)
})
