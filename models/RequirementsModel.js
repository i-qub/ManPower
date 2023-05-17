const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requirementSchema = new Schema({
    dept:{
        type: String,
        trim:true
    },
    requirement: {
        type: String,
        default: true
    },
    subdept:{
        type:String
    },
    minskill : {
        type:String
    }
},{ timestamps: true });

module.exports = mongoose.model('requirements', requirementSchema)