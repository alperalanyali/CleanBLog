const Post = require('../models/Post')

exports.getAllPost =async (req,res)=>{
    const posts = await Post.find({})
    res.render('index',{posts});
}

exports.getPost = async (req,res)=>{
    let id = req.params.id;
    const post = await Post.findById(id);
    res.render('post',{post});
}

exports.createPost = async (req,res)=>{
    console.log(req.body)
    await Post.create(req.body);
    res.redirect('/')
}

exports.updatePost = async (req,res)=>{
    let id = req.params.id;
    let post  = await Post.findById(id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect('/');    
}

exports.deletePost = async (req,res)=>{
    let id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.redirect('/');
}