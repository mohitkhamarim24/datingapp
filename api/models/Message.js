import mongoose from "mongoose"
import express from "express"
const messageSchema = new mongoose.Schema({

    sender:{
        type:mongoose.Schema.Types.ObjectId,

        ref:"User",
        required: true
    },

    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type: String,
        required: true
    },
},
{timestamps:true}
);

const Message = mongoose.model("message",messageSchema);

export default Message;

