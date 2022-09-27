const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

router.post("/userdetailss", async(req, res) => {
    try{
        const userdetailss = await User.create(req.body);
        return res.status(201).send(userdetailss);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.get("/userdetailss", async(req, res) => {
    try{
        const userdetails = await User.find().lean().exec();
        return res.status(201).send(userdetailss);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.patch("/userdetailss/:id", async(req, res)=>{
    try{
        const userdetailss = await User.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })
        return res.status(201).send(userdetailss);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/userdetailss/:id", async(req, res)=>{
    try{
        const userdetailss = await User.findByIdAndDelete(
            req.params.id
        )
        return res.status(201).send(userdetailss)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;