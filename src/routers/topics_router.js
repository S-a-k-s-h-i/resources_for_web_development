const express=require("express")
const router=new express.Router();
const topic=require("../models/topics");

router.get('/api/resources/topics',async (req,res) => {
    try{
       const getTopic = await topic.find().sort({date:-1});
       res.status(201).send(getTopic);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/api/resources/topics/:id",async (req,res) => {
    try{
       const _id=req.params.id;
       const getTopic=await topic.findById(_id);
       res.send(getTopic)
    }catch(err){
        res.status(400).send(err);
    }
})

router.post("/api/resources/topics",(req,res) => {
    try{
       const addingTopic = new topic(req.body)
       console.log(req.body);
       addingTopic.save();
       res.send(addingTopic);
    }catch(err){
        res.status(400).send(err);
    }
})

router.patch("/api/resources/topics/:id",async (req,res) => {
    try{
       const _id=req.params.id;
       const getTopic=await topic.findByIdAndUpdate(_id,req.body);
       res.send(getTopic)
    }catch(err){
        res.status(400).send(err);
    }
})

router.delete("/api/resources/topics/:id",async (req,res) => {
    try{
       const getTopic=await topic.findByIdAndDelete(req.params.id);
       res.send(getTopic)
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports=router;