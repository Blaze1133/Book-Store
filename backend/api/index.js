const express = require("express"); // Since we are using ES6 modules, that is why "import" else "require"\
const app = express();

const cors = require("cors"); //CROSS ORIGIN RESOURCE SHARING, allows front end to talk with the backend
app.use(cors()); // impmenting cors for all the routes

require("express-async-errors"); // the pass the error, to next available middleware

app.use(express.json()); // essential for parsing the json data in the body

const connectDb = require("../db/connect");
const bookRouter = require("../router/books");   
const errorHandlerMiddleware = require("../middleware/errorHandler");

app.use('/books',bookRouter);
app.use(errorHandlerMiddleware)

const PORT = 5000;
const URL="mongodb+srv://blaze:123@nodeexpress.3kd2m.mongodb.net/Books-Collection?retryWrites=true&w=majority&appName=NodeExpress"


app.get("/",(req,res)=>{
    res.send("Deployed successfully");
})

const start = async() =>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
        });
        await connectDb(URL)
        console.log("Database connected successfully");
        
    }catch(error){
        console.log(error); 
    }
}
 
start();