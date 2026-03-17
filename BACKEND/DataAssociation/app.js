const express = require('express');
const app = express()
const userModel = require('./models/user')
const postModel = require('./models/posts')

// app.get('/',(req,res)=>{
  
//    res.send("Hey")
// });
// app.get('/create',async (req,res)=>{
//   let user = await userModel.create({
//    username:"Spandan",
//    email:"spandan@ex.com",
//    age:20
//   })
//   res.send(user)
// });
// app.get('/post/create',async (req,res)=>{
//   let posts =await postModel.create({
//    postdata:"Hello ,From post",
//    user:"69b8dc0c10becf908dee2eba"
//   })
//   let user = userModel.findOne({_id:"69b8dc0c10becf908dee2eba"})
//   user.posts.push(post._id)
//   user.save()
//   res.send({user,post})
// });
app.get('/test',(req,res)=>{
   res.render('test')
})

app.listen("3000",()=>{
    console.log(`server listen at PORT:3000`);
    
})