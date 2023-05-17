const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const requirements = require('../models/RequirementsModel') 
const req_history = require('../models/Req_history_Model');
const mongoose = require('mongoose');
//View Manpower Requirements
router.post("/viewRequirements", async(req, res) => {
    const { dept, requirements } = req.body;
    // pool.query(`SELECT * FROM requirements`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find()
    res.status(200).json(results);
});

//Change Manpower Requirements
router.post("/changeRequirements", async(req, res) => {
    const { shell_core, cold_box, arpa_900, arpa_450, w_b_q_3, hand_moulding, melting, fettling, name } = req.body;
    const date = new Date();
    const updatedate = dateFormat(date, "dd-mm-yyyy");

    // pool.query({
    //     text: 'INSERT INTO req_history(shell_core, cold_box, arpa_900, arpa_450, w_b_q_3, hand_moulding, melting, fettling, name, updatedate)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
    //     values: [shell_core, cold_box, arpa_900, arpa_450, w_b_q_3, hand_moulding, melting, fettling, name, updatedate]
    // });
    var data = new requirements({...req.body,updatedate:updatedate})
    await data.save()
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Shell Core'`, [shell_core]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Cold Box'`, [cold_box]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Arpa 900'`, [arpa_900]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Arpa 450'`, [arpa_450]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'W B Q 3'`, [w_b_q_3]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Hand Moulding'`, [hand_moulding]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Melting'`, [melting]);
    // pool.query(`UPDATE requirements SET requirement = $1 WHERE dept = 'Fettling'`, [fettling]);
    await requirements.findOneAndUpdate({dept:"Shell Core"}, {$set: {requirement: shell_core}});
    await requirements.findOneAndUpdate({dept:"Cold Box"}, {$set: {requirement: cold_box}});
    await requirements.findOneAndUpdate({dept:"Arpa 900"}, {$set: {requirement: arpa_900}});
    await requirements.findOneAndUpdate({dept:"Arpa 450"}, {$set: {requirement: arpa_450}});
    await requirements.findOneAndUpdate({dept:"W B Q 3"}, {$set: {requirement: w_b_q_3}});
    await requirements.findOneAndUpdate({dept:"Hand Moulding"}, {$set: {requirement: hand_moulding}});
    await requirements.findOneAndUpdate({dept:"Melting"}, {$set: {requirement: melting}});
    await requirements.findOneAndUpdate({dept:"Fettling"}, {$set: {requirement: fettling}});
});

//Requirements for Shell Core
router.get("/shell_core", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Shell Core'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Shell Core'
    })
     res.status(200).json(results);
});

//Requirements for cold_box
router.get("/cold_box",async (req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Cold Box'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Cold Box'
        })
         res.status(200).json(results);
});

//Requirements for arpa_900
router.get("/arpa_900", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Arpa 900'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Arpa 900'
        })
       res.status(200).json(results);
});

router.get("/arpa_900_DragMachineOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'DragMachineOp'
        })
       res.status(200).json(results);
});

router.get("/arpa_900_DragMachineOpAir", async(req, res) => {
    let results = await requirements.find({
            subdept:'DragMachineOpAir'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_DragMachineCoOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'DragMachineCoOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CopeMachineOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CopeMachineOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CopeMachineCoOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CopeMachineCoOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CopeMachineOpAir", async(req, res) => {
    let results = await requirements.find({
            subdept:'CopeMachineOpAir'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_DragMouldPaintingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'DragMouldPaintingOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CoreSettingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CoreSettingOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CoreTranferFixtureOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CoreTranferFixtureOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_BoxClosingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'BoxClosingOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_VentingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'VentingOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CopeBoxPreprationOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CopeBoxPreprationOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_ClampingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'ClampingOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_MoldBoxTransferOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'MoldBoxTransferOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_ClampAndPinRemovingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'ClampAndPinRemovingOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_PouringCraneOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'PouringCraneOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_PouringOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'PouringOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_KOutCraneOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'KOutCraneOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_KOutCraneCoOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'KOutCraneCoOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_KOutOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'KOutOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CastingTransferOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CastingTransferOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_EmptyBoxTrasferOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'EmptyBoxTrasferOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_SandPlantOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'SandPlantOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_SandPlantCoOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'SandPlantCoOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_NewSandAddOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'NewSandAddOp'
        })
       res.status(200).json(results);
});
router.get("/arpa_900_CompactibilityCheckingOp", async(req, res) => {
    let results = await requirements.find({
            subdept:'CompactibilityCheckingOp'
        })
       res.status(200).json(results);
});



//Requirements for arpa_450
router.get("/arpa_450", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Arpa 450'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Arpa 450'
        })
         res.status(200).json(results);
});

//Requirements for w_b_q_3
router.get("/w_b_q_3", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'W B Q 3'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'W B Q 3'
        })
        res.status(200).json(results);
});

//Requirements for hand_moulding
router.get("/hand_moulding", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Hand Moulding'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Hand Moulding'
        })
       res.status(200).json(results);
});

//Requirements for melting
router.get("/melting", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Melting'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Melting'
        })
        res.status(200).json(results);
});

//Requirements for fettling
router.get("/fettling", async(req, res) => {
    // pool.query(`SELECT * FROM requirements WHERE dept = 'Fettling'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await requirements.find({
        dept:'Fettling'
        })
        res.status(200).json(results);
});

module.exports = router;