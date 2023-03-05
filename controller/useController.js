import transporter from "../config/emailConfig.js";

class useController{
    static home=(req,res)=>{
        res.render("index.ejs")
    }

    static userLogin = async (req, res)=>{
        let otp='';
        for(var i =1;i<=4;i++){
            let n = Math.round(Math.random()*9)
            otp=otp+n
        }
        

        const {email}= req.body
        let info =  transporter.sendMail({
            from:process.env.EMAIL_FROM,
            to:email,
            subject:"Your OTP",
            html:`<h1>Your OTP is ${otp}.</h1>`,
            "otp":otp
        })
        // res.send({status:"check email ","otp":otp})
        res.render("otp.ejs", {"otp":otp})

        // console.log(mno)
        // res.send({"message":"otp sent"})
        //using messagebird or twilio to send otp
    }
}

export default useController