const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coldBoxSchema = new Schema({
    token:{
        type: String,
        trim:true
    },

    cold_box_machineno_01:{
        type: String,
        trim:true
    },
    cold_box_machineno_01_co_operator:{
        type: String,
        trim:true
    },
    cold_box_machineno_02:{
        type: String,
        trim:true
    },
    cold_box_machineno_02_co_operator_1:{
        type: String,
        trim:true
    },
    cold_box_machineno_02_co_operator_2:{
        type: String,
        trim:true
    },
    cold_box_machineno_03:{
        type: String,
        trim:true
    },
    cold_box_machineno_03_co_operator:{
        type: String,
        trim:true
    },
    cold_box_machineno_04:{
        type: String,
        trim:true
    },
    cold_box_machineno_04_co_operator:{
        type: String,
        trim:true
    },
    cold_box_machineno_05:{
        type: String,
        trim:true
    },
    cold_box_machineno_05_co_operator_1:{
        type: String,
        trim:true
    },
    cold_box_machineno_05_co_operator_2:{
        type: String,
        trim:true
    },
    cold_box_machineno_06:{
        type: String,
        trim:true
    },
    cold_box_machineno_06_co_operator_1:{
        type: String,
        trim:true
    },
    cold_box_machineno_06_co_operator_2:{
        type: String,
        trim:true
    },
    cold_box_machineno_07:{
        type: String,
        trim:true
    },
    cold_box_machineno_07_co_operator_1:{
        type: String,
        trim:true
    },
    cold_box_machineno_07_co_operator_2:{
        type: String,
        trim:true
    },
    cold_box_machineno_08:{
        type: String,
        trim:true
    },
    cold_box_machineno_08_co_operator:{
        type: String,
        trim:true
    },
    cold_box_machineno_09:{
        type: String,
        trim:true
    },
    cold_box_machineno_10:{
        type: String,
        trim:true
    },
    cold_box_machineno_11:{
        type: String,
        trim:true
    },
    cold_box_machineno_11_co_operator:{
        type: String,
        trim:true
    },
    sand_feeding_1:{
        type: String,
        trim:true
    },
    sand_feeding_2:{
        type: String,
        trim:true
    },
    mixer_900:{
        type: String,
        trim:true
    },
    mixer_450:{
        type: String,
        trim:true
    },
    painting_skilled_operator:{
        type: String,
        trim:true
    },
    painting_operator_900_1:{
        type: String,
        trim:true
    },
    painting_operator_900_2:{
        type: String,
        trim:true
    },
    painting_operator_900_3:{
        type: String,
        trim:true
    },
    painting_skilled_operator_arpa_450:{
        type: String,
        trim:true
    },
    painting_operator_arpa_450:{
        type: String,
        trim:true
    },
    skilled_inspector_arpa_450:{
        type: String,
        trim:true
    },
    oven_skilled_operator:{
        type: String,
        trim:true
    },
    oven_co_operator:{
        type: String,
        trim:true
    },
    core_box_cleaning_vent_changing:{
        type: String,
        trim:true
    },
    inspection_arpa_900:{
        type: String,
        trim:true
    },
    inspection_co_operator_arpa_900:{
        type: String,
        trim:true
    },
    assembly_operator_450:{
        type: String,
        trim:true
    },
    assembly_450_co_operator:{
        type: String,
        trim:true
    },
    tool_change:{
        type: String,
        trim:true
    },
    venting_skill_operator:{
        type: String,
        trim:true
    },
    venting_skill_co_operator_1:{
        type: String,
        trim:true
    },
    venting_skill_co_operator_2:{
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

module.exports = mongoose.model('cold_box', coldBoxSchema)