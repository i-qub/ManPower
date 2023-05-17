const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    token: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        trim: true
    },
    dobplace: {
        type: String,
        trim: true
    },
    age: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    maritalstatus: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    paddress: {
        type: String,
        trim: true
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
    contractor: {
        type: String,
        trim: true
    },
    mobile2: {
        type: String,
        trim: true
    },
    joindate: {
        type: String,
        trim: true
    },
    mobile1: {
        type: String,
        trim: true
    },
    enddate: {
        type: String,
        trim: true
    },
    subdept: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true
    },
    dept: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    verified: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    rejectcmt: {
        type: String,
        trim: true
    },
    aadhar: {
        type: String,
        trim: true
    },
    pan: {
        type: String,
        trim: true
    },
    esi: {
        type: String,
        trim: true
    },
    pf: {
        type: String,
        trim: true
    },
    medicalcheckup: {
        type: String,
        trim: true
    },
    id: {
        type: String,
        trim: true
    },
    education: {
        type: String,
        trim: true
    },
    ctc: {
        type: String,
        trim: true
    },
    primaryActivity: {
        type: String,
        trim: true
    },
    primarySkill: {
        type: String,
        default:"L0",
        trim: true
    },
    DragMachineOp: {
        type: String,
        default:"L0",
        trim: true
    },
    DragMachineOpAir: {
        type: String,
        default:"L0",
        trim: true
    },
    DragMachineCoOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CopeMachineOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CopeMachineCoOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CopeMachineOpAir: {
        type: String,
        default:"L0",
        trim: true
    },
    DragMouldPaintingOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CoreSettingOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CoreTranferFixtureOp: {
        type: String,
        default:"L0",
        trim: true
    },
    BoxClosingOp: {
        type: String,
        default:"L0",
        trim: true
    },
    VentingOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CopeBoxPreprationOp: {
        type: String,
        default:"L0",
        trim: true
    },
    ClampingOp: {
        type: String,
        default:"L0",
        trim: true
    },
    MoldBoxTransferOp: {
        type: String,
        default:"L0",
        trim: true
    },
    ClampAndPinRemovingOp: {
        type: String,
        default:"L0",
        trim: true
    },
    PouringCraneOp: {
        type: String,
        default:"L0",
        trim: true
    },
    PouringOp: {
        type: String,
        default:"L0",
        trim: true
    },
    KOutCraneOp: {
        type: String,
        default:"L0",
        trim: true
    },
    KOutCraneCoOp: {
        type: String,
        default:"L0",
        trim: true
    },
    KOutOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CastingTransferOp: {
        type: String,
        default:"L0",
        trim: true
    },
    EmptyBoxTrasferOp: {
        type: String,
        default:"L0",
        trim: true
    },
    SandPlantOp: {
        type: String,
        default:"L0",
        trim: true
    },
    SandPlantCoOp: {
        type: String,
        default:"L0",
        trim: true
    },
    NewSandAddOp: {
        type: String,
        default:"L0",
        trim: true
    },
    CompactibilityCheckingOp: {
        type: String,
        default:"L0",
        trim: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('users', userSchema)