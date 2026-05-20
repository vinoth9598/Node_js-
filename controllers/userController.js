const userRouter = require('express').Router() ;
const user = require("../models/user") ;

//endpoint to get all the users 
userRouter.get('/',(request, response)=>{
    user.find({},{}) 
        .then(user => {
            response.status(200).json(user);
        });
});

//endpoint to create a new resource based on the request data
userRouter.post('/', (request, response) => {
    const user = new User(request.body) ;

    user.save()
        .then(()=>{
            response.status(201).json({
                message:"user created successfully"
            })
        }) ;
});

//endpoint to fetch a single resource based on it
userRouter.get('/:id', (request, response)=>{
    const id = request.params.id ;

    User.findById(id)
        .then(user => {
            response.status(200).json(user)
        })
        .catch(err=>{
            response.status(404).json({
                message : "id does not exists"
            })
        })
}) ;

//deletes a single resource based on id 
userRouter.delete('/:id', (request, response)=>{
    const id = request.params.id ;

    user.findByIdAndDelete(id)
        .then(deletedUser => {
            if(deletedUser){
                response.status(204).json({
                    message:"user deleted successfully"
                })
            }else {
                response.status(404).json({
                    message:"id does not exists"
                })
            }
        })
        .catch(err => {
            response.status(404).json({
                message:"deleting user failed"
            })
        })
});

module.exports = userRouter ;