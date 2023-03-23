const Post = require('../models/Post')
exports.getAboutPage = (req,res)=>{
    res.render('about');
}

exports.getAddPage= (req,res)=>{

    res.render('add_post')
}

exports.getEditPage= async (req,res)=>{
    let id = req.params.id;
    let  post = await Post.findById(id);
    console.log(post);
    res.render('edit',{post});

}