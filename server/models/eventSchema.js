const mongoose=require('mongoose');


const eventSchema= new mongoose.Schema ({
    owner:{
      type: mongoose.Types.ObjectId,
      ref:"user",
    },
    title:{
    type : String,
    required: true, 
    },
    date :{
        type: String,
        required: true,
    },
    img:{
        type :String,
        required: true
    },
    description:{
      type :String,
      required: true
    },
    number:{
        type :Number,
        required: true
      },
      
});

module.exports= mongoose.model("post",eventSchema);