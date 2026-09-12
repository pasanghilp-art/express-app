const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('say hello to my little friend!!');
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})

app.get('/api/courses/:year/:month', (req,res)=>{
    res.send(req.params);
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}`));