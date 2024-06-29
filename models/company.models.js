
import mongoose from "mongoose"

const companySchema = new mongoose.Schema(
  {
    Employeename: {
      type: String,
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
    address:{
      type: String,
      required: true
    },
    city:{
      type: String,
      required: true
    },
    
    Quantity:{
      type: Number,
      required: true
    }
  },{timestamps:true}
)

export const Company = mongoose.model("Company", companySchema)
