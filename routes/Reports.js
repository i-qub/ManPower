const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const allocation = require('../models/AllocationModel')
const req_history = require('../models/Req_history_Model')
// Manpower Report
router.post("/manpowerReport", async(req, res) => {
    const { token, startDate, endDate } = req.body;
    const start = dateFormat(startDate, "dd-mm-yyyy");
    const end = dateFormat(endDate, "dd-mm-yyyy");
    // if (token === '') {
    //     pool.query(`SELECT * FROM allocation WHERE to_date(punchdate, 'DD/MM/YYYY') BETWEEN to_date('${start}', 'DD/MM/YYYY') and to_date('${end}', 'DD/MM/YYYY')`, [], (error, results) => {
    //         if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    //     });
    // } else {
    //     pool.query(`SELECT * FROM allocation WHERE token = '${token}' AND to_date(punchdate, 'DD/MM/YYYY') BETWEEN to_date('${start}', 'DD/MM/YYYY') and to_date('${end}', 'DD/MM/YYYY')`, [], (error, results) => {
    //         if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    //     });
    // }
    if(token === ''){
        let results = await allocation.find({
            to_date:{
                $gte:punchdate,
                $lt:start
            },
            to_date:end
        })
        if(results){
            res.status(200).json(results)
        }else{
            res.status(400).json("error");
        }
    }else{
        let results = await allocation.find({
            to_date:{
                $gte:punchdate,
                $lt:start
            },
            to_date:end,
            token:token
        })
        if(results){
            res.status(200).json(results)
        }else{
            res.status(400).json("error");
        }
        
    }
});

// Requirements Report
router.post("/requirementsReport", async(req, res) => {
    const { startDate, endDate } = req.body;
    const start = dateFormat(startDate, "dd-mm-yyyy");
    const end = dateFormat(endDate, "dd-mm-yyyy");
    // pool.query(`SELECT * FROM req_history WHERE to_date(updatedate, 'DD/MM/YYYY') BETWEEN to_date('${start}', 'DD/MM/YYYY') and to_date('${end}', 'DD/MM/YYYY')`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await req_history.find({
        to_date:{
            $gte:updatedate,
            $lt:start
        },
        to_date:end
    })
    if(results){
        res.status(200).json(results)
    }else{
        res.status(400).json("error");
    }
});

// Summary Report
router.post("/summaryReport", (req, res) => {
    const { month, year } = req.body;
    // console.log(month, year);
    // pool.query(`SELECT * FROM req_history WHERE to_date(updatedate, 'DD/MM/YYYY') BETWEEN to_date('${start}', 'DD/MM/YYYY') and to_date('${end}', 'DD/MM/YYYY')`, [], (error, results) => {
    //   if (error) { res.status(400).json(error); }
    //   res.status(200).json(results.rows);
    // });
});

module.exports = router;