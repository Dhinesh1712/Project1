const express = require('express');

const app = express();

app.get('/',function(req,res)
{
    res.sendfile('index.html');
})

app.get('/registration',function(req,res)
{
    res.sendfile('registration.html');
})

app.get('/home',function(req,res)
{
    res.sendfile('home.html');
})

app.get('/about',function(req,res)
{
    res.sendfile('about.html');
})

app.get('/contact',function(req,res)
{
    res.sendfile('contact.html');
})

app.get('/Welcome',function(req,res)
{
    res.sendfile('welcome.html');
});

app.listen(4000,() => {
    console.log("server is working");
})