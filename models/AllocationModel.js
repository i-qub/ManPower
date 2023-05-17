const mongoose = require('mongoose')
const Schema = mongoose.Schema

const allocationSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    name: {
        type: String,
        trim:true
    },
    punchdate:{
        type: String,
        trim:true
    },
    punchin: {
        type: String,
        trim:true
    },
    dept:{
        type: String,
        trim:true
    },
    subdept: {
        type: String,
        trim:true
    },
    location:{
        type: String,
        trim:true
    },
    verified: {
        type: String,
        default:"Yes",
        trim:true
    },
    punchout:{
        type: String,
        trim:true
    },
    verifiedtime: {
        type: String,
        trim:true
    },
    shift:{
        type: String,
        trim:true
    },
    id: {
        type:Number,
        trim:true
    }
},{ timestamps: true });

module.exports = mongoose.model('allocation', allocationSchema)