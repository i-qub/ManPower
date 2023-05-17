const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fettlingSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    final_fettling_all_item: {
        type: String,
        trim: true
    },
    averaging:{
        type: String,
        trim: true
    },
    crane_operating:{
        type: String,
        trim: true
    },
    semi_final_fettling:{
        type:String,
        trim:true
    },
    I3: {
        type:String,
        trim:true
    },
    I2: {
        type:String,
        trim:true
    },
    I1: {
        type:String,
        trim:true
    },
    total: {
        type:String,
        trim:true
    },
},{ timestamps: true });

module.exports = mongoose.model('fettling', fettlingSchema)