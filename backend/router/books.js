const express = require("express");
const router = express.Router();

const {createBook,getAllBookks,getBookById,updateBook,deleteBook} = require("../controllers/books");

router.get("/",getAllBookks);
router.get("/:id",getBookById);
router.post("/", createBook);

router.patch("/:id",updateBook);
router.delete("/:id",deleteBook);

module.exports = router;

