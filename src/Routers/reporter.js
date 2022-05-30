const express = require('express')
const router = express.Router()
const Reporter = require('../models/reporter')
router.post('/reborter', (req,res)=>{
    console.log(req.body)
    const Reporter = new Reporter(req.body)
    Reporter.save().then(()=>{
        res.send(Reporter)
    }) .catch((e)=>{
        res.send(e)
    })
    

})
// ///////////////////get reporter ////////////////////////////////////

router.get('/reporter',(req,res)=>{
    User.find({}).then((users)=>{
        res.status(200).send(users)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})
,
// /////////////////////////////////////////update and patch///////////////////////

router.patch('/users/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        if(!user){
            return res.status(404).send('No user is found')
        }
        res.status(200).send(user)
    }
    catch(e){
        res.status(400).send(e.message)
    }
}) ,

router.delete('/reporter/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send('Not found')
        }
        res.status(200).send(user)
    }
    catch(e){
        res.status(500).send(e.message)
    }
     
}) 
// ////////////////////////////////////////signup//////////////////////////////

router.post('/signup',async (req,res)=>{
    try{
        const user = new User(req.body) 
        const token = await user.generateToken()
        await user.save()
        res.status(200).send({user,token})
    }
    catch(e){
        res.status(400).send(e)
    }
})
// ////////////////////////////////password hash///////////////
router.patch('/reporter/:id',async(req,res)=>{
    try{
        const updates = Object.keys(req.body) // ['name','password']
        console.log(updates)
       const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).send('No user is found')
        }
        updates.forEach((el)=> user[el]=req.body[el])
        await user.save()
       res.status(200).send(user)
   }
   catch(e){
       res.status(400).send(e.message)
   }
})



module.exports = router