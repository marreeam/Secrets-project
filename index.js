
//The password is ILoveProgramming
import express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = 3002;


app.use(bodyParser.urlencoded({extended:true}));  

app.get("/",(req,res)=>{
res.sendFile(__dirname+ "/public/index.html");
})


app.post("/check",(req,res)=>{
const  password1  = req.body["password"];
console.log(res.body)
if (password1==="ILoveProgramming"){
res.sendFile(__dirname+"/public/secret.html")

}else{
res.sendFile(__dirname+ "/public/index.html");

}


})




app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
