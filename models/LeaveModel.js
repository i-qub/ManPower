const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leaveSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    name: {
        type: String,
        trim: true
    },
    type:{
        type: String,
        trim: true
    },
    fromdate:{
        type: String,
        trim: true
    },
    todate:{
        type: String,
        trim: true
    },
    days:{
        type: String,
        trim: true
    },
    reason:{
        type: String,
        trim: true
    },
    applieddate:{
        type: String,
        trim: true
    },
    dept:{
        type: String,
        trim: true
    },
    subdept:{
        type: String,
        trim: true
    },
    location:{
        type: String,
        trim: true
    },
    status:{
        type: String,
        trim: true
    },
    contractor:{
        type: String,
        trim: true
    }
},{ timestamps: true });

module.exports = mongoose.model('leave', leaveSchema)