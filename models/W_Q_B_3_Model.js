const mongoose = require('mongoose')
const Schema = mongoose.Schema

const w_b_q_3_Schema = new Schema({
    token:{
        type: String,
        trim:true
    },
    cope_m_c_operator: {
        type: String,
        default: true
    },
    cope_m_c_co_operator: {
        type: String,
        default: true
    },
    drag_m_c_operator: {
        type: String,
        default: true
    },
    drag_m_c_co_operator: {
        type: String,
        default: true
    },
    empty_pallet_trasfer_op: {
        type: String,
        default: true
    },
    drag_box_venting_op: {
        type: String,
        default: true
    },
    drag_core_setting_op: {
        type: String,
        default: true
    },
    cope_core_setting_op: {
        type: String,
        default: true
    },
    venting_operator_1: {
        type: String,
        default: true
    },
    venting_operator_2: {
        type: String,
        default: true
    },
    venting_operator_3: {
        type: String,
        default: true
    },
    box_closing_co_operator: {
        type: String,
        default: true
    },
    clamping_operator:{
        type: String,
        default: true
    },
    clamping_operator_1:{
        type: String,
        default: true
    },
    mold_box_transfer_op:{
        type: String,
        default: true
    },
    pouring_crane_operator:{
        type: String,
        default: true
    },
    pouring_operator:{
        type: String,
        default: true
    },
    k_out_operator:{
        type: String,
        default: true
    },
    k_out_co_operator:{
        type: String,
        default: true
    },
    sand_plant_operator:{
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

module.exports = mongoose.model('w_b_q_3', w_b_q_3_Schema)