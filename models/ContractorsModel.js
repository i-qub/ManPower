const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contractorsSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    name: {
        type: String,
        trim: true
    },
    dob:{
        type: String,
        trim:true
    },
    dobplace: {
        type: String,
        trim: true
    },
    age:{
        type: String,
        trim:true
    },
    gender: {
        type: String,
        trim: true
    },
    maritalstatus:{
        type: String,
        trim:true
    },
    address: {
        type: String,
        trim: true
    },
    paddress:{
        type: String,
        trim:true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    zipcode: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    mobile1: {
        type: String,
        trim: true
    },
    mobile2: {
        type: String,
        trim: true
    },
    dept: {
        type: String,
        trim: true
    },
},{ timestamps: true });

module.exports = mongoose.model('contractors', contractorsSchema)