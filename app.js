const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id:1, name: "course1"},
    { id:2, name: "course2"},
    { id:3, name: "course3"}
]

app.get('/',(req,res) => {
    res.send('say hello to my little friend!!');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.post('/api/courses', (req, res)=>{
        const schema ={
            name: Joi.string().min(3).required()
        }

        const result = Joi.validate(req.body, schema);
        console.log(result);

        if (!req.body.name || req.body.name.length >3){
            res.status(400).send('Name is required and should be minimum 3 characters');
            return;
        }
        const course = {
            id: courses.length + 1,
            name: req.body.name
        };
        courses.push(course);
        res.send(course)
    });

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}`));