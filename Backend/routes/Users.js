const express=require('express')
const users=express.Router()
const cors=require('cors')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')

const User=require("../models/User")
users.use(cors())

process.env.SECRET_KEY='secret'


users.post('/signup', (req,res) => {
   console.log("It's working")
    const userData= {
    
    name:req.body.name,
    password:req.body.password,
    email:req.body.email
    }
    
    User.findOne({
        email: req.body.email
    })
  
    
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err,hash) =>{
                userData.password = hash
                User.create(userData)
                
                  .then(user => {
                  res.json({"key":"0050"})
                console.log("response after sent")
                })

               .catch(err => {
                    res.send('error:' + err)

               })
            })
        } else{
            res.json({"key":"0040"})
            console.log("user exists")
            }

   })
    .catch(err =>{
        res.send('error' + err)
    })

})

users.post('/signin',(req,res) => {

     console.log("joann")
    User.findOne({email:req.body.email})
   
    .then(user => {
       
        if(user) {
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload= {
                    email:user.email,
                    _id: user._id
                    
            }
            console.log("password match")
            let token = jwt.sign(payload,process.env.SECRET_KEY, { 
                expiresIn: 1440
            })
           // res.send(token)
            res.json({"key":"0030"})
            
            }
         else{ 
            res.json({"key":"0020"})
        }
    } else{
        res.json({"key":"0010"})
    }
    })
    
    .catch(err => {
        res.send("error :" + err)

    })

})


module.exports = users