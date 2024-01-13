const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModel.find();
    res.send(toDo)
}

//CREATE
module.exports.saveToDo = async(req,res)=>{
    const {text} = req.body
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added succesfully");
        console.log(data);
        res.send(data)
    })
}


//UPDATE

module.exports.updateToDo = async(req,res)=>{
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated succesfully..."))
    .catch((err)=>console.log(err));
}


//DELETE
module.exports.deleteToDo = async(req,res)=>{
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Delete succesfully..."))
    .catch((err)=>console.log(err));
}

