const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require:[true, 'enter email']
    },
    firstname:{
        type: String,
        require:[true, 'enter firstname']
    },
    matric:{
        type: String,
        require:[true, 'enter matric']
        
    },
    department:{
        type: String,
        require:[true, 'enter  department']
    },
},
{
    timestamps:true,
}

)
const User = mongoose.model('user', userSchema)
module.exports = User