const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empSkillSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    cope_m_c_operator: {
        type: String,
        trim: true
    },
    cope_m_c_co_operator: {
        type: String,
        trim: true
    },
    drag_m_c_operator: {
        type: String,
        trim: true
    },
    drag_m_c_co_operator: {
        type: String,
        trim: true
    },
    empty_pallet_trasfer_op: {
        type: String,
        trim: true
    },
    drag_box_venting_op: {
        type: String,
        trim: true
    },
    drag_core_setting_op: {
        type: String,
        trim: true
    },
    cope_core_setting_op: {
        type: String,
        trim: true
    },
    venting_operator_1: {
        type: String,
        trim: true
    },
    venting_operator_2: {
        type: String,
        trim: true
    },
    venting_operator_3: {
        type: String,
        trim: true
    },
    box_closing_operator: {
        type: String,
        trim: true
    },
    box_closing_co_operator: {
        type: String,
        trim: true
    },
    clamping_operator: {
        type: String,
        trim: true
    },
    clamping_operator_1: {
        type: String,
        trim: true
    },
    mold_box_transfer_op: {
        type: String,
        trim: true
    },
    pouring_crane_operator: {
        type: String,
        trim: true
    },
    pouring_operator: {
        type: String,
        trim: true
    },
    k_out_operator: {
        type: String,
        trim: true
    },
    k_out_co_operator: {
        type: String,
        trim: true
    },
    sand_plant_operator: {
        type: String,
        trim: true
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

module.exports = mongoose.model('emp_skills', empSkillSchema)