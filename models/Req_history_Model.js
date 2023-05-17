const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqest_history_Schema = new Schema({
    shell_core:{
        type: String,
        trim:true
    },
    cold_box: {
        type: String,
        default: true
    },
    arpa_900: {
        type: String,
        default: true
    },
    arpa_450: {
        type: String,
        default: true
    },
    w_b_q_3: {
        type: String,
        default: true
    },
    hand_moulding: {
        type: String,
        default: true
    },
    melting: {
        type: String,
        default: true
    },
    fettling: {
        type: String,
        default: true
    },
    name: {
        type: String,
        default: true
    },
    updatedate: {
        type: String,
        default: true
    },
},{ timestamps: true });

module.exports = mongoose.model('req_history', reqest_history_Schema)