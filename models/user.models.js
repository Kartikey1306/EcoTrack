import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    avatar:{
        type: String, //cloudinary url use karenge 
        required: true,
     },
    username: {
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
    costOfTranspotation:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"company"
    },
    Quantity:{
      type: Number,
      required: true
    }
  },{timestamps:true}
)

export const User = mongoose.model("User", userSchema)
