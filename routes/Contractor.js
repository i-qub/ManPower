const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const users = require('../models/UsersModel')
const deactivedated = require('../models/DeactivatedModel')
//Register Contractor
router.post("/addContractor", async(req, res) => {
    var { name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor } = req.body;

    var joindateformat = dateFormat(joindate, "dd-mm-yyyy");
    joindate = joindateformat;
    // pool.query({
    //     text: 'INSERT INTO users(name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, verified)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)',
    //     values: [name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, 'contractor', 'YES']
    // })
    var data = new users({...req.body,joindate:joindate})
    let saveData = await data.save()
    if(saveData){
        res.status(200).json('success')
    }
});


//View Contractor
router.get("/viewContractor", async(req, res) => {
    // pool.query("SELECT * FROM users WHERE role = 'contractor' AND verified = 'YES'", [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        role : 'contractor',
        verified:'YES'
    })
    res.status(200).json(results)
});

//Deactivate Contractor
router.post("/deactivateCon", async(req, res) => {
    const token = req.body.token;
    // pool.query(`SELECT * FROM users WHERE token = $1`, [token], (error, results) => {
    //     if (error) { res.status(400).json(error); }
    //     console.log("38",results)
    //     if (results) {
    //         //Deactivated Date
    //         const date = new Date();
    //         const deactivedate = dateFormat(date, "dd-mm-yyyy");
    //         pool.query({
    //             text: 'INSERT INTO deactivated(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, contractor, mobile2, joindate, mobile1, enddate, subdept, password, role, dept, location, verified, type, deactivedate)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)',
    //             values: [results.rows[0].token, results.rows[0].name, results.rows[0].dob, results.rows[0].dobplace, results.rows[0].age, results.rows[0].gender, results.rows[0].maritalstatus, results.rows[0].address, results.rows[0].paddress, results.rows[0].city, results.rows[0].state, results.rows[0].zipcode, results.rows[0].country, results.rows[0].email, results.rows[0].contractor, results.rows[0].mobile2, results.rows[0].joindate, results.rows[0].mobile1, results.rows[0].enddate, results.rows[0].subdept, results.rows[0].password, results.rows[0].role, results.rows[0].dept, results.rows[0].location, results.rows[0].verified, results.rows[0].type, deactivedate]
    //         });
    //         pool.query("DELETE FROM users WHERE token = $1", [results.rows[0].token])
    //     }
    // });
    let results = await users.find({
        token:token
    })
    if (results) {
    //         //Deactivated Date
             const date = new Date();
             const deactivedate = dateFormat(date, "dd-mm-yyyy");

    var data = new deactivedated({...req.body,deactivedate:deactivedate})
    await data.save()
    await deactivedated.findOneAndRemove({token:results[0].token})
         }
});

module.exports = router;