
import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
  {
    Wastetype:{
      type: String,
      enum:["organic waste","hazardous waste", "solid waste", "liquid waste","recyclable waste"],
      required: true
    }
  },{timestamps:true}
)

export const Category = mongoose.model("Category", categorySchema)
