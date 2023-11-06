const express = require('express')
const router = express.Router()
const User = require('../model/userModel')
const {createNewUser,loginUser, updateUser, addCandidate} = require('../controller/userController')



// route for post
router.post('/create', createNewUser )
router.post('/login',loginUser )
router.put('/update/:id', updateUser )
router.post('/fecth', addCandidate)





module.exports = router