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
    var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
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
    var today =  moment(new Date()).format("DD-MM-YYYY")
    let results = await allocation.find({
        shift:shift,
        subdept:'Arpa 900',
        verified:verified,
        punchdate:today
       }).countDocuments()
       res.status(200).json([{count:results}]);
});

router.post("/getAllocationData_arpa_900_DragMachineOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    //var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
     var today =  moment(new Date()).format("DD-MM-YYYY")
     if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments();
           res.status(200).json([{count:results}]);
     }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments();
         
           res.status(200).json([{count:results}]);
     }

});

router.post("/getAllocationData_arpa_900_DragMachineOpAir", async(req, res) => {
    const { shift, verified,date } = req.body;
   // var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
     var today =  moment(new Date()).format("DD-MM-YYYY")
     if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
     }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
     }

});

router.post("/getAllocationData_arpa_900_DragMachineCoOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_CopeMachineOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_CopeMachineCoOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }
 
});

router.post("/getAllocationData_arpa_900_CopeMachineOpAir", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_DragMouldPaintingOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMouldPaintingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMouldPaintingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_CoreSettingOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreSettingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreSettingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_CoreTranferFixtureOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreTranferFixtureOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreTranferFixtureOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_BoxClosingOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'BoxClosingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'BoxClosingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_VentingOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'VentingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'VentingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_CopeBoxPreprationOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeBoxPreprationOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeBoxPreprationOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_ClampingOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_MoldBoxTransferOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'MoldBoxTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'MoldBoxTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }
 
});
router.post("/getAllocationData_arpa_900_ClampAndPinRemovingOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampAndPinRemovingOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampAndPinRemovingOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_PouringCraneOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_PouringOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_KOutCraneOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_KOutCraneCoOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_KOutOp", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_CastingTransferOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CastingTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CastingTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

router.post("/getAllocationData_arpa_900_EmptyBoxTrasferOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'EmptyBoxTrasferOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'EmptyBoxTrasferOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_SandPlantOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_SandPlantCoOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantCoOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantCoOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_NewSandAddOp", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'NewSandAddOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'NewSandAddOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});
router.post("/getAllocationData_arpa_900_CompactibilityCheckingOp", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date === undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CompactibilityCheckingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CompactibilityCheckingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           }).countDocuments()
           res.status(200).json([{count:results}]);
    }

});

/* Start Employee Available */

router.post("/getAllocationData_arpa_900_DragMachineOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    //var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
     var today =  moment(new Date()).format("DD-MM-YYYY")
     if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            primaryActivity: {$ne : "DragMachineOp"},
            subdept:'Arpa 900',
            DragMachineOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
     }else{
        let results = await allocation.find({
            shift:shift,
            primaryActivity: {$ne : "DragMachineOp"},
            subdept:'Arpa 900',
            DragMachineOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
     }
    
});

router.post("/getAllocationData_arpa_900_DragMachineOpAir_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
   // var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
     var today =  moment(new Date()).format("DD-MM-YYYY")
     if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity: {$ne : "DragMachineOpAir"},
            DragMachineOpAir:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
     }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity: {$ne : "DragMachineOpAir"},
            DragMachineOpAir:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
     }

});

router.post("/getAllocationData_arpa_900_DragMachineCoOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'DragMachineCoOp',
            primaryActivity: {$ne : "DragMachineCoOp"},
            DragMachineCoOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'DragMachineCoOp',
            primaryActivity: {$ne : "DragMachineCoOp"},
            DragMachineCoOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_CopeMachineOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeMachineOp',
            primaryActivity: {$ne : "CopeMachineOp"},
            CopeMachineOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeMachineOp',
            primaryActivity: {$ne : "CopeMachineOp"},
            CopeMachineOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_CopeMachineCoOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeMachineCoOp',
            primaryActivity: {$ne : "CopeMachineCoOp"},
            CopeMachineCoOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeMachineCoOp',
            primaryActivity: {$ne : "CopeMachineCoOp"},
            CopeMachineCoOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
 
});

router.post("/getAllocationData_arpa_900_CopeMachineOpAir_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeMachineOpAir',
            primaryActivity: {$ne : "CopeMachineOpAir"},
            CopeMachineOpAir:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeMachineOpAir',
            primaryActivity: {$ne : "CopeMachineOpAir"},
            CopeMachineOpAir:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
 
});

router.post("/getAllocationData_arpa_900_DragMouldPaintingOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'DragMouldPaintingOp',
            primaryActivity: {$ne : "DragMouldPaintingOp"},
            DragMouldPaintingOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'DragMouldPaintingOp',
            primaryActivity: {$ne : "DragMouldPaintingOp"},
            DragMouldPaintingOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CoreSettingOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CoreSettingOp',
            primaryActivity: {$ne : "CoreSettingOp"},
            CoreSettingOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CoreSettingOp',
            primaryActivity: {$ne : "CoreSettingOp"},
            CoreSettingOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CoreTranferFixtureOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CoreTranferFixtureOp',
            primaryActivity: {$ne : "CoreTranferFixtureOp"},
            CoreTranferFixtureOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CoreTranferFixtureOp',
            primaryActivity: {$ne : "CoreTranferFixtureOp"},
            CoreTranferFixtureOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_BoxClosingOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'BoxClosingOp',
            primaryActivity: {$ne : "BoxClosingOp"},
            BoxClosingOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'BoxClosingOp',
            primaryActivity: {$ne : "BoxClosingOp"},
            BoxClosingOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_VentingOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'VentingOp',
            primaryActivity: {$ne : "VentingOp"},
            VentingOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'VentingOp',
            primaryActivity: {$ne : "VentingOp"},
            VentingOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CopeBoxPreprationOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeBoxPreprationOp',
            primaryActivity: {$ne : "CopeBoxPreprationOp"},
            CopeBoxPreprationOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CopeBoxPreprationOp',
            primaryActivity: {$ne : "CopeBoxPreprationOp"},
            CopeBoxPreprationOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_ClampingOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'ClampingOp',
            primaryActivity: {$ne : "ClampingOp"},
            ClampingOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'ClampingOp',
            primaryActivity: {$ne : "ClampingOp"},
            ClampingOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_MoldBoxTransferOp_avl", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'MoldBoxTransferOp',
            primaryActivity: {$ne : "MoldBoxTransferOp"},
            MoldBoxTransferOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'MoldBoxTransferOp',
            primaryActivity: {$ne : "MoldBoxTransferOp"},
            MoldBoxTransferOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_ClampAndPinRemovingOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'ClampAndPinRemovingOp',
            primaryActivity: {$ne : "ClampAndPinRemovingOp"},
            ClampAndPinRemovingOp:"L0",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'ClampAndPinRemovingOp',
            primaryActivity: {$ne : "ClampAndPinRemovingOp"},
            ClampAndPinRemovingOp:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_PouringCraneOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'PouringCraneOp',
            primaryActivity: {$ne : "PouringCraneOp"},
            PouringCraneOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'PouringCraneOp',
            primaryActivity: {$ne : "PouringCraneOp"},
            PouringCraneOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_PouringOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'PouringOp',
            primaryActivity: {$ne : "PouringOp"},
            PouringOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'PouringOp',
            primaryActivity: {$ne : "PouringOp"},
            PouringOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_KOutCraneOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'KOutCraneOp',
            primaryActivity: {$ne : "KOutCraneOp"},
            KOutCraneOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'KOutCraneOp',
            primaryActivity: {$ne : "KOutCraneOp"},
            KOutCraneOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_KOutCraneCoOp_avl", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'KOutCraneCoOp',
            primaryActivity: {$ne : "KOutCraneCoOp"},
            KOutCraneCoOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'KOutCraneCoOp',
            primaryActivity: {$ne : "KOutCraneCoOp"},
            KOutCraneCoOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
  
});
router.post("/getAllocationData_arpa_900_KOutOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'KOutOp',
            primaryActivity: {$ne : "KOutOp"},
            KOutOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'KOutOp',
            primaryActivity: {$ne : "KOutOp"},
            KOutOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CastingTransferOp_avl", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CastingTransferOp',
            primaryActivity: {$ne : "CastingTransferOp"},
            CastingTransferOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CastingTransferOp',
            primaryActivity: {$ne : "CastingTransferOp"},
            CastingTransferOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_EmptyBoxTrasferOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'EmptyBoxTrasferOp',
            primaryActivity: {$ne : "EmptyBoxTrasferOp"},
            EmptyBoxTrasferOp:"L0",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'EmptyBoxTrasferOp',
            primaryActivity: {$ne : "EmptyBoxTrasferOp"},
            EmptyBoxTrasferOp:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_SandPlantOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'SandPlantOp',
            primaryActivity: {$ne : "SandPlantOp"},
            SandPlantOp:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'SandPlantOp',
            primaryActivity: {$ne : "SandPlantOp"},
            SandPlantOp:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_SandPlantCoOp_avl", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'SandPlantCoOp',
            primaryActivity: {$ne : "SandPlantCoOp"},
            SandPlantCoOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'SandPlantCoOp',
            primaryActivity: {$ne : "SandPlantCoOp"},
            SandPlantCoOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_NewSandAddOp_avl", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'NewSandAddOp',
            primaryActivity: {$ne : "NewSandAddOp"},
            NewSandAddOp:"L0",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'NewSandAddOp',
            primaryActivity: {$ne : "NewSandAddOp"},
            NewSandAddOp:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CompactibilityCheckingOp_avl", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CompactibilityCheckingOp',
            primaryActivity: {$ne : "CompactibilityCheckingOp"},
            CompactibilityCheckingOp:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            // primaryActivity:'CompactibilityCheckingOp',
            primaryActivity: {$ne : "CompactibilityCheckingOp"},
            CompactibilityCheckingOp:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

/* End Employee Available */

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




  router.post("/getAllocationData_arpa_900_DragMachineOp_data", async(req, res) => {
    const { shift, verified ,date} = req.body;
    //var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
     var today =  moment(new Date()).format("DD-MM-YYYY")
     if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
     }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
     }

});

router.post("/getAllocationData_arpa_900_DragMachineOpAir_data", async(req, res) => {
    const { shift, verified,date } = req.body;
   // var today =  moment(new Date()).subtract(1, "days").format("DD-MM-YYYY")
     var today =  moment(new Date()).format("DD-MM-YYYY")
     if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
     }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
     }
 
});

router.post("/getAllocationData_arpa_900_DragMachineCoOp_data", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_CopeMachineOp_data", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_CopeMachineCoOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
  
});

router.post("/getAllocationData_arpa_900_CopeMachineOpAir_data", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeMachineOpAir',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_DragMouldPaintingOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMouldPaintingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'DragMouldPaintingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CoreSettingOp_data", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreSettingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreSettingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
 
});
router.post("/getAllocationData_arpa_900_CoreTranferFixtureOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreTranferFixtureOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CoreTranferFixtureOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_BoxClosingOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'BoxClosingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'BoxClosingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_VentingOp_data", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'VentingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'VentingOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
   
});
router.post("/getAllocationData_arpa_900_CopeBoxPreprationOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeBoxPreprationOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CopeBoxPreprationOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_ClampingOp_data", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_MoldBoxTransferOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'MoldBoxTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'MoldBoxTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_ClampAndPinRemovingOp_data", async(req, res) => {
    const { shift, verified,date } = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampAndPinRemovingOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'ClampAndPinRemovingOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_PouringCraneOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
});
router.post("/getAllocationData_arpa_900_PouringOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'PouringOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_KOutCraneOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_KOutCraneCoOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutCraneCoOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
  
});
router.post("/getAllocationData_arpa_900_KOutOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'KOutOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_CastingTransferOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CastingTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CastingTransferOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});

router.post("/getAllocationData_arpa_900_EmptyBoxTrasferOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'EmptyBoxTrasferOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'EmptyBoxTrasferOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_SandPlantOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});
router.post("/getAllocationData_arpa_900_SandPlantCoOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantCoOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'SandPlantCoOp',
            primarySkill:"L3",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
 
});
router.post("/getAllocationData_arpa_900_NewSandAddOp_data", async(req, res) => {
    const { shift, verified,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'NewSandAddOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'NewSandAddOp',
            primarySkill:"L0",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }
 
});
router.post("/getAllocationData_arpa_900_CompactibilityCheckingOp_data", async(req, res) => {
    const { shift, verified ,date} = req.body;
    var today =  moment(new Date()).format("DD-MM-YYYY")
    if(date == undefined){
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CompactibilityCheckingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:today
           })
           res.status(200).json(results);
    }else{
        let results = await allocation.find({
            shift:shift,
            subdept:'Arpa 900',
            primaryActivity:'CompactibilityCheckingOp',
            primarySkill:"L2",
            verified:verified,
            punchdate:moment(date).format("DD-MM-YYYY")
           })
           res.status(200).json(results);
    }

});


module.exports = router;
