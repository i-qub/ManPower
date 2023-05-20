const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const allocations = require('../models/AllocationModel')
const users = require('../models/UsersModel')
const punchingController = require('../controllers/punchingController')

router.post('/punchin',async (req, res,next)=> {
    const data = req.body;
    var token = data.RealTime.PunchLog.UserId;
    var LogTime = data.RealTime.PunchLog.LogTime;
    var tempLog = LogTime.split(" ");
    var today = dateFormat(tempLog[0], "dd-mm-yyyy");
    var tempTime = tempLog[1].split(":");
    var hour = tempTime[0];
    var time12 = (hour % 12) || 12;
    time12 = (time12 < 10) ? ("0" + time12) : time12;
    var am_pm = hour >= 12 ? "PM" : "AM";
    var time = time12 + ":" + tempTime[1] + ":" + tempTime[2] + " " + am_pm;
    var AuthToken = data.RealTime.AuthToken;

    if (hour >= '07' && hour <= '08') {getShift = "Shift I"; }
    else if (hour >= '15' && hour <= '16') {getShift = "Shift II"; }
    else if (hour >= '23' || hour === '00') {getShift = "Shift III"; }
    else { getShift = "Odd Shift"; }

    var newDate = new Date(LogTime);
    newDate.setDate(newDate.getDate() - 1);
    var nextday = dateFormat(newDate, "dd-mm-yyyy");
    if (AuthToken === "auaWchYPZWWTy6EdeuGQdrYoKsnALPkl") {
        if (hour === '00') {
            let data = await allocations.find({
                token:token,
                punchdate:nextday
            })
            if(data.length === 0){
                let getUserData = await users.findOne({
                    token:token
                })
                var savedata = new allocations({
                    token:token,
                    name:getUserData.name,
                    punchdate:nextday,
                    punchin:time,
                    shift:getShift,
                    primarySkill:getUserData.primarySkill,
                    primaryActivity:getUserData.primaryActivity,
                    DragMachineOp:getUserData.DragMachineOp,
                    DragMachineOpAir:getUserData.DragMachineOpAir,
                    DragMachineCoOp:getUserData.DragMachineCoOp,
                    CopeMachineOp:getUserData.CopeMachineOp,
                    CopeMachineCoOp:getUserData.CopeMachineCoOp,
                    CopeMachineOpAir:getUserData.CopeMachineOpAir,
                    DragMouldPaintingOp:getUserData.DragMouldPaintingOp,
                    CoreSettingOp:getUserData.CoreSettingOp,
                    CoreTranferFixtureOp:getUserData.CoreTranferFixtureOp,
                    BoxClosingOp:getUserData.BoxClosingOp,
                    VentingOp:getUserData.VentingOp,
                    CopeBoxPreprationOp:getUserData.CopeBoxPreprationOp,
                    ClampingOp:getUserData.ClampingOp,
                    MoldBoxTransferOp:getUserData.MoldBoxTransferOp,
                    ClampAndPinRemovingOp:getUserData.ClampAndPinRemovingOp,
                    PouringCraneOp:getUserData.PouringCraneOp,
                    PouringOp:getUserData.PouringOp,
                    KOutCraneOp:getUserData.KOutCraneOp,
                    KOutCraneCoOp:getUserData.KOutCraneCoOp,
                    KOutOp:getUserData.KOutOp,
                    CastingTransferOp:getUserData.CastingTransferOp,
                    EmptyBoxTrasferOp:getUserData.EmptyBoxTrasferOp,
                    SandPlantOp:getUserData.SandPlantOp,
                    SandPlantCoOp:getUserData.SandPlantCoOp,
                    NewSandAddOp:getUserData.NewSandAddOp,
                    CompactibilityCheckingOp:getUserData.CompactibilityCheckingOp,
                    dept:getUserData.dept,
                    subdept:getUserData.subdept,
                    location:getUserData.location
                })
               let SaveData = await savedata.save()
               if (SaveData) { res.status(200).json({ status: "done" }); }
            }else{
                let updateData = await allocations.findOneAndUpdate({token:token,punchdate:nextday}, {$set: {punchout: time}});
                if (updateData) { res.status(200).json({ status: "done" }); }
            }
        } else if (hour >= '07' && hour <= '08') {
            let getCount = await allocations.find({
                token:token,
                punchdate:nextday,
                shift : 'Shift III'
            }).countDocuments()
            if(getCount === 0){
                let getUserData = await users.findOne({
                    token:token
                })
                var savedata = new allocations({
                    token:token,
                    name:getUserData.name,
                    punchdate:nextday,
                    punchin:time,
                    shift:getShift,
                    primarySkill:getUserData.primarySkill,
                    primaryActivity:getUserData.primaryActivity,
                    DragMachineOp:getUserData.DragMachineOp,
                    DragMachineOpAir:getUserData.DragMachineOpAir,
                    DragMachineCoOp:getUserData.DragMachineCoOp,
                    CopeMachineOp:getUserData.CopeMachineOp,
                    CopeMachineCoOp:getUserData.CopeMachineCoOp,
                    CopeMachineOpAir:getUserData.CopeMachineOpAir,
                    DragMouldPaintingOp:getUserData.DragMouldPaintingOp,
                    CoreSettingOp:getUserData.CoreSettingOp,
                    CoreTranferFixtureOp:getUserData.CoreTranferFixtureOp,
                    BoxClosingOp:getUserData.BoxClosingOp,
                    VentingOp:getUserData.VentingOp,
                    CopeBoxPreprationOp:getUserData.CopeBoxPreprationOp,
                    ClampingOp:getUserData.ClampingOp,
                    MoldBoxTransferOp:getUserData.MoldBoxTransferOp,
                    ClampAndPinRemovingOp:getUserData.ClampAndPinRemovingOp,
                    PouringCraneOp:getUserData.PouringCraneOp,
                    PouringOp:getUserData.PouringOp,
                    KOutCraneOp:getUserData.KOutCraneOp,
                    KOutCraneCoOp:getUserData.KOutCraneCoOp,
                    KOutOp:getUserData.KOutOp,
                    CastingTransferOp:getUserData.CastingTransferOp,
                    EmptyBoxTrasferOp:getUserData.EmptyBoxTrasferOp,
                    SandPlantOp:getUserData.SandPlantOp,
                    SandPlantCoOp:getUserData.SandPlantCoOp,
                    NewSandAddOp:getUserData.NewSandAddOp,
                    CompactibilityCheckingOp:getUserData.CompactibilityCheckingOp,
                    dept:getUserData.dept,
                    subdept:getUserData.subdept,
                    location:getUserData.location
                })
               let SaveData = await savedata.save()
               if (SaveData) { res.status(200).json({ status: "done" }); }
            }else{
                let updateData = await allocations.findOneAndUpdate({token:token,punchdate:nextday}, {$set: {punchout: time}});
                if (updateData) { res.status(200).json({ status: "done" }); }
            }
        } else {
            let getData = await allocations.find({
                token:token,
                punchdate:today
            })
            if(getData.length === 0){
                let getUserData = await users.findOne({
                    token:token
                })
                var savedata = new allocations({
                    token:token,
                    name:getUserData.name,
                    punchdate:today,
                    punchin:time,
                    shift:getShift,
                    primarySkill:getUserData.primarySkill,
                    primaryActivity:getUserData.primaryActivity,
                    DragMachineOp:getUserData.DragMachineOp,
                    DragMachineOpAir:getUserData.DragMachineOpAir,
                    DragMachineCoOp:getUserData.DragMachineCoOp,
                    CopeMachineOp:getUserData.CopeMachineOp,
                    CopeMachineCoOp:getUserData.CopeMachineCoOp,
                    CopeMachineOpAir:getUserData.CopeMachineOpAir,
                    DragMouldPaintingOp:getUserData.DragMouldPaintingOp,
                    CoreSettingOp:getUserData.CoreSettingOp,
                    CoreTranferFixtureOp:getUserData.CoreTranferFixtureOp,
                    BoxClosingOp:getUserData.BoxClosingOp,
                    VentingOp:getUserData.VentingOp,
                    CopeBoxPreprationOp:getUserData.CopeBoxPreprationOp,
                    ClampingOp:getUserData.ClampingOp,
                    MoldBoxTransferOp:getUserData.MoldBoxTransferOp,
                    ClampAndPinRemovingOp:getUserData.ClampAndPinRemovingOp,
                    PouringCraneOp:getUserData.PouringCraneOp,
                    PouringOp:getUserData.PouringOp,
                    KOutCraneOp:getUserData.KOutCraneOp,
                    KOutCraneCoOp:getUserData.KOutCraneCoOp,
                    KOutOp:getUserData.KOutOp,
                    CastingTransferOp:getUserData.CastingTransferOp,
                    EmptyBoxTrasferOp:getUserData.EmptyBoxTrasferOp,
                    SandPlantOp:getUserData.SandPlantOp,
                    SandPlantCoOp:getUserData.SandPlantCoOp,
                    NewSandAddOp:getUserData.NewSandAddOp,
                    CompactibilityCheckingOp:getUserData.CompactibilityCheckingOp,
                    dept:getUserData.dept,
                    subdept:getUserData.subdept,
                    location:getUserData.location
                })
               let SaveData = await savedata.save()
               if (SaveData) { res.status(200).json({ status: "done" }); }
            }else{
                let updateData = await allocations.findOneAndUpdate({token:token,punchdate:today}, {$set: {punchout: time}});
                if (updateData) { res.status(200).json({ status: "done" }); }
            }
        }
    } else {
        res.status(200).json("AuthToken Mismatched...");
    }
});

router.get("/time", (req, res) => {
    // var date = new Date();
    // date.setDate(date.getDate() + 1);
    // var today = dateFormat(date, "dd-mm-yyyy");
    // console.log(today);
    // pool.query(`SELECT * FROM allocation WHERE shift = 'Shift I'`, [], (error, results) => {
    //   if (results.rows.length === 0) { res.status(200).json(''); }
    //   else { console.log(results.rows); res.status(200).json(results.rows); }
    // });
    var date = new Date();
    var time = date.toLocaleTimeString("en-US", { timeZone: 'Asia/Kolkata' });
    console.log(time);
});

// router.get("/timer", (req, res) => {
//     const job = nodeCron.schedule("* * * * * *", () => {
//         console.log(new Date().toLocaleString());
//     });
// });

router.get("/punchout", (req, res) => {
    var start = '23:52:48 PM';
    var end = '07:00:48 AM';

    start = start.split(":");
    end = end.split(":");

    var sh = (start[0] % 12) || 12;
    var sm = start[1];
    var eh = (end[0] % 12) || 12;
    var em = end[1];

    console.log(sh);
    console.log(eh);

    if (sh >= 15) {
        var diff = eh - sh;
        console.log(diff);
    } else {
        var diff = eh - sh;
        console.log(diff);
    }

    // var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    // var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    // var diff = endDate.getTime() - startDate.getTime();
    // var hours = Math.floor(diff / 1000 / 60 / 60);
    // diff -= hours * 1000 * 60 * 60;
    // var minutes = Math.floor(diff / 1000 / 60);
    // var workhours = (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;

    // if (workhours >= '07:00') {
    //   console.log('P');
    // } else if (workhours >= '03:00' && workhours <= '05:00') {
    //   console.log('HD');
    // } else {
    //   console.log('A');
    // }

    // var dt = new Date();
    // var hours = dt.getHours();
    // hours = (hours % 12) || 12;
    // console.log(hours);
});

module.exports = router;
