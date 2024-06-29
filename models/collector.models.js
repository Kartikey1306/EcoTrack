


import mongoose from "mongoose"

const collectorSchema = new mongoose.Schema(
  {
    Employeename: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      reuiqerd: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber:{
      type: Number,
      required: true
    },
    destination:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    city:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
     
    Quantity:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
    
  },{timestamps:true}
)

export const Collector = mongoose.model("Collector", collectorSchema)
