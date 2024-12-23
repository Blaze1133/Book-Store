const Book = require("../models/bookModel");

const createBook = async(req,res) =>{
    const {title,author,publishYear} = req.body;
    if(!title || !author || !publishYear){
        return res.status(400).json({msg: "Please fill all the required fields"})
    }    
    const book = await Book.create({title,author,publishYear});
    res.status(201).json({msg: book});  
}
const getAllBookks = async(req,res) => {
    const book = await Book.find({});
    return res.status(200).json({count:book.length , data: book});
}

const getBookById = async(req,res) =>{
    const {id} = req.params; //accessing the id from the url
    const book = await Book.findById(id)
    return res.status(200).json({count:book.length , data: book});
}

const updateBook = async(req,res) =>{
    const {id} = req.params;
    const book = await Book.findByIdAndUpdate(id,req.body)
    return res.status(200).json({msg: "Updated Successfully"})
}

const deleteBook = async(req,res) =>{
    const {id} = req.params;
    const book = await Book.deleteOne({_id:id});
    return res.status(200).json({msg: "Deleted Successfully"})
}
module.exports = {createBook,getAllBookks,getBookById,updateBook,deleteBook};