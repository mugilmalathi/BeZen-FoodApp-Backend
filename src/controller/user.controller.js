const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

router.post("/userdetailss", async(req, res) => {
    try{
        const userdetailss = await User.create(req.body);
        return res.status(201).send(userdetails);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.get("/userdetails", async(req, res) => {
    try{
        const userdetails = await User.find().lean().exec();
        return res.status(201).send(userdetails);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.patch("/userdetails/:id", async(req, res)=>{
    try{
        const userdetails = await User.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })
        return res.status(201).send(userdetails);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/userdetails/:id", async(req, res)=>{
    try{
        const userdetails = await User.findByIdAndDelete(
            req.params.id
        )
        return res.status(201).send(userdetails)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;