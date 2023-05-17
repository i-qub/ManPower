const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shellCoreSchema = new Schema({
    token:{
        type: String,
        trim:true
    },
    shell_machine_no_01: {
        type: String,
        default: true
    },
    shell_machine_no_02: {
        type: String,
        default: true
    },
    shell_machine_no_03: {
        type: String,
        default: true
    },
    shell_machine_no_04: {
        type: String,
        default: true
    },
    shell_machine_no_05: {
        type: String,
        default: true
    },
    shell_machine_no_05_co_operator: {
        type: String,
        default: true
    },
    shell_machine_no_06: {
        type: String,
        default: true
    },
    shell_machine_no_07: {
        type: String,
        default: true
    },
    shell_machine_no_08: {
        type: String,
        default: true
    },
    shell_machine_no_09: {
        type: String,
        default: true
    },
    shell_machine_no_10: {
        type: String,
        default: true
    },
    shell_machine_no_12: {
        type: String,
        default: true
    },
    shell_machine_no_13: {
        type: String,
        default: true
    },
    shell_machine_no_14: {
        type: String,
        default: true
    },
    shell_machine_no_15: {
        type: String,
        default: true
    },
    shell_machine_no_16: {
        type: String,
        default: true
    },
    shell_machine_no_17: {
        type: String,
        default: true
    },
    shell_machine_no_19: {
        type: String,
        default: true
    },
    shell_machine_no_20: {
        type: String,
        default: true
    },
    shell_machine_no_21: {
        type: String,
        default: true
    },
    jd_head_assembly_01: {
        type: String,
        default: true
    },
    jd_head_assembly_02: {
        type: String,
        default: true
    },
    jd_head_assembly_co_operator: {
        type: String,
        default: true
    },
    same_head: {
        type: String,
        default: true
    },
    same_kf_head_01: {
        type: String,
        default: true
    },
    same_kf_head_co_operator_1: {
        type: String,
        default: true
    },
    same_kf_head_co_operator_2: {
        type: String,
        default: true
    },
    tata_4sp_block:{
        type:String,
        trim:true
    },
    core_oven_operator:{
        type:String,
        trim:true
    },
    core_oven_co_operator_1:{
        type:String,
        trim:true
    },
    core_oven_co_operator_2:{
        type:String,
        trim:true
    },
    core_oven_co_operator_3:{
        type:String,
        trim:true
    },
    inspection:{
        type:String,
        trim:true
    },
    inspection_co_operator:{
        type:String,
        trim:true
    },
    assembly_dipping:{
        type:String,
        trim:true
    },
    tool_change:{
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

module.exports = mongoose.model('shell_core', shellCoreSchema)