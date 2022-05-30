const mongoose = require('mongoose');
const Reporter = mongoose.model('Reporter', { 
    name:{
        type:String ,
        required : true ,
        trim : true
    },
    email :{
        type : String ,
        required : true ,
        trim : true ,
        lowercase: true ,
        unique : true ,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error ('Please enter email')  
            //    npm i validator to validatior email //
            
            }
    } ,
    age:{
        type : Number ,
        // required : true ,
        default : 26 ,

    } ,
    password :{
        type : String ,
        trim : true ,
        required : true ,
        minlength : 10 ,

    },
    numphone :{
        type : Number ,
        minlength : 10 ,

    }, 

})
module.exports = Reporter