const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const allocation = require('../models/AllocationModel')

const moment = require("moment")
//////////////////////// Manpower Subdept wise ////////////////////////////
//Shell Core
router.post("/getAllocationData_shell_core", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    // console.log("12",today)
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Shell Core' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
     shift:shift,
     subdept:'Shell Core',
     verified:verified,
     punchdate:today
    })
    res.status(200).json([{count:results.length}]);
});

//cold_box
router.post("/getAllocationData_cold_box", async(req, res) => {
    const { shift, verified } = req.body;
    const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    console.log("12",today)
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Cold Box' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'Cold Box',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

//arpa_900
router.post("/getAllocationData_arpa_900", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'Arpa 900',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_DragMachineOp", async(req, res) => {
    const { shift, verified } = req.body;
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    let results = await allocation.find({
        shift:shift,
        subdept:'DragMachineOp',
        primarySkill:"L3",
        verified:verified,
        punchdate:today
       }).countDocuments();
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_DragMachineOpAir", async(req, res) => {
    const { shift, verified } = req.body;
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    let results = await allocation.find({
        shift:shift,
        subdept:'DragMachineOpAir',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_DragMachineCoOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'DragMachineCoOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_CopeMachineOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CopeMachineOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_CopeMachineCoOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CopeMachineCoOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_CopeMachineOpAir", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CopeMachineOpAir',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_DragMouldPaintingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'DragMouldPaintingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_CoreSettingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CoreSettingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_CoreTranferFixtureOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CoreTranferFixtureOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_BoxClosingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'BoxClosingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_VentingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'VentingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_CopeBoxPreprationOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CopeBoxPreprationOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_ClampingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'ClampingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_MoldBoxTransferOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'MoldBoxTransferOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_ClampAndPinRemovingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'ClampAndPinRemovingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_PouringCraneOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'PouringCraneOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_PouringOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'PouringOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_KOutCraneOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'KOutCraneOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_KOutCraneCoOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'KOutCraneCoOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_KOutOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'KOutOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_CastingTransferOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CastingTransferOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_EmptyBoxTrasferOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'EmptyBoxTrasferOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_SandPlantOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'SandPlantOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_SandPlantCoOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'SandPlantCoOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_NewSandAddOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'NewSandAddOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});
router.post("/getAllocationData_arpa_900_CompactibilityCheckingOp", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 900' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'CompactibilityCheckingOp',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

//arpa_450
router.post("/getAllocationData_arpa_450", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Arpa 450' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'Arpa 450',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

//w_b_q_3
router.post("/getAllocationData_w_b_q_3", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'W B Q 3' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'W B Q 3',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

//hand_moulding
router.post("/getAllocationData_hand_moulding", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Hand Moulding' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'Hand Moulding',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

//melting
router.post("/getAllocationData_melting", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Melting' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'Melting',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

//fettling
router.post("/getAllocationData_fettling", async(req, res) => {
    const { shift, verified } = req.body;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT COUNT(*) FROM allocation WHERE shift = '${shift}' AND subdept = 'Fettling' AND verified = '${verified}' AND punchdate = '${today}'`, (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:'Fettling',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

///////////////////////////////// Manpower List ///////////////////////////////////
router.post("/getManpowerData", async(req, res) => {
    const subdept = req.body.subdept;
    const verified = req.body.verified;
    const shift = req.body.shift;
    // const date = new Date();
    // const today = dateFormat(date, "dd-mm-yyyy");
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdept}' AND verified = '${verified}'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:subdept,
        verified:verified,
        punchdate:today
       })
       res.status(200).json(results);
});
///////////////////////////////// Manpower List ///////////////////////////////////


////////////////////////// Location data for Graphical view //////////////////////////
router.post("/getLocationData", async(req, res) => {
    const subdept = req.body.subdept;
    const location = req.body.location;
    const shift = req.body.shift;
    const date = new Date();
    const today = dateFormat(date, "dd-mm-yyyy");
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdept}' AND location = '${location}'`, [], (error, results) => {
    //     if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.find({
        shift:shift,
        subdept:subdept,
        location:location
       })
       res.status(200).json([{count:results}]);
});
////////////////////////// Location data for Graphical view //////////////////////////

//Verify Manpower
router.post("/verifyManpower", async(req, res) => {
    const { token, subdept, punchin, punchdate } = req.body;
    var date = new Date();
    var time = date.toLocaleTimeString("en-US", { timeZone: 'Asia/Kolkata' });
    // pool.query(`UPDATE allocation SET verified = 'YES', verifiedtime = $1 WHERE token = $2 AND subdept = $3 AND punchin = $4 AND punchdate = $5`, [time, token, subdept, punchin, punchdate], (error, results) => {
    //   if (error) { res.status(400).json(error); } res.status(200).json(results.rows);
    // });
    let results = await allocation.findOneAndUpdate({
       token:token,
       subdept:subdept,
       punchin:punchin,
       punchdate:punchdate
    }, {
        $set: {
            verified: 'YES',
            verifiedtime:time
        }
    })
    res.status(200).json(results);
  });

module.exports = router;