const express=require('express');
const app=express();

app.get('/', (req, res)=>{
    res.send('Hello world, this is the root route')
});

app.listen(3000);
app.get('/uno', (req, res)=>{
    res.send('Hello world, from root one')
});

app.get('/prueba', (req, res)=>{
    res.send('Hello world, from root prueba')
});

app.get('/pruebaHTML', (req, res)=>{
    res.send('<html><head><title>xdddddd</title></head><body>Hola mundo!</body></html>')
});
