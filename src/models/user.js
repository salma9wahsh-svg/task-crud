const mongoose = require('mongoose')
const User = mongoose.model('user' , {
  username : {
    type : String,
    required : true,
    trim : true
  },
  age: {
    type : Number,
    default : 18
  },
    city: {
        type : String
    }

})









module.exports = User