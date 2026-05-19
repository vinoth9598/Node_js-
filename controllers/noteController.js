const Note = require('../models/note.js') ;
const noteRouter = require('express').Router() ;

//endpoint to get all the notes 
noteRouter.get('/', (request, response)=>{
    Note.find({}, {})
        .then(notes => {
            response.status(200).json(notes);
        })
}) ;

//endpoint to create a new resource based on the request data

noteRouter.post('/', (request, response)=>{
    const note = new Note(request.body) ;

    note.save() 
        .then(()=>{
            response.status(201).json({
                message:'note created successfully..'
            });
        })
});

//endpoint to fetch single resource based on it 
noteRouter.get('/:id', (request, response)=>{
    const id = request.params.id ;

    Note.findById(id)
        .then((note) => {
            response.status(201).json(note) ;
        })
        .catch((err)=>{
            response.status(404).json({
                message:"id does not exist"
            }) ;
        })
})

//delete a single resource based on id 
noteRouter.delete('/:id', (request, response)=>{
    const id = request.params.id ;

    Note.findByIdAndDelete(id)
        .then(deletedNote => {
            if(deletedNote){
                response.status(204).json({
                    message:"note deleted successfully.,"
                });
            }else {
                response.status(404).json({
                    message:'id does not exists'
                }) 
            }
        })
        .catch((err)=>{
            response.status(404).json({
                message:'deleting note Failed' 
            }) ;
        })
}) ;

//replaces the entire note object identified by an id 
noteRouter.put('/:id' , (request, response)=>{
    const id = request.params.id ;

    const noteToReplace = request.body ;

    Note.findByIdAndUpdate(id, noteToReplace)
        .then(updatedNote => {
            if(updatedNote){
                response.status(200).json({
                    message:"note replaced successfully."
                })
            }else {
                response.status(404).json({
                    message:"id does not exists"
                }) ;
            }
        })
        .catch(err =>{
            response.status(404).json({
                message:"replacing the note failed"
            }) ;
        })
}) ;

noteRouter.patch('/:id', (request, response)=>{
    const id = request.params.id ;

    const noteToPatch = request.body ;

    Note.findByIdAndUpdate(id, noteToPatch) 
        .then(updatedNote => {
            if(updatedNote){
                response.status(200).json({
                    message: "Note updated successfully."
                })
            }else {
                response.status(404).json({
                    message:"id does not exists"
                })
            }
        })
        .catch(err => {
            response.status(404).json({
                message:"Note patched failled"
            })
        }) ;
})

module.exports = noteRouter ;