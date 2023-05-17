const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meltingSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    panel_no_1_operator: {
        type: String,
        default: true
    },
    panel_no_1_co_operator: {
        type: String,
        default: true
    },
    panel_no_1_charge_collector: {
        type: String,
        default: true
    },
    panel_no_2_operator: {
        type: String,
        default: true
    },
    panel_no_2_co_operator: {
        type: String,
        default: true
    },
    panel_no_3_operator: {
        type: String,
        default: true
    },
    panel_no_3_co_operator: {
        type: String,
        default: true
    },
    spectro_coin_test_bar_sample: {
        type: String,
        default: true
    },
    crane_operator: {
        type: String,
        default: true
    },
    slag_collector_panel_1: {
        type: String,
        default: true
    },
    slag_collector_panel_2: {
        type: String,
        default: true
    },
    slag_collector_panel_3: {
        type: String,
        default: true
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
    }
},{ timestamps: true });

module.exports = mongoose.model('melting', meltingSchema)