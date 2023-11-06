const express = require('express')
const User = require('../model/userModel')


// registration usser
const createNewUser = async(req,res)=>{
    const{ email, firstname, matric, department }  = req.body

   //  check for empty
     if(email ==='' || firstname ==='' || matric === '' || department === ''){
        return res.send({msg: 'field cannot be empty'})
     }

    const exitingUser = await User.findOne({email: email})
    if(exitingUser){
     return res.json({msg: ' User alaready exit', exitingUser})
    }else{
       const createUser = await User.create({email, firstname, matric, department})
    res.status(201).json({msg: 'you have been rgister',createUser})
   }
   }

//  login stundent
const loginUser = async(req,res)=>{
   const{email, matric} =req.body

   // check for empty
   if(email ==='' || matric ==''){
      return res.status(404).json({msg: 'field cannot be empty'})
   }
   else{
      const myLogin = await User.findOne({email: email})
     if(!myLogin){
      return res.status(400).json({msg:'invalid email / matric'})
     }
     res.status(200).json({
      msg: 'You have succesfully login',
      email: myLogin.email,
      matric: myLogin.matric,
     })
   }
}
// check for update
const updateUser = async(req, res)=>{
   try{
      const {id} = req.params
      const editUser = await User.findOneAndUpdate({_id: id},req.body,{
       new: true,
       runValidators: true  
      }
      )
      res.status(200).json({msg: 'record succesfully updated', editUser})
   }
   catch(err){
      red.send(err)
   }
}

// post candidate

// const addCandidate = async(req, res)=>{
//    const {firstname, matric} = req.body
//    const fecthall =  await User.find()
//    res.status(200).json({msg: "successfully added",addCandidate})
// }

const addCandidate = async(req,res)=>{
   const{  firstname, department }  = req.body

  //  check for empty
    if( firstname ==='' || department === ''){
       return res.send({msg: 'field cannot be empty'})
    }

   const exitingUser = await User.findOne({firstname: firstname})

      const createUser = await addCandidate.create({ firstname,  department})
   res.status(201).json({msg: 'you have been rgister',addCandidate})
  }











 module.exports = {createNewUser, loginUser, updateUser,addCandidate}