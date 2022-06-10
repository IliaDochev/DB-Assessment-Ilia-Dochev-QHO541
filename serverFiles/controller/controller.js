var StudentDB = require('../model/model');

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Cannot be empty!"});
        return;
    }
    
    const student = new StudentDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    student
        .save(student)
        .then(data =>{
            res.redirect('/')
        })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred while creating an operation"
        });
    });

}

exports.find = (req, res) =>{

    if(req.query.id){

        const id = req.query.id;

        StudentDB.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: "Student with that ID was not found!"})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retrieving user"})
        })

    }else{    
        StudentDB.find()
        .then(student =>{
            res.send(student)
        })
        .catch(err=>{
            res.status(500).send({message : err.message || "Error has occurred while trying to retrieve information"})
        })}



}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty!"})
    }

    const id = req.params.id;
    StudentDB.findByIdAndUpdate(id, req.body, {useFindAndModify: true})
    .then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot Update user with that ID'})

        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error updating Student information"})
    })
}

exports.delete = (req, res)=>{

    const id = req.params.id;

    StudentDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: 'Cannot Delete that user. Maybe ID is wrong'})
        }else{
            message: "Student was deleted succesfully!"
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete Student with ID=" + id
        });
    });

}