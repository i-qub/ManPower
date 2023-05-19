const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const users = require('../models/UsersModel')
const deactivated = require('../models/DeactivatedModel')
const arpa_900 = require('../models/Arpa_900_Model')
const arpa_450 = require('../models/Arpa_450_Model')
const shell_core = require('../models/Shell_Core_Model')
const cold_box = require('../models/Cold_Box_Model')
const w_b_q_3 = require('../models/W_Q_B_3_Model')
const fettling = require('../models/FettlingModel')
const melting = require('../models/MeltingModel')
// Register Employee
router.post("/addEmployee", async(req, res) => {
    var { token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, aadhar, pan, esi, pf, medicalcheckup, education, ctc } = req.body;
  
    var dobformat = dateFormat(dob, "dd-mm-yyyy");
    dob = dobformat;
    if (type === 'CL') {
      var date = new Date(joindate);
      date.setMonth(date.getMonth() + 6);
      var enddate = dateFormat(date, "dd-mm-yyyy");
      var joindateformat = dateFormat(joindate, "dd-mm-yyyy");
      joindate = joindateformat;
    //   pool.query({
    //     text: 'INSERT INTO users(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)',
    //     values: [token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc]
    //   })
      var data = new users({...req.body,joindate:joindate,enddate:enddate})
      await data.save()
    } else if (type === 'IT') {
      var date = new Date(joindate);
      date.setMonth(date.getMonth() + 36);
      var enddate = dateFormat(date, "dd-mm-yyyy");
      var joindateformat = dateFormat(joindate, "dd-mm-yyyy");
      joindate = joindateformat;
    //   pool.query({
    //     text: 'INSERT INTO users(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)',
    //     values: [token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc]
    //   })
    var data = new users({...req.body,joindate:joindate,enddate:enddate})
    await data.save()
    } else if (type === 'Permanent') {
      const enddate = "Permanent";
      var joindateformat = dateFormat(joindate, "dd-mm-yyyy");
      joindate = joindateformat;
    //   pool.query({
    //     text: 'INSERT INTO users(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)',
    //     values: [token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc]
    //   })
    var data = new users({...req.body,joindate:joindate,enddate:enddate})
    await data.save()
    } else if (type === 'Piece Rate') {
      const enddate = "Piece Rate";
      var joindateformat = dateFormat(joindate, "dd-mm-yyyy");
      joindate = joindateformat;
    //   pool.query({
    //     text: 'INSERT INTO users(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)',
    //     values: [token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, type, enddate, aadhar, pan, esi, pf, medicalcheckup, education, ctc]
    //   })
    var data = new users({...req.body,joindate:joindate,enddate:enddate})
    await data.save()
    } else {
      var joindateformat = dateFormat(joindate, "dd-mm-yyyy");
      joindate = joindateformat;
    //   pool.query({
    //     text: 'INSERT INTO users(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, verified, aadhar, pan, esi, pf, medicalcheckup, education, ctc)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28)',
    //     values: [token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, 'YES', aadhar, pan, esi, pf, medicalcheckup, education, ctc]
    //   })
    var data = new users({...req.body,joindate:joindate,enddate:enddate})
    await data.save()
    }
  });


// View Contractor Employee
router.post("/viewContractorEmployee", async(req, res) => {
    const contractor = req.body.contractor;
    // pool.query(`SELECT * FROM users WHERE contractor = $1 AND verified = 'YES' AND role = 'employee'`, [contractor], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        contractor:contractor,
        verified : 'YES',
        role : 'employee'
    })
     res.status(200).json(results);
});

// View All Employee
router.get("/viewAllEmployee", async(req, res) => {
    // pool.query("SELECT * FROM users WHERE verified = 'YES' AND role = 'employee' ", [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        verified:'YES',
        role:'employee'
    })
    res.status(200).json(results)
});

// View Pending Verification for Contractor
router.post("/viewPendingVerify", async(req, res) => {
    const contractor = req.body.contractor;
    const role = req.body.role;
    // pool.query(`SELECT * FROM users WHERE contractor = $1 AND role = $2 AND Verified = 'NO'`, [contractor, role], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        contractor:contractor,
        verified : 'NO',
        role : role
    })
    res.status(200).json(results)
});

// View All Pending Verification
router.get("/viewAllPendingVerify", async(req, res) => {
    // pool.query(`SELECT * FROM users WHERE Verified = 'NO'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        verified : 'NO'
    })
    res.status(200).json(results)
});

// View Pending Verification Employee Details
router.post("/viewDetails", async(req, res) => {
    const token = req.body.token;
    // pool.query(`SELECT * FROM users WHERE token = $1`, [token], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        token:token
    })
    res.status(200).json(results)
});

// Verify Employee
router.post("/verifyEmployee", async(req, res) => {
    const { token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, aadhar, pan, esi, pf, medicalcheckup, education, ctc } = req.body;
    // pool.query(`UPDATE users SET verified = 'Pending', name = $1, dob = $2, dobplace = $3, age = $4, gender = $5, maritalstatus = $6, address = $7, paddress = $8, city = $9, state = $10, zipcode = $11, country = $12, email = $13, mobile1 = $14, mobile2 = $15, joindate = $16, dept = $17, contractor = $18, role = $19, aadhar = $20, pan = $21, esi = $22, pf = $23, medicalcheckup = $24, education = $25, ctc = $26 WHERE token = $27`,
    //     [name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, mobile1, mobile2, joindate, dept, contractor, role, aadhar, pan, esi, pf, medicalcheckup, token, education, ctc],
    //     (error, results) => { if (error) { res.status(400).json(error); } res.status(200).json(results.rows); });
    let results = await users.findOneAndUpdate({token:token}, {$set: 
        {
            verified:'Pending',
            name:name,
            dob:dob,
            dobplace:dobplace,
            age:age,
            gender:gender,
            maritalstatus:maritalstatus,
            address:address,
            paddress:paddress,
            city:city,
            state:state,
            zipcode:zipcode,
            country:country,
            email:email,
            mobile1:mobile1, 
            mobile2:mobile2, 
            joindate:joindate, 
            dept:dept,
            contractor:contractor, 
            role:role, 
            aadhar:aadhar, 
            pan:pan, 
            esi:esi, 
            pf:pf, 
            medicalcheckup:medicalcheckup, 
            education:education, 
            ctc:ctc
        }
    })
    if(results){
     res.status(200).json(results)
    }else{
     res.status(400).json("error")
    }
});

// Reject Verification
router.post("/rejectVerification", async(req, res) => {
    const token = req.body.token;
    const rejectcmt = req.body.rejectcmt;
    // pool.query(`UPDATE users SET verified = 'Rejected', rejectcmt = $1 WHERE token = $2`, [rejectcmt, token], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json("Rejected");
    // });
   let updateData = await users.findOneAndUpdate({token:token}, {$set: {verified:'Rejected',rejectcmt:rejectcmt}})
   if(updateData){
    res.status(200).json("Rejected")
   }else{
    res.status(400).json("error")
   }
});

// View Rejected Verification for Contractor
router.post("/rejectedEmpByContractor", async(req, res) => {
    const contractor = req.body.contractor;
    // pool.query(`SELECT * FROM users WHERE contractor = $1 AND Verified = 'Rejected'`, [contractor], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        contractor:contractor,
        verified : 'Rejected'
    })
    res.status(200).json(results)
});

// View All Rejected Verification
router.get("/rejectedAllEmp", async(req, res) => {
    // pool.query(`SELECT * FROM users WHERE Verified = 'Rejected'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        verified : 'Rejected'
    })
    res.status(200).json(results)
});

// Deactivate Employee
router.post("/deactivateEmp", async(req, res) => {
    const { token, deactivationDate } = req.body;
    // pool.query(`SELECT * FROM users WHERE token = $1`, [token], (error, results) => {
    //     if (error) { res.status(400).json(error); }
    //     if (results) {
    //         //Deactivated Date
             const deactivedate = dateFormat(deactivationDate, "dd-mm-yyyy");
    //         pool.query({
    //             text: 'INSERT INTO deactivated(token, name, dob, dobplace, age, gender, maritalstatus, address, paddress, city, state, zipcode, country, email, contractor, mobile2, joindate, mobile1, enddate, subdept, password, role, dept, location, verified, type, deactivedate, aadhar, pan, esi, pf, medicalcheckup, education, ctc)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34)',
    //             values: [results.rows[0].token, results.rows[0].name, results.rows[0].dob, results.rows[0].dobplace, results.rows[0].age, results.rows[0].gender, results.rows[0].maritalstatus, results.rows[0].address, results.rows[0].paddress, results.rows[0].city, results.rows[0].state, results.rows[0].zipcode, results.rows[0].country, results.rows[0].email, results.rows[0].contractor, results.rows[0].mobile2, results.rows[0].joindate, results.rows[0].mobile1, results.rows[0].enddate, results.rows[0].subdept, results.rows[0].password, results.rows[0].role, results.rows[0].dept, results.rows[0].location, results.rows[0].verified, results.rows[0].type, deactivedate, results.rows[0].aadhar, results.rows[0].pan, results.rows[0].esi, results.rows[0].pf, results.rows[0].medicalcheckup, results.rows[0].education, results.rows[0].ctc]
    //         });
    //         pool.query("DELETE FROM users WHERE token = $1", [results.rows[0].token])
    //     }
    // });
    let data = await users.findOne({
        token:token
    })
    if(data){
        var savedata = new users({
            token:data.token,
            name:data.name,
            dob:data.dob,
            dobplace:data.dobplace,
            age:data.age,
            gender:data.gender,
            maritalstatus:data.maritalstatus, 
            address:data.address, 
            paddress:data.paddress, 
            city:data.city, 
            state:data.state, 
            zipcode:data.zipcode, 
            country:data.country, 
            email:data.email, 
            contractor:data.contractor, 
            mobile2:data.mobile2, 
            joindate:data.joindate, 
            mobile1:data.mobile1, 
            enddate:data.enddate, 
            subdept:data.subdept, 
            password:data.password, 
            role:data.role, 
            dept:data.dept, 
            location:data.location, 
            verified:data.verified, 
            type:data.type, 
            deactivedate:deactivedate, 
            aadhar:data.aadhar, 
            pan:data.pan, 
            esi:data.esi, 
            pf:data.pf, 
            medicalcheckup:data.medicalcheckup, 
            education:data.education, 
            ctc:data.ctc
        })
        await savedata.save()
        await users.findOneAndRemove({token:data.token})
    }
});

// View Deactivated Employee By Contractor
router.post("/deactivatedEmpByContractor", async(req, res) => {
    const { contractor } = req.body;
    // pool.query("SELECT * FROM deactivated WHERE contractor = $1", [contractor], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await deactivated.find({
        contractor:contractor
    })
    res.status(200).json(results)
});

// View All Deactivated Employee
router.get("/deactivatedAllEmp", async(req, res) => {
    // pool.query("SELECT * FROM deactivated WHERE role = 'employee'", [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await deactivated.find({
        role : 'employee'
    })
    res.status(200).json(results)
});

//View Pending Location Allocation
router.post("/allocation", async(req, res) => {
    const dept = req.body.dept;
    // pool.query("SELECT * FROM users WHERE verified = 'Pending' AND dept = $1", [dept], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        verified :'Pending',
        dept : dept
    })
    res.status(200).json(results)
});

// View Pending Location Allocation by Contractor
router.post("/pendingAllocation", async(req, res) => {
    const contractor = req.body.contractor;
    // pool.query("SELECT * FROM users WHERE verified = 'Pending' AND dept != 'HR' AND contractor = $1", [contractor], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        verified :'Pending',
        dept: { $ne: 'HR' },
        contractor : contractor
    })
    res.status(200).json(results)
});

// View Work Location
router.post("/getLocationDetails", async(req, res) => {
    const token = req.body.token;
    // pool.query("SELECT * FROM users WHERE token = $1", [token], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        token :token
    })
    res.status(200).json(results)
});

// Location Allocation
router.post("/allocateLocation", async(req, res) => {
    const { token, dept, location } = req.body;
    var subdept = req.body.subdept;
    // pool.query("UPDATE users SET dept = $1, subdept = $2, location = $3, verified = 'YES' WHERE token = $4", [dept, subdept, location, token], (error, results) => {
    //     if (error) { res.status(400).json(error); }
    //     if (results) {
    //         //Insert Skill Data
    //         subdept = subdept.replace(/\s+/g, '_');
    //         pool.query(`INSERT INTO ${subdept}(token)VALUES(${token})`);
    //     }
    // });
    let updateData = await users.findOneAndUpdate({token:token}, {$set: {dept:dept,subdept:subdept,location:location,verified:'YES'}})
    if(updateData){
     res.status(200).json("Rejected")
    }else{
     res.status(400).json("error")
    }
});

//Change Location
router.post("/changeLocation", (req, res) => {
    const { token, dept, location } = req.body;
    var { subdept } = req.body;
    const date = new Date();
    const today = dateFormat(date, "dd-mm-yyyy");
    pool.query("UPDATE users SET dept = $1, subdept = $2, location = $3, verified = 'YES' WHERE token = $4", [dept, subdept, location, token], (error, results) => {
        if (error) { res.status(400).json(error); }
        if (results) {
            pool.query(`UPDATE allocation SET dept = $1, subdept = $2, location = $3 WHERE token = $4 AND punchdate = $5`, [dept, subdept, location, token, today], (error, results) => {
                if (error) { res.status(400).json(error); }
                //Insert Skill Data
                else if (results) {
                    subdept = subdept.replace(/\s+/g, '_');
                    pool.query(`INSERT INTO ${subdept} VALUES (${token}) ON CONFLICT (token) DO NOTHING`, (error, result) => {
                        if (result) { res.status(200).json("Changed"); }
                    });
                }
            });
        };
    });
});

// View Contractor wise Leaving Employees of this month
router.post("/leavingListOfContarctor", async(req, res) => {
    const contractor = req.body.contractor;
    const date = new Date();
    const startDate = dateFormat(date, "dd-mm-yyyy");
    const enddate = date.setDate(date.getDate() + 30);
    const today = dateFormat(date, "dd-mm-yyyy");

    // pool.query(`SELECT * FROM users WHERE contractor = '${contractor}' AND enddate != 'Permanent' AND enddate != 'Piece Rate' AND to_date(enddate, 'DD/MM/YYYY') BETWEEN to_date('${startDate}', 'DD/MM/YYYY') and to_date('${today}', 'DD/MM/YYYY')`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        contractor:contractor,
        enddate:{$nin : ["Permanent", "Piece Rate"]},
        to_date:
        {
            "$lte": enddate,
            "$gte": startDate
        },
        to_date:today
    })
    if(results){
        res.status(200).json(results)
    }else{
        res.status(400).json(error)
    }
});

// View All Leaving Employees of this month
router.get("/leavingListOfAll", async(req, res) => {
    const date = new Date();
    const startDate = dateFormat(date, "dd-mm-yyyy");
    date.setDate(date.getDate() + 30);
    const today = dateFormat(date, "dd-mm-yyyy");

    // pool.query(`SELECT * FROM users WHERE enddate != 'Permanent' AND enddate != 'Piece Rate' AND to_date(enddate, 'DD/MM/YYYY') BETWEEN to_date('${startDate}', 'DD/MM/YYYY') and to_date('${today}', 'DD/MM/YYYY')`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        contractor:contractor,
        enddate:{$nin : ["Permanent", "Piece Rate"]},
        to_date:
        {
            "$lte": enddate,
            "$gte": startDate
        },
        to_date:today
    })
    if(results){
        res.status(200).json(results)
    }else{
        res.status(400).json(error)
    }
});

// View Skill Data
router.post("/viewSkillDetails", async(req, res) => {
    const token = req.body.token;
    var subdept = req.body.subdept;
    // if (subdept !== 'Hand Moulding') {
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`SELECT * FROM ${subdept} WHERE token = '${token}'`, [], (error, results) => {
    //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //     });
    // }
    if(subdept === "Arpa 900"){
        let results = await arpa_900.findOne({
            token:token
        })
        res.status(200).json(results)
    }else if(subdept === "Arpa 450"){
        let results = await arpa_450.findOne({
            token:token
        })
        res.status(200).json(results)
    }else if(subdept === "Shell Core"){
        let results = await shell_core.findOne({
            token:token
        })
        res.status(200).json(results)
    }else if(subdept === "Cold Box"){
        let results = await cold_box.findOne({
            token:token
        })
        res.status(200).json(results)
    }else if(subdept === "W B Q 3"){
        let results = await w_b_q_3.findOne({
            token:token
        })
        res.status(200).json(results)
    }else if(subdept === "Fettling"){
        let results = await fettling.findOne({
            token:token
        })
        res.status(200).json(results)
    }else if(subdept === "Melting"){
        let results = await melting.findOne({
            token:token
        })
        res.status(200).json(results)
    }else{
        res.status(200).json("Sub Department Not Found")
    }
});

// Update Skill Data
router.post("/updateSkills", async(req, res) => {
    const token = req.body.token;
    var subdept = req.body.subdept;
    // if (subdept === 'Melting') {
    //     const { panel_no_1_operator, panel_no_1_co_operator, panel_no_1_charge_collector, panel_no_2_operator, panel_no_2_co_operator, panel_no_3_operator, panel_no_3_co_operator, spectro_coin_test_bar_sample, crane_operator, slag_collector_panel_1, slag_collector_panel_2, slag_collector_panel_3, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET panel_no_1_operator = $1, panel_no_1_co_operator = $2, panel_no_1_charge_collector = $3, panel_no_2_operator = $4, panel_no_2_co_operator = $5, panel_no_3_operator = $6, panel_no_3_co_operator = $7, spectro_coin_test_bar_sample = $8, crane_operator = $9, slag_collector_panel_1 = $10, slag_collector_panel_2 = $11, slag_collector_panel_3 = $12, l3 = $13, l2 = $14, l1 = $15, total = $16 WHERE token = '${token}'`,
    //         [panel_no_1_operator, panel_no_1_co_operator, panel_no_1_charge_collector, panel_no_2_operator, panel_no_2_co_operator, panel_no_3_operator, panel_no_3_co_operator, spectro_coin_test_bar_sample, crane_operator, slag_collector_panel_1, slag_collector_panel_2, slag_collector_panel_3, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // } else if (subdept === 'Arpa 450') {
    //     const { cope_m_c_operator, cope_box_loading_op, drag_m_c_operator, drag_box_loading_op, drag_box_unloading_op, core_tranfer_fixture_op, core_tranfer_fixture_co_op, core_setting_operator, clamping_operator_1, clamping_operator_2, drag_mould_venting_op, venting_operator_1, venting_operator_2, box_closing_operator, pouring_crane_operator, pouring_operator, k_out_operator, casting_transfer_op, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET cope_m_c_operator = $1, cope_box_loading_op = $2, drag_m_c_operator = $3, drag_box_loading_op = $4, drag_box_unloading_op = $5, core_tranfer_fixture_op = $6, core_tranfer_fixture_co_op = $7, core_setting_operator = $8, clamping_operator_1 = $9, clamping_operator_2 = $10, drag_mould_venting_op = $11, venting_operator_1 = $12, venting_operator_2 = $13, box_closing_operator = $14, pouring_crane_operator = $15, pouring_operator = $16, k_out_operator = $17, casting_transfer_op = $18, l3 = $19, l2 = $20, l1 = $21, total = $22 WHERE token = '${token}'`,
    //         [cope_m_c_operator, cope_box_loading_op, drag_m_c_operator, drag_box_loading_op, drag_box_unloading_op, core_tranfer_fixture_op, core_tranfer_fixture_co_op, core_setting_operator, clamping_operator_1, clamping_operator_2, drag_mould_venting_op, venting_operator_1, venting_operator_2, box_closing_operator, pouring_crane_operator, pouring_operator, k_out_operator, casting_transfer_op, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // } else if (subdept === 'W B Q 3') {
    //     const { cope_m_c_operator, cope_m_c_co_operator, drag_m_c_operator, drag_m_c_co_operator, empty_pallet_trasfer_op, drag_box_venting_op, drag_core_setting_op, cope_core_setting_op, venting_operator_1, venting_operator_2, venting_operator_3, box_closing_operator, box_closing_co_operator, clamping_operator, clamping_operator_1, pouring_crane_operator, pouring_operator, mold_box_transfer_op, k_out_operator, k_out_co_operator, sand_plant_operator, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET cope_m_c_operator = $1, cope_m_c_co_operator = $2, drag_m_c_operator = $3, drag_m_c_co_operator = $4, empty_pallet_trasfer_op = $5, drag_box_venting_op = $6, drag_core_setting_op = $7, cope_core_setting_op = $8, venting_operator_1 = $9, venting_operator_2 = $10, venting_operator_3 = $11, box_closing_operator = $12, box_closing_co_operator = $13, clamping_operator = $14, clamping_operator_1 = $15, pouring_crane_operator = $16, pouring_operator = $17, mold_box_transfer_op = $18, k_out_operator = $19, k_out_co_operator = $20, sand_plant_operator = $21, l3 = $22, l2 = $23, l1 = $24, total = $25 WHERE token = '${token}'`,
    //         [cope_m_c_operator, cope_m_c_co_operator, drag_m_c_operator, drag_m_c_co_operator, empty_pallet_trasfer_op, drag_box_venting_op, drag_core_setting_op, cope_core_setting_op, venting_operator_1, venting_operator_2, venting_operator_3, box_closing_operator, box_closing_co_operator, clamping_operator, clamping_operator_1, pouring_crane_operator, pouring_operator, mold_box_transfer_op, k_out_operator, k_out_co_operator, sand_plant_operator, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // } else if (subdept === 'Cold Box') {
    //     const { cold_box_machineno_01, cold_box_machineno_01_co_operator, cold_box_machineno_02, cold_box_machineno_02_co_operator_1, cold_box_machineno_02_co_operator_2, cold_box_machineno_03, cold_box_machineno_03_co_operator, cold_box_machineno_04, cold_box_machineno_04_co_operator, cold_box_machineno_05, cold_box_machineno_05_co_operator_1, cold_box_machineno_05_co_operator_2, cold_box_machineno_06, cold_box_machineno_06_co_operator_1, cold_box_machineno_06_co_operator_2, cold_box_machineno_07, cold_box_machineno_07_co_operator_1, cold_box_machineno_07_co_operator_2, cold_box_machineno_08, cold_box_machineno_08_co_operator, cold_box_machineno_09, cold_box_machineno_10, cold_box_machineno_11, cold_box_machineno_11_co_operator, sand_feeding_1, sand_feeding_2, mixer_900, mixer_450, painting_skilled_operator, painting_operator_900_1, painting_operator_900_2, painting_operator_900_3, painting_skilled_operator_arpa_450, painting_operator_arpa_450, skilled_inspector_arpa_450, oven_skilled_operator, oven_co_operator, core_box_cleaning_vent_changing, inspection_arpa900, inspection_co_operator_arpa_900, assembly_operator_450, assembly_450_co_operator, tool_change, venting_skill_operator, venting_skill_co_operator_1, venting_skill_co_operator_2, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET cold_box_machineno_01 = $1, cold_box_machineno_01_co_operator = $2, cold_box_machineno_02 = $3, cold_box_machineno_02_co_operator_1 = $4, cold_box_machineno_02_co_operator_2 = $5, cold_box_machineno_03 = $6, cold_box_machineno_03_co_operator = $7, cold_box_machineno_04 = $8, cold_box_machineno_04_co_operator = $9, cold_box_machineno_05 = $10, cold_box_machineno_05_co_operator_1 = $11, cold_box_machineno_05_co_operator_2 = $12, cold_box_machineno_06 = $13, cold_box_machineno_06_co_operator_1 = $14, cold_box_machineno_06_co_operator_2 = $15, cold_box_machineno_07 = $16, cold_box_machineno_07_co_operator_1 = $17, cold_box_machineno_07_co_operator_2 = $18, cold_box_machineno_08 = $19, cold_box_machineno_08_co_operator = $20, cold_box_machineno_09 = $21, cold_box_machineno_10 = $22, cold_box_machineno_11 = $23, cold_box_machineno_11_co_operator = $24, sand_feeding_1 = $25, sand_feeding_2 = $26, mixer_900 = $27, mixer_450 = $28, painting_skilled_operator = $29, painting_operator_900_1 = $30, painting_operator_900_2 = $31, painting_operator_900_3 = $32, painting_skilled_operator_arpa_450 = $33, painting_operator_arpa_450 = $34, skilled_inspector_arpa_450 = $35, oven_skilled_operator = $36, oven_co_operator = $37, core_box_cleaning_vent_changing = $38, inspection_arpa900 = $39, inspection_co_operator_arpa_900 = $40, assembly_operator_450 = $41, assembly_450_co_operator = $42, tool_change = $43, venting_skill_operator = $44, venting_skill_co_operator_1 = $45, venting_skill_co_operator_2 = $46, l3 = $47, l2 = $48, l1 = $49, total = $50 WHERE token = '${token}'`,
    //         [cold_box_machineno_01, cold_box_machineno_01_co_operator, cold_box_machineno_02, cold_box_machineno_02_co_operator_1, cold_box_machineno_02_co_operator_2, cold_box_machineno_03, cold_box_machineno_03_co_operator, cold_box_machineno_04, cold_box_machineno_04_co_operator, cold_box_machineno_05, cold_box_machineno_05_co_operator_1, cold_box_machineno_05_co_operator_2, cold_box_machineno_06, cold_box_machineno_06_co_operator_1, cold_box_machineno_06_co_operator_2, cold_box_machineno_07, cold_box_machineno_07_co_operator_1, cold_box_machineno_07_co_operator_2, cold_box_machineno_08, cold_box_machineno_08_co_operator, cold_box_machineno_09, cold_box_machineno_10, cold_box_machineno_11, cold_box_machineno_11_co_operator, sand_feeding_1, sand_feeding_2, mixer_900, mixer_450, painting_skilled_operator, painting_operator_900_1, painting_operator_900_2, painting_operator_900_3, painting_skilled_operator_arpa_450, painting_operator_arpa_450, skilled_inspector_arpa_450, oven_skilled_operator, oven_co_operator, core_box_cleaning_vent_changing, inspection_arpa900, inspection_co_operator_arpa_900, assembly_operator_450, assembly_450_co_operator, tool_change, venting_skill_operator, venting_skill_co_operator_1, venting_skill_co_operator_2, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // } else if (subdept === 'Shell Core') {
    //     const { shell_machine_no_01, shell_machine_no_02, shell_machine_no_03, shell_machine_no_04, shell_machine_no_05, shell_machine_no_05_co_operator, shell_machine_no_06, shell_machine_no_07, shell_machine_no_08, shell_machine_no_09, shell_machine_no_10, shell_machine_no_11, shell_machine_no_12, shell_machine_no_13, shell_machine_no_14, shell_machine_no_15, shell_machine_no_16, shell_machine_no_17, shell_machine_no_19, shell_machine_no_20, shell_machine_no_21, shell_machine_no_22, jd_head_assembly_01, jd_head_assembly_02, jd_head_assembly_co_operator, same_head, same_kf_head_01, same_kf_head_co_operator_1, same_kf_head_co_operator_2, tata_4sp_block, core_oven_operator, core_oven_co_operator_1, core_oven_co_operator_2, core_oven_co_operator_3, inspection, inspection_co_operator, assembly_dipping, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET shell_machine_no_01 = $1, shell_machine_no_02 = $2, shell_machine_no_03 = $3, shell_machine_no_04 = $4, shell_machine_no_05 = $5, shell_machine_no_05_co_operator = $6, shell_machine_no_06 = $7, shell_machine_no_07 = $8, shell_machine_no_08 = $9, shell_machine_no_09 = $10, shell_machine_no_10 = $11, shell_machine_no_11 = $12, shell_machine_no_12 = $13, shell_machine_no_13 = $14, shell_machine_no_14 = $15, shell_machine_no_15 = $16, shell_machine_no_16 = $17, shell_machine_no_17 = $18, shell_machine_no_19 = $19, shell_machine_no_20 = $20, shell_machine_no_21 = $21, shell_machine_no_22 = $22, jd_head_assembly_01 = $23, jd_head_assembly_02 = $24, jd_head_assembly_co_operator = $25, same_head = $26, same_kf_head_01 = $27, same_kf_head_co_operator_1 = $28, same_kf_head_co_operator_2 = $29, tata_4sp_block = $30, core_oven_operator = $31, core_oven_co_operator_1 = $32, core_oven_co_operator_2 = $33, core_oven_co_operator_3 = $34, inspection = $35, inspection_co_operator = $36, assembly_dipping = $37, l3 = $38, l2 = $39, l1 = $40, total = $41 WHERE token = '${token}'`,
    //         [shell_machine_no_01, shell_machine_no_02, shell_machine_no_03, shell_machine_no_04, shell_machine_no_05, shell_machine_no_05_co_operator, shell_machine_no_06, shell_machine_no_07, shell_machine_no_08, shell_machine_no_09, shell_machine_no_10, shell_machine_no_11, shell_machine_no_12, shell_machine_no_13, shell_machine_no_14, shell_machine_no_15, shell_machine_no_16, shell_machine_no_17, shell_machine_no_19, shell_machine_no_20, shell_machine_no_21, shell_machine_no_22, jd_head_assembly_01, jd_head_assembly_02, jd_head_assembly_co_operator, same_head, same_kf_head_01, same_kf_head_co_operator_1, same_kf_head_co_operator_2, tata_4sp_block, core_oven_operator, core_oven_co_operator_1, core_oven_co_operator_2, core_oven_co_operator_3, inspection, inspection_co_operator, assembly_dipping, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // } else if (subdept === 'Arpa 900') {
    //     const { cope_m_c_operator, m_c_co_operator_air_1, m_c_co_operator_1, drag_m_c_operator, m_c_co_operator_air_2, m_c_co_operator_2, drag_mould_painting_op, core_setting_operator_1, core_setting_operator_2, core_tranfer_fixture_op, box_closing_operator, venting_operator_1, venting_operator_2, cope_box_prepration_op, clamping_operator_1, clamping_operator_2, clamp_pin_removing_op, mold_box_transfer_op, pouring_crane_operator, pouring_operator, k_out_crane_operator, k_out_crane_co_operator, k_out_operator, casting_transfer_op, empty_box_trasfer_op, sand_plant_operator, sand_plant_co_operator, new_sand_add_operator, compactibility_checking_op, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET cope_m_c_operator = $1, m_c_co_operator_air_1 = $2, m_c_co_operator_1 = $3, drag_m_c_operator = $4, m_c_co_operator_air_2 = $5, m_c_co_operator_2 = $6, drag_mould_painting_op = $7, core_setting_operator_1 = $8, core_setting_operator_2 = $9, core_tranfer_fixture_op = $10, box_closing_operator = $11, venting_operator_1 = $12, venting_operator_2 = $13, cope_box_prepration_op = $14, clamping_operator_1 = $15, clamping_operator_2 = $16, clamp_pin_removing_op = $17, mold_box_transfer_op = $18, pouring_crane_operator = $19, pouring_operator = $20, k_out_crane_operator = $21, k_out_crane_co_operator = $22, k_out_operator = $23, casting_transfer_op = $24, empty_box_trasfer_op = $25, sand_plant_operator = $26, sand_plant_co_operator = $27, new_sand_add_operator = $28, compactibility_checking_op = $29, l3 = $30, l2 = $31, l1 = $32, total = $33 WHERE token = '${token}'`,
    //         [cope_m_c_operator, m_c_co_operator_air_1, m_c_co_operator_1, drag_m_c_operator, m_c_co_operator_air_2, m_c_co_operator_2, drag_mould_painting_op, core_setting_operator_1, core_setting_operator_2, core_tranfer_fixture_op, box_closing_operator, venting_operator_1, venting_operator_2, cope_box_prepration_op, clamping_operator_1, clamping_operator_2, clamp_pin_removing_op, mold_box_transfer_op, pouring_crane_operator, pouring_operator, k_out_crane_operator, k_out_crane_co_operator, k_out_operator, casting_transfer_op, empty_box_trasfer_op, sand_plant_operator, sand_plant_co_operator, new_sand_add_operator, compactibility_checking_op, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // } else if (subdept === 'Fettling') {
    //     const { final_fettling_all_item, averaging, crane_operating, sami_final_fettling, l3, l2, l1, total } = req.body;
    //     subdept = subdept.replace(/\s+/g, '_');
    //     pool.query(`Update ${subdept} SET final_fettling_all_item = $1, averaging = $2, crane_operating = $3, sami_final_fettling = $4, l3 = $5, l2 = $6, l1 = $7, total = $8 WHERE token = '${token}'`,
    //         [final_fettling_all_item, averaging, crane_operating, sami_final_fettling, l3, l2, l1, total],
    //         (error, results) => {
    //             if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    //         });
    // }
    if (subdept === 'Melting') {
        const { panel_no_1_operator, panel_no_1_co_operator, panel_no_1_charge_collector, panel_no_2_operator, panel_no_2_co_operator, panel_no_3_operator, panel_no_3_co_operator, spectro_coin_test_bar_sample, crane_operator, slag_collector_panel_1, slag_collector_panel_2, slag_collector_panel_3, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET panel_no_1_operator = $1, panel_no_1_co_operator = $2, panel_no_1_charge_collector = $3, panel_no_2_operator = $4, panel_no_2_co_operator = $5, panel_no_3_operator = $6, panel_no_3_co_operator = $7, spectro_coin_test_bar_sample = $8, crane_operator = $9, slag_collector_panel_1 = $10, slag_collector_panel_2 = $11, slag_collector_panel_3 = $12, l3 = $13, l2 = $14, l1 = $15, total = $16 WHERE token = '${token}'`,
        //     [panel_no_1_operator, panel_no_1_co_operator, panel_no_1_charge_collector, panel_no_2_operator, panel_no_2_co_operator, panel_no_3_operator, panel_no_3_co_operator, spectro_coin_test_bar_sample, crane_operator, slag_collector_panel_1, slag_collector_panel_2, slag_collector_panel_3, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await melting.findOneAndUpdate({token:token}, {$set: {
            panel_no_1_operator: panel_no_1_operator,
            panel_no_1_co_operator:panel_no_1_co_operator,
            panel_no_1_charge_collector:panel_no_1_charge_collector,
            panel_no_2_operator:panel_no_2_operator,
            panel_no_2_co_operator:panel_no_2_co_operator,
            panel_no_3_operator:panel_no_3_operator,
            panel_no_3_co_operator:panel_no_3_co_operator,
            spectro_coin_test_bar_sample:spectro_coin_test_bar_sample,
            crane_operator:crane_operator,
            slag_collector_panel_1:slag_collector_panel_1,
            slag_collector_panel_2:slag_collector_panel_2,
            slag_collector_panel_3:slag_collector_panel_3,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    } else if (subdept === 'Arpa 450') {
        const { cope_m_c_operator, cope_box_loading_op, drag_m_c_operator, drag_box_loading_op, drag_box_unloading_op, core_tranfer_fixture_op, core_tranfer_fixture_co_op, core_setting_operator, clamping_operator_1, clamping_operator_2, drag_mould_venting_op, venting_operator_1, venting_operator_2, box_closing_operator, pouring_crane_operator, pouring_operator, k_out_operator, casting_transfer_op, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET cope_m_c_operator = $1, cope_box_loading_op = $2, drag_m_c_operator = $3, drag_box_loading_op = $4, drag_box_unloading_op = $5, core_tranfer_fixture_op = $6, core_tranfer_fixture_co_op = $7, core_setting_operator = $8, clamping_operator_1 = $9, clamping_operator_2 = $10, drag_mould_venting_op = $11, venting_operator_1 = $12, venting_operator_2 = $13, box_closing_operator = $14, pouring_crane_operator = $15, pouring_operator = $16, k_out_operator = $17, casting_transfer_op = $18, l3 = $19, l2 = $20, l1 = $21, total = $22 WHERE token = '${token}'`,
        //     [cope_m_c_operator, cope_box_loading_op, drag_m_c_operator, drag_box_loading_op, drag_box_unloading_op, core_tranfer_fixture_op, core_tranfer_fixture_co_op, core_setting_operator, clamping_operator_1, clamping_operator_2, drag_mould_venting_op, venting_operator_1, venting_operator_2, box_closing_operator, pouring_crane_operator, pouring_operator, k_out_operator, casting_transfer_op, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await arpa_450.findOneAndUpdate({token:token}, {$set: {
            cope_m_c_operator: cope_m_c_operator,
            cope_box_loading_op:cope_box_loading_op,
            drag_m_c_operator:drag_m_c_operator,
            drag_box_loading_op:drag_box_loading_op,
            drag_box_unloading_op:drag_box_unloading_op,
            core_tranfer_fixture_op:core_tranfer_fixture_op,
            core_tranfer_fixture_co_op:core_tranfer_fixture_co_op,
            core_setting_operator:core_setting_operator,
            clamping_operator_1:clamping_operator_1,
            clamping_operator_2:clamping_operator_2,
            drag_mould_venting_op:drag_mould_venting_op,
            venting_operator_1:venting_operator_1,
            venting_operator_2:venting_operator_2,
            box_closing_operator:box_closing_operator,
            pouring_crane_operator:pouring_crane_operator,
            pouring_crane_operator:pouring_crane_operator,
            pouring_operator:pouring_operator,
            k_out_operator:k_out_operator,
            casting_transfer_op:casting_transfer_op,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    } else if (subdept === 'W B Q 3') {
        const { cope_m_c_operator, cope_m_c_co_operator, drag_m_c_operator, drag_m_c_co_operator, empty_pallet_trasfer_op, drag_box_venting_op, drag_core_setting_op, cope_core_setting_op, venting_operator_1, venting_operator_2, venting_operator_3, box_closing_operator, box_closing_co_operator, clamping_operator, clamping_operator_1, pouring_crane_operator, pouring_operator, mold_box_transfer_op, k_out_operator, k_out_co_operator, sand_plant_operator, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET cope_m_c_operator = $1, cope_m_c_co_operator = $2, drag_m_c_operator = $3, drag_m_c_co_operator = $4, empty_pallet_trasfer_op = $5, drag_box_venting_op = $6, drag_core_setting_op = $7, cope_core_setting_op = $8, venting_operator_1 = $9, venting_operator_2 = $10, venting_operator_3 = $11, box_closing_operator = $12, box_closing_co_operator = $13, clamping_operator = $14, clamping_operator_1 = $15, pouring_crane_operator = $16, pouring_operator = $17, mold_box_transfer_op = $18, k_out_operator = $19, k_out_co_operator = $20, sand_plant_operator = $21, l3 = $22, l2 = $23, l1 = $24, total = $25 WHERE token = '${token}'`,
        //     [cope_m_c_operator, cope_m_c_co_operator, drag_m_c_operator, drag_m_c_co_operator, empty_pallet_trasfer_op, drag_box_venting_op, drag_core_setting_op, cope_core_setting_op, venting_operator_1, venting_operator_2, venting_operator_3, box_closing_operator, box_closing_co_operator, clamping_operator, clamping_operator_1, pouring_crane_operator, pouring_operator, mold_box_transfer_op, k_out_operator, k_out_co_operator, sand_plant_operator, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await w_b_q_3.findOneAndUpdate({token:token}, {$set: {
            cope_m_c_operator: cope_m_c_operator,
            cope_m_c_co_operator:cope_m_c_co_operator,
            drag_m_c_operator:drag_m_c_operator,
            drag_m_c_co_operator:drag_m_c_co_operator,
            empty_pallet_trasfer_op:empty_pallet_trasfer_op,
            drag_box_venting_op:drag_box_venting_op,
            drag_core_setting_op:drag_core_setting_op,
            cope_core_setting_op:cope_core_setting_op,
            venting_operator_1:venting_operator_1,
            venting_operator_2:venting_operator_2,
            venting_operator_3:venting_operator_3,
            box_closing_operator:box_closing_operator,
            box_closing_co_operator:box_closing_co_operator, 
            clamping_operator:clamping_operator, 
            clamping_operator_1:clamping_operator_1, 
            pouring_crane_operator:pouring_crane_operator, 
            pouring_operator:pouring_operator, 
            mold_box_transfer_op:mold_box_transfer_op, 
            k_out_operator:k_out_operator, 
            k_out_co_operator:k_out_co_operator, 
            sand_plant_operator:sand_plant_operator,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    } else if (subdept === 'Cold Box') {
        const { cold_box_machineno_01, cold_box_machineno_01_co_operator, cold_box_machineno_02, cold_box_machineno_02_co_operator_1, cold_box_machineno_02_co_operator_2, cold_box_machineno_03, cold_box_machineno_03_co_operator, cold_box_machineno_04, cold_box_machineno_04_co_operator, cold_box_machineno_05, cold_box_machineno_05_co_operator_1, cold_box_machineno_05_co_operator_2, cold_box_machineno_06, cold_box_machineno_06_co_operator_1, cold_box_machineno_06_co_operator_2, cold_box_machineno_07, cold_box_machineno_07_co_operator_1, cold_box_machineno_07_co_operator_2, cold_box_machineno_08, cold_box_machineno_08_co_operator, cold_box_machineno_09, cold_box_machineno_10, cold_box_machineno_11, cold_box_machineno_11_co_operator, sand_feeding_1, sand_feeding_2, mixer_900, mixer_450, painting_skilled_operator, painting_operator_900_1, painting_operator_900_2, painting_operator_900_3, painting_skilled_operator_arpa_450, painting_operator_arpa_450, skilled_inspector_arpa_450, oven_skilled_operator, oven_co_operator, core_box_cleaning_vent_changing, inspection_arpa900, inspection_co_operator_arpa_900, assembly_operator_450, assembly_450_co_operator, tool_change, venting_skill_operator, venting_skill_co_operator_1, venting_skill_co_operator_2, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET cold_box_machineno_01 = $1, cold_box_machineno_01_co_operator = $2, cold_box_machineno_02 = $3, cold_box_machineno_02_co_operator_1 = $4, cold_box_machineno_02_co_operator_2 = $5, cold_box_machineno_03 = $6, cold_box_machineno_03_co_operator = $7, cold_box_machineno_04 = $8, cold_box_machineno_04_co_operator = $9, cold_box_machineno_05 = $10, cold_box_machineno_05_co_operator_1 = $11, cold_box_machineno_05_co_operator_2 = $12, cold_box_machineno_06 = $13, cold_box_machineno_06_co_operator_1 = $14, cold_box_machineno_06_co_operator_2 = $15, cold_box_machineno_07 = $16, cold_box_machineno_07_co_operator_1 = $17, cold_box_machineno_07_co_operator_2 = $18, cold_box_machineno_08 = $19, cold_box_machineno_08_co_operator = $20, cold_box_machineno_09 = $21, cold_box_machineno_10 = $22, cold_box_machineno_11 = $23, cold_box_machineno_11_co_operator = $24, sand_feeding_1 = $25, sand_feeding_2 = $26, mixer_900 = $27, mixer_450 = $28, painting_skilled_operator = $29, painting_operator_900_1 = $30, painting_operator_900_2 = $31, painting_operator_900_3 = $32, painting_skilled_operator_arpa_450 = $33, painting_operator_arpa_450 = $34, skilled_inspector_arpa_450 = $35, oven_skilled_operator = $36, oven_co_operator = $37, core_box_cleaning_vent_changing = $38, inspection_arpa900 = $39, inspection_co_operator_arpa_900 = $40, assembly_operator_450 = $41, assembly_450_co_operator = $42, tool_change = $43, venting_skill_operator = $44, venting_skill_co_operator_1 = $45, venting_skill_co_operator_2 = $46, l3 = $47, l2 = $48, l1 = $49, total = $50 WHERE token = '${token}'`,
        //     [cold_box_machineno_01, cold_box_machineno_01_co_operator, cold_box_machineno_02, cold_box_machineno_02_co_operator_1, cold_box_machineno_02_co_operator_2, cold_box_machineno_03, cold_box_machineno_03_co_operator, cold_box_machineno_04, cold_box_machineno_04_co_operator, cold_box_machineno_05, cold_box_machineno_05_co_operator_1, cold_box_machineno_05_co_operator_2, cold_box_machineno_06, cold_box_machineno_06_co_operator_1, cold_box_machineno_06_co_operator_2, cold_box_machineno_07, cold_box_machineno_07_co_operator_1, cold_box_machineno_07_co_operator_2, cold_box_machineno_08, cold_box_machineno_08_co_operator, cold_box_machineno_09, cold_box_machineno_10, cold_box_machineno_11, cold_box_machineno_11_co_operator, sand_feeding_1, sand_feeding_2, mixer_900, mixer_450, painting_skilled_operator, painting_operator_900_1, painting_operator_900_2, painting_operator_900_3, painting_skilled_operator_arpa_450, painting_operator_arpa_450, skilled_inspector_arpa_450, oven_skilled_operator, oven_co_operator, core_box_cleaning_vent_changing, inspection_arpa900, inspection_co_operator_arpa_900, assembly_operator_450, assembly_450_co_operator, tool_change, venting_skill_operator, venting_skill_co_operator_1, venting_skill_co_operator_2, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await cold_box.findOneAndUpdate({token:token}, {$set: {
            cold_box_machineno_01: cold_box_machineno_01,
            cold_box_machineno_01_co_operator:cold_box_machineno_01_co_operator,
            cold_box_machineno_02:cold_box_machineno_02,
            cold_box_machineno_02_co_operator_1:cold_box_machineno_02_co_operator_1,
            cold_box_machineno_02_co_operator_2:cold_box_machineno_02_co_operator_2,
            cold_box_machineno_03:cold_box_machineno_03,
            cold_box_machineno_03_co_operator:cold_box_machineno_03_co_operator,
            cold_box_machineno_04:cold_box_machineno_04,
            cold_box_machineno_04_co_operator:cold_box_machineno_04_co_operator,
            cold_box_machineno_05:cold_box_machineno_05,
            cold_box_machineno_05_co_operator_1:cold_box_machineno_05_co_operator_1,
            cold_box_machineno_05_co_operator_2:cold_box_machineno_05_co_operator_2,
            cold_box_machineno_06:cold_box_machineno_06, 
            cold_box_machineno_06_co_operator_1:cold_box_machineno_06_co_operator_1, 
            cold_box_machineno_06_co_operator_2:cold_box_machineno_06_co_operator_2, 
            cold_box_machineno_07:cold_box_machineno_07, 
            cold_box_machineno_07_co_operator_1:cold_box_machineno_07_co_operator_1, 
            cold_box_machineno_07_co_operator_2:cold_box_machineno_07_co_operator_2, 
            cold_box_machineno_08:cold_box_machineno_08, 
            cold_box_machineno_08_co_operator:cold_box_machineno_08_co_operator, 
            cold_box_machineno_09:cold_box_machineno_09,
            cold_box_machineno_10:cold_box_machineno_10, 
            cold_box_machineno_11:cold_box_machineno_11, 
            cold_box_machineno_11_co_operator:cold_box_machineno_11_co_operator, 
            sand_feeding_1:sand_feeding_1, 
            sand_feeding_2:sand_feeding_2, 
            mixer_900:mixer_900, 
            mixer_450:mixer_450, 
            painting_skilled_operator:painting_skilled_operator, 
            painting_operator_900_1:painting_operator_900_1, 
            painting_operator_900_2:painting_operator_900_2, 
            painting_operator_900_3:painting_operator_900_3, 
            painting_skilled_operator_arpa_450:painting_skilled_operator_arpa_450, 
            painting_operator_arpa_450:painting_operator_arpa_450, 
            skilled_inspector_arpa_450:skilled_inspector_arpa_450, 
            oven_skilled_operator:oven_skilled_operator, 
            oven_co_operator:oven_co_operator, 
            core_box_cleaning_vent_changing:core_box_cleaning_vent_changing, 
            inspection_arpa900:inspection_arpa900, 
            inspection_co_operator_arpa_900:inspection_co_operator_arpa_900, 
            assembly_operator_450:assembly_operator_450, 
            assembly_450_co_operator:assembly_450_co_operator, 
            tool_change:tool_change, 
            venting_skill_operator:venting_skill_operator, 
            venting_skill_co_operator_1:venting_skill_co_operator_1, 
            venting_skill_co_operator_2:venting_skill_co_operator_2,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    } else if (subdept === 'Shell Core') {
        const { shell_machine_no_01, shell_machine_no_02, shell_machine_no_03, shell_machine_no_04, shell_machine_no_05, shell_machine_no_05_co_operator, shell_machine_no_06, shell_machine_no_07, shell_machine_no_08, shell_machine_no_09, shell_machine_no_10, shell_machine_no_11, shell_machine_no_12, shell_machine_no_13, shell_machine_no_14, shell_machine_no_15, shell_machine_no_16, shell_machine_no_17, shell_machine_no_19, shell_machine_no_20, shell_machine_no_21, shell_machine_no_22, jd_head_assembly_01, jd_head_assembly_02, jd_head_assembly_co_operator, same_head, same_kf_head_01, same_kf_head_co_operator_1, same_kf_head_co_operator_2, tata_4sp_block, core_oven_operator, core_oven_co_operator_1, core_oven_co_operator_2, core_oven_co_operator_3, inspection, inspection_co_operator, assembly_dipping, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET shell_machine_no_01 = $1, shell_machine_no_02 = $2, shell_machine_no_03 = $3, shell_machine_no_04 = $4, shell_machine_no_05 = $5, shell_machine_no_05_co_operator = $6, shell_machine_no_06 = $7, shell_machine_no_07 = $8, shell_machine_no_08 = $9, shell_machine_no_09 = $10, shell_machine_no_10 = $11, shell_machine_no_11 = $12, shell_machine_no_12 = $13, shell_machine_no_13 = $14, shell_machine_no_14 = $15, shell_machine_no_15 = $16, shell_machine_no_16 = $17, shell_machine_no_17 = $18, shell_machine_no_19 = $19, shell_machine_no_20 = $20, shell_machine_no_21 = $21, shell_machine_no_22 = $22, jd_head_assembly_01 = $23, jd_head_assembly_02 = $24, jd_head_assembly_co_operator = $25, same_head = $26, same_kf_head_01 = $27, same_kf_head_co_operator_1 = $28, same_kf_head_co_operator_2 = $29, tata_4sp_block = $30, core_oven_operator = $31, core_oven_co_operator_1 = $32, core_oven_co_operator_2 = $33, core_oven_co_operator_3 = $34, inspection = $35, inspection_co_operator = $36, assembly_dipping = $37, l3 = $38, l2 = $39, l1 = $40, total = $41 WHERE token = '${token}'`,
        //     [shell_machine_no_01, shell_machine_no_02, shell_machine_no_03, shell_machine_no_04, shell_machine_no_05, shell_machine_no_05_co_operator, shell_machine_no_06, shell_machine_no_07, shell_machine_no_08, shell_machine_no_09, shell_machine_no_10, shell_machine_no_11, shell_machine_no_12, shell_machine_no_13, shell_machine_no_14, shell_machine_no_15, shell_machine_no_16, shell_machine_no_17, shell_machine_no_19, shell_machine_no_20, shell_machine_no_21, shell_machine_no_22, jd_head_assembly_01, jd_head_assembly_02, jd_head_assembly_co_operator, same_head, same_kf_head_01, same_kf_head_co_operator_1, same_kf_head_co_operator_2, tata_4sp_block, core_oven_operator, core_oven_co_operator_1, core_oven_co_operator_2, core_oven_co_operator_3, inspection, inspection_co_operator, assembly_dipping, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await shell_core.findOneAndUpdate({token:token}, {$set: {
            shell_machine_no_01:shell_machine_no_01, 
            shell_machine_no_02:shell_machine_no_02, 
            shell_machine_no_03:shell_machine_no_03, 
            shell_machine_no_04:shell_machine_no_04, 
            shell_machine_no_05:shell_machine_no_05, 
            shell_machine_no_05_co_operator:shell_machine_no_05_co_operator, 
            shell_machine_no_06:shell_machine_no_06, 
            shell_machine_no_07:shell_machine_no_07, 
            shell_machine_no_08:shell_machine_no_08, 
            shell_machine_no_09:shell_machine_no_09, 
            shell_machine_no_10:shell_machine_no_10, 
            shell_machine_no_11:shell_machine_no_11, 
            shell_machine_no_12:shell_machine_no_12, 
            shell_machine_no_13:shell_machine_no_13, 
            shell_machine_no_14:shell_machine_no_14, 
            shell_machine_no_15:shell_machine_no_15, 
            shell_machine_no_16:shell_machine_no_16, 
            shell_machine_no_17:shell_machine_no_17, 
            shell_machine_no_19:shell_machine_no_19, 
            shell_machine_no_20:shell_machine_no_20, 
            shell_machine_no_21:shell_machine_no_21, 
            shell_machine_no_22:shell_machine_no_22, 
            jd_head_assembly_01:jd_head_assembly_01, 
            jd_head_assembly_02:jd_head_assembly_02, 
            jd_head_assembly_co_operator:jd_head_assembly_co_operator, 
            same_head:same_head, 
            same_kf_head_01:same_kf_head_01, 
            same_kf_head_co_operator_1:same_kf_head_co_operator_1, 
            same_kf_head_co_operator_2:same_kf_head_co_operator_2, 
            tata_4sp_block:tata_4sp_block, 
            core_oven_operator:core_oven_operator, 
            core_oven_co_operator_1:core_oven_co_operator_1, 
            core_oven_co_operator_2:core_oven_co_operator_2, 
            core_oven_co_operator_3:core_oven_co_operator_3, 
            inspection:inspection, 
            inspection_co_operator:inspection_co_operator, 
            assembly_dipping:assembly_dipping,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    } else if (subdept === 'Arpa 900') {
        const { cope_m_c_operator, m_c_co_operator_air_1, m_c_co_operator_1, drag_m_c_operator, m_c_co_operator_air_2, m_c_co_operator_2, drag_mould_painting_op, core_setting_operator_1, core_setting_operator_2, core_tranfer_fixture_op, box_closing_operator, venting_operator_1, venting_operator_2, cope_box_prepration_op, clamping_operator_1, clamping_operator_2, clamp_pin_removing_op, mold_box_transfer_op, pouring_crane_operator, pouring_operator, k_out_crane_operator, k_out_crane_co_operator, k_out_operator, casting_transfer_op, empty_box_trasfer_op, sand_plant_operator, sand_plant_co_operator, new_sand_add_operator, compactibility_checking_op, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET cope_m_c_operator = $1, m_c_co_operator_air_1 = $2, m_c_co_operator_1 = $3, drag_m_c_operator = $4, m_c_co_operator_air_2 = $5, m_c_co_operator_2 = $6, drag_mould_painting_op = $7, core_setting_operator_1 = $8, core_setting_operator_2 = $9, core_tranfer_fixture_op = $10, box_closing_operator = $11, venting_operator_1 = $12, venting_operator_2 = $13, cope_box_prepration_op = $14, clamping_operator_1 = $15, clamping_operator_2 = $16, clamp_pin_removing_op = $17, mold_box_transfer_op = $18, pouring_crane_operator = $19, pouring_operator = $20, k_out_crane_operator = $21, k_out_crane_co_operator = $22, k_out_operator = $23, casting_transfer_op = $24, empty_box_trasfer_op = $25, sand_plant_operator = $26, sand_plant_co_operator = $27, new_sand_add_operator = $28, compactibility_checking_op = $29, l3 = $30, l2 = $31, l1 = $32, total = $33 WHERE token = '${token}'`,
        //     [cope_m_c_operator, m_c_co_operator_air_1, m_c_co_operator_1, drag_m_c_operator, m_c_co_operator_air_2, m_c_co_operator_2, drag_mould_painting_op, core_setting_operator_1, core_setting_operator_2, core_tranfer_fixture_op, box_closing_operator, venting_operator_1, venting_operator_2, cope_box_prepration_op, clamping_operator_1, clamping_operator_2, clamp_pin_removing_op, mold_box_transfer_op, pouring_crane_operator, pouring_operator, k_out_crane_operator, k_out_crane_co_operator, k_out_operator, casting_transfer_op, empty_box_trasfer_op, sand_plant_operator, sand_plant_co_operator, new_sand_add_operator, compactibility_checking_op, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await arpa_900.findOneAndUpdate({token:token}, {$set: {
            cope_m_c_operator:cope_m_c_operator, 
            m_c_co_operator_air_1:m_c_co_operator_air_1, 
            m_c_co_operator_1:m_c_co_operator_1, 
            drag_m_c_operator:drag_m_c_operator, 
            m_c_co_operator_air_2:m_c_co_operator_air_2, 
            m_c_co_operator_2:m_c_co_operator_2, 
            drag_mould_painting_op:drag_mould_painting_op, 
            core_setting_operator_1:core_setting_operator_1, 
            core_setting_operator_2:core_setting_operator_2, 
            core_tranfer_fixture_op:core_tranfer_fixture_op, 
            box_closing_operator:box_closing_operator, 
            venting_operator_1:venting_operator_1, 
            venting_operator_2:venting_operator_2, 
            cope_box_prepration_op:cope_box_prepration_op, 
            clamping_operator_1:clamping_operator_1, 
            clamping_operator_2:clamping_operator_2, 
            clamp_pin_removing_op:clamp_pin_removing_op, 
            mold_box_transfer_op:mold_box_transfer_op, 
            pouring_crane_operator:pouring_crane_operator, 
            pouring_operator:pouring_operator, 
            k_out_crane_operator:k_out_crane_operator, 
            k_out_crane_co_operator:k_out_crane_co_operator, 
            k_out_operator:k_out_operator, 
            casting_transfer_op:casting_transfer_op, 
            empty_box_trasfer_op:empty_box_trasfer_op, 
            sand_plant_operator:sand_plant_operator, 
            sand_plant_co_operator:sand_plant_co_operator, 
            new_sand_add_operator:new_sand_add_operator, 
            compactibility_checking_op:compactibility_checking_op,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    } else if (subdept === 'Fettling') {
        const { final_fettling_all_item, averaging, crane_operating, sami_final_fettling, l3, l2, l1, total } = req.body;
        subdept = subdept.replace(/\s+/g, '_');
        // pool.query(`Update ${subdept} SET final_fettling_all_item = $1, averaging = $2, crane_operating = $3, sami_final_fettling = $4, l3 = $5, l2 = $6, l1 = $7, total = $8 WHERE token = '${token}'`,
        //     [final_fettling_all_item, averaging, crane_operating, sami_final_fettling, l3, l2, l1, total],
        //     (error, results) => {
        //         if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
        //     });
        let results = await fettling.findOneAndUpdate({token:token}, {$set: {
            final_fettling_all_item:final_fettling_all_item, 
            averaging:averaging, 
            crane_operating:crane_operating, 
            sami_final_fettling:sami_final_fettling,
            l3:l3,
            l2:l2,
            l1:l1,
            total:total
        }});
        if(results){
            res.status(200).json(results)
        }
    }
});

// Fetch Token
router.post("/fetchToken", async(req, res) => {
    const contractor = req.body.contractor;
    // pool.query(`SELECT token FROM users WHERE contractor = '${contractor}' ORDER BY token DESC LIMIT 1`, [], (error, results) => {
    //     if (error) { res.status(400).json({ error }); } res.status(200).json(results.rows);
    // });
    let results = await users.find({
        contractor : contractor
    }).select('token').sort({token:-1})
    res.status(200).json(results)
});

module.exports = router;