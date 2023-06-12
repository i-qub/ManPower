const mongoose = require('mongoose')
const Schema = mongoose.Schema

const allocationSchema = new Schema({
    token: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    punchdate: {
        type: String,
        trim: true
    },
    punchin: {
        type: String,
        trim: true
    },
    dept: {
        type: String,
        trim: true
    },
    subdept: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    verified: {
        type: String,
        default: "NO",
        trim: true
    },
    punchout: {
        type: String,
        trim: true
    },
    verifiedtime: {
        type: String,
        trim: true
    },
    shift: {
        type: String,
        trim: true
    },
    mobile1: {
        type: String,
        trim: true
    },
    id: {
        type: Number,
        trim: true
    },
    primaryActivity: {
        type: String,
        trim: true
    },
    primarySkill: {
        type: String,
        default: "L0",
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

module.exports = mongoose.model('allocation', allocationSchema)