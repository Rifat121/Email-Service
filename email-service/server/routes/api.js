const express = require('express')
const router = express.Router()
const User = require('../model/user.js')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const db = "mongodb+srv://rifat121:AEvHz0Do1GSc0Nx3@emailservice.wmzlyqr.mongodb.net/test"

mongoose.connect(db,err=>{
    if(err){
        console.error('Error!'+ err)
    }
    else
    {
        console.log("Connected to MongoDB")
    }
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token=== 'null')
        return res.status(401).send('Unauthorized request')

    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    res.userId = payload.subject
    next()
}

router.get('/',(req,res)=>{
    res.send('From Api route')
})

router.post('/signup',(req,res)=>{
    let userData = req.body
    let user = new User(userData) 
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }
        else
        {
            let payload = {subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})
router.post('/login',(req,res)=>{
    let userData = req.body

    User.findOne({email: userData.email},(error,user)=>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('Invlaid Email')
            }
            else
                if(user.password !== userData.password){
                    res.status(401).send('Invlaid Password')
                }
                else{
                    let payload = { subject: user._id}
                    let token = jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
        }
    
    })
})

router.get('/dashboard', verifyToken, (req,res)=>{
    let emails = [
        {
            "name":"ishat",
            "email":"ishat@yahoo.com",
            "topic":"abcd",
            "msg":"Hey,how is it going?",
            "date":"2022-11-29T18:25:12.4223"
        },
        {
            "name":"ishat",
            "email":"ishat@yahoo.com",
            "topic":"abcd",
            "msg":"Hey,how is it going?",
            "date":"2022-11-29T18:25:12.4223"
        },
        {
            "name":"ishat",
            "email":"ishat@yahoo.com",
            "topic":"abcd",
            "msg":"Hey,how is it going?",
            "date":"2022-11-29T18:25:12.4223"
        },
        {
            "name":"ishat",
            "email":"ishat@yahoo.com",
            "topic":"abcd",
            "msg":"Hey,how is it going?",
            "date":"2022-11-29T18:25:12.4223"
        },
        {
            "name":"ishat",
            "email":"ishat@yahoo.com",
            "topic":"abcd",
            "msg":"Hey,how is it going?",
            "date":"2022-11-29T18:25:12.4223"
        },
    ]
    res.json(emails)
})
// mongodb+srv://rifat121:<AEvHz0Do1GSc0Nx3>@emailservice.wmzlyqr.mongodb.net/test
module.exports = router