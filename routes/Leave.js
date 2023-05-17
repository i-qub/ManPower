const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const leave = require('../models/LeaveModel')
const users = require('../models/UsersModel')
//Apply Leave
router.post('/applyLeave',async function (req, res) {
    var { token, type, from, to, days, reason, contractor } = req.body;
    var fromformat = dateFormat(from, "dd-mm-yyyy");
    from = fromformat;
    var toformat = dateFormat(to, "dd-mm-yyyy");
    to = toformat;
    //Applied Date
    const date = new Date();
    const applieddate = dateFormat(date, "dd-mm-yyyy");
    // pool.query(`INSERT INTO leave(token, name, contractor, type, fromdate, todate, days, reason, applieddate, dept, subdept, location)VALUES('${token}',
    //(SELECT name FROM users WHERE token = '${token}'),
    //'${contractor}','${type}','${from}','${to}','${days}','${reason}','${applieddate}',
    //(SELECT dept FROM users WHERE token = '${token}'),
    //(SELECT subdept FROM users WHERE token = '${token}'),
    //(SELECT location FROM users WHERE token = '${token}'))`, (error, result) => {
    //     if (error) { res.status(200).json(error); } if (result) { res.status(200).json('Inserted'); }
    // });
    let getName = await users.findOne({
        token:token
    }).select('name dept subdept location')
    var data = new leave({
        token:token,
        name:getName.name,
        contractor:contractor,
        type:type,
        fromdate:from,
        todate:to,
        days:days,
        reason:reason,
        applieddate:applieddate,
        dept:getName.dept,
        subdept:getName.subdept,
        location:getName.location
    })
   let saveData = await data.save()
   if (saveData) { res.status(200).json('Inserted'); }
});

//View Applied Leave to Employee
router.post("/leaveAppliedByEmp", async(req, res) => {
    const token = req.body.token;
    // pool.query("SELECT * FROM leave WHERE token = $1 ORDER BY fromdate DESC", [token], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await leave.find({
        token:token
    }).sort({fromdate:-1})
    res.status(200).json(results);
});

//View Applied Leave to Contractor
router.post("/leaveAppliedByContractor", async(req, res) => {
    const { contractor } = req.body;
    // pool.query("SELECT * FROM leave WHERE contractor = $1 ORDER BY fromdate DESC", [contractor], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await leave.find({
        contractor:contractor
    }).sort({fromdate:-1})
    res.status(200).json(results);
});

//View Applied Leave to Hod
router.post("/leaveAppliedByHod", async(req, res) => {
    const dept = req.body.dept;
    // pool.query("SELECT * FROM leave ORDER BY fromdate DESC", [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await leave.find({}).sort({fromdate:-1})
    res.status(200).json(results);
});

//View Leave Applied - All
router.get("/leaveAppliedAll", async(req, res) => {
    // pool.query("SELECT * FROM leave ORDER BY fromdate DESC", [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await leave.find({}).sort({fromdate:-1})
    res.status(200).json(results);
});

//Approve Leave
router.post("/approveLeave", async(req, res) => {
    const token = req.body.token;
    const applieddate = req.body.applieddate;
    const from = req.body.from;
    const to = req.body.to;
    const status = req.body.status;

    // pool.query(`UPDATE leave SET status = $1 WHERE token = $2 AND applieddate = $3 AND fromdate = $4 AND todate = $5`, [status, token, applieddate, from, to], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await leave.findOneAndUpdate({
        token:token,
        applieddate:applieddate,
        fromdate:from,
        todate:to
    }, {
        $set: {
            status: status
            }
    })
    res.status(200).json(results);
});

module.exports = router;