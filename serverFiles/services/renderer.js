const axios = require('axios');


exports.homeRoutes = (req, res) =>{
    axios.get('http://localhost:3000/api/students')
    .then(function(response){
        res.render('index',{students:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.new_student = (req, res) =>{
    res.render('new_student');
}

exports.update_student = (req, res) =>{
    res.render('update_student')
}