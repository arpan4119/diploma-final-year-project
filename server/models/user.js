const { boolean, required, string } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true ,
        min : 6 ,
        max:15
    },

    email: {
        type: String ,
        required : true ,
        min : 6 ,
        max:20
    },
    password : {
        type: String ,
        required : true ,
        min : 8 ,
        max : 1024
    },
    emailToken : {
        type: String
    },
    isVerified : {
        type: Boolean,
        default: false
    },
    date :{
        type: Date ,
        default : Date.now
    }
    // active: {
    //     type:boolean ,
    //     default:false
    // },
    // admin :{
    //     type:boolean ,
    //     default:false
    // }
})

module.exports = mongoose.model('User',userSchema)