const http=require('http');
const express=require('express');
const login=require('./routes/login');

const chat=require('./routes/chat');
const app=express();
const parser=require('body-parser')



app.use(parser.urlencoded({extended:false}))
app.use(login);
app.use(chat);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(8000);