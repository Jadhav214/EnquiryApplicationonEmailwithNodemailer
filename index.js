const express= require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send",(req,res)=>{
    let name = req.body.name;
    let phone= req.body.phone;
    let query = req.body.query;

    let text = "Name: " +  name + "\n" + "Phone Number: +91" +phone +  "\n" + "Query: " + query;

    let tarnsporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"ramjadhav2608@gmail.com",
            pass:"andpmgvvqsqaoiks"
        }
    })

    let mailOptions={
        from: "ramjadhav2608@gmail.com",
        to:"ramjadhav2608@gmail.com",
        subject: "Enquiry from " + name,
        text: text
    }

    tarnsporter.sendMail(mailOptions, (err, info)=>{
        if(err) res.status(500).json({"message": "server error"});
        else res.status(200).json({"message" : "Email Sent"});
    })
})

app.listen(9000,()=>{console.log("Ready to send mail at port 9000")});