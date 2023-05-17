const mongoose = require('mongoose')
const Schema = mongoose.Schema

const arpa900Schema = new Schema({
    token:{
        type: String,
        trim:true
    },
    cope_m_c_operator: {
        type: String,
        trim:true
    },
    m_c_co_operator_air_1:{
        type: String,
        trim:true
    },
    m_c_co_operator_1: {
        type: String,
        trim:true
    },
    drag_m_c_operator: {
        type: String,
        trim:true
    },
    m_c_co_operator_air_2:{
        type: String,
        trim:true
    },
    m_c_co_operator_2: {
        type: String,
        trim:true
    },
    drag_mould_painting_op:{
        type:String,
        trim:true
    },
    core_setting_operator_1:{
        type:String,
        trim:true
    },
    core_setting_operator_2:{
        type:String,
        trim:true
    },
    core_tranfer_fixture_op:{
        type: String,
        trim:true
    },
    box_closing_operator:{
        type: String,
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
    core_box_prepration_op:{
        type:String,
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
    mold_box_transfer_op:{
        type:String,
        trim:true
    },
    clamp_pin_removing_op:{
        type:String,
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
    k_out_crane_operator: {
        type:String,
        trim:true
    },
    k_out_crane_co_operator:{
        type:String,
        trim:true
    },
    k_out_operator:{
        type:String,
        trim:true
    },
    casting_transfer_op:{
        type:String,
        trim:true
    },
    empty_box_trasfer_op:{
        type:String,
        trim:true
    },
    sand_plant_operator:{
        type:String,
        trim:true
    },
    sand_plant_co_operator:{
        type:String,
        trim:true
    },
    new_sand_add_operator:{
        type:String,
        trim:true
    },
    compactibility_checking_op:{
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

module.exports = mongoose.model('arpa_900', arpa900Schema)