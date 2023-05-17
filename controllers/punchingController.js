const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const allocations = require('../models/AllocationModel')
const users = require('../models/UsersModel')


exports.punching = async (req, res,next)=> {
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
                }).select('name dept subdept location')
                var savedata = new allocations({
                    token:token,
                    name:getUserData.name,
                    punchdate:nextday,
                    punchin:time,
                    shift:getShift,
                    primaryActivity:primaryActivity,
                    primarySkill:primarySkill,
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
                }).select('name dept subdept location')
                var savedata = new allocations({
                    token:token,
                    name:getUserData.name,
                    punchdate:nextday,
                    punchin:time,
                    shift:getShift,
                    primaryActivity:primaryActivity,
                    primarySkill:primarySkill,
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
                }).select('name dept subdept location')
                var savedata = new allocations({
                    token:token,
                    name:getUserData.name,
                    punchdate:today,
                    punchin:time,
                    shift:getShift,
                    primaryActivity:primaryActivity,
                    primarySkill:primarySkill,
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
}