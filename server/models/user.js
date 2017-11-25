const mongoose = require('mongoose');
var User = mongoose.model('User',{
  text : {
    name: String,
    required: true,
    minlength:3,
    trim : true
  },
    age : {
      type : Number,
      default : 24
    }
  ,
    location :{
      type : String,
      default : 'Raebareli'
    }
});
module.exports = {User};
