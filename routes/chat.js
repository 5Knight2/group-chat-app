const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/',(req,res,next)=>{
    let msg=fs.readFileSync('./message.txt');
    res.send("<html><body>    <p>"+msg+
    `</p>  
    <form onsubmit="document.getElementById('username').value= localStorage.getItem('username')" action='/' method='post'  >
    <input type='text' id='message' name='message'>        
    <input type='hidden' id='username' name='username'>        
    
    <button type='submit' id='send_button'>Send</button>    
    </form></body></html>`);
});



router.post('/',(req,res,next)=>{
    let msg=    req.body;
    msg=msg.username+':- '+msg.message+"    ";
    
    fs.appendFileSync('./message.txt',msg);
    res.redirect('/')
    })

    module.exports=router;
