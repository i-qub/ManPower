const mongoose = require('mongoose')
const Schema = mongoose.Schema

const arpa450Schema = new Schema({
    token:{
        type: String,
        trim:true
    },
    cope_m_c_operator: {
        type: String,
        trim:true
    },
    cope_box_loading_op:{
        type: String,
        trim:true
    },
    drag_m_c_operator: {
        type: String,
        trim:true
    },
    drag_box_loading_op:{
        type: String,
        trim:true
    },
    drag_box_unloading_op: {
        type: String,
        trim:true
    },
    core_tranfer_fixture_op:{
        type: String,
        trim:true
    },
    core_tranfer_fixture_co_op: {
        type: String,
        trim:true
    },
    core_setting_operator:{
        type: String,
        trim:true
    },
    clamping_operator_1: {
        type: String,
        trim:true
    },
    clamping_operator_2:{
        type: String,
        trim:true
    },
    drag_mould_venting_op: {
        type:String,
        trim:true
    },
    venting_operator_1:{
        type: String,
        trim:true
    },
    venting_operator_2: {
        type:String,
        trim:true
    },
    box_closing_operator:{
        type: String,
        trim:true
    },
    pouring_crane_operator: {
        type:String,
        trim:true
    },
    pouring_operator: {
        type:String,
        trim:true
    },
    k_out_operator: {
        type:String,
        trim:true
    },
    casting_transfer_op: {
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
    }
},{ timestamps: true });

module.exports = mongoose.model('arpa_450', arpa450Schema)