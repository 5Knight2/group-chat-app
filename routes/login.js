const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send("<html><body>    <p>Enter username</p>  <form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action='/login' method='post'  ><input type='text' id='username' name='username'>        <button type='submit' id='login'>login</button>    </form></body></html>");
});

router.post('/login',(req,res,next)=>{
const obj=req.body;   
res.redirect('/')
})
module.exports=router;