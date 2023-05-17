const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const allocation = require('../models/AllocationModel')
// const date = new Date();
// const today = dateFormat(date, "dd-mm-yyyy");

router.post("/getAllocation_panel_no_1_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-1 Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-1 Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
    
});

router.post("/getAllocation_panel_no_1_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-1 CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-1 CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_panel_no_1_charge_collector", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-1 CHARGE COLLECTOR'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-1 CHARGE COLLECTOR'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_panel_no_2_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-2 Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-2 Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_panel_no_2_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-2 CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-2 CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_panel_no_3_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-3 Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-3 Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_panel_no_3_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'PANEL NO-3 CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'PANEL NO-3 CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_spectro_coin_test_bar_sample", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SPECTRO COIN & TEST BAR SAMPLE'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SPECTRO COIN & TEST BAR SAMPLE'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_crane_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CRANE Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CRANE Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_slag_collector_panel_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SLAG COLLECTOR PANEL-1'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SLAG COLLECTOR PANEL-1'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_slag_collector_panel_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SLAG COLLECTOR PANEL-2'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SLAG COLLECTOR PANEL-2'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_slag_collector_panel_3", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SLAG COLLECTOR PANEL-3'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SLAG COLLECTOR PANEL-3'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cope_m_c_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'COPE M/C Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'COPE M/C Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cope_box_loading_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'COPE BOX LOADING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'COPE BOX LOADING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_m_c_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG M/C Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG M/C Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_box_loading_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG BOX LOADING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG BOX LOADING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_box_unloading_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG BOX UNLOADING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG BOX UNLOADING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_tranfer_fixture_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CORE TRANFER FIXTURE Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CORE TRANFER FIXTURE Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_tranfer_fixture_co_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CORE TRANFER FIXTURE CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CORE TRANFER FIXTURE CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_setting_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CORE SETTING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CORE SETTING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_clamping_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CLAMPING Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CLAMPING Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_clamping_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CLAMPING Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CLAMPING Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_mould_venting_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG MOULD VENTING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG MOULD VENTING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_venting_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'VENTING Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'VENTING Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_venting_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'VENTING Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'VENTING Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_box_closing_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'BOX CLOSING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'BOX CLOSING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});
router.post("/getAllocation_pouring_crane_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'POURING CRANE Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'POURING CRANE Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_pouring_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'POURING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'POURING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_k_out_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'K-OUT Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'K-OUT Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_casting_transfer_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CASTING TRANSFER Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CASTING TRANSFER Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cope_m_c_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'COPE M/C CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'COPE M/C CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_m_c_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG M/C CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG M/C CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_empty_pallet_trasfer_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'EMPTY PALLET TRASFER Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'EMPTY PALLET TRASFER Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_box_venting_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG BOX VENTING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG BOX VENTING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_core_setting_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG CORE SETTING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG CORE SETTING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cope_core_setting_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'COPE CORE SETTING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'COPE CORE SETTING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_venting_operator_3", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'VENTING Op. 03'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'VENTING Op. 03'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_box_closing_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'BOX CLOSING CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'BOX CLOSING CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_clamping_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CLAMPING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CLAMPING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_mold_box_transfer_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'MOLD BOX TRANSFER Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'MOLD BOX TRANSFER Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_k_out_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'K-OUT CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'K-OUT CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_sand_plant_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SAND PLANT Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SAND PLANT Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_01", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_01_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.01 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.01 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_02", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_02_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.02 Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.02 Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_02_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.02 Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.02 Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_03", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.03'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.03'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_03_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.03 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.03 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_04", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.04'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.04'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_04_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.04 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.04 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_05", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.05'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.05'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_05_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.05 Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.05 Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_05_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.05 Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.05 Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_06", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.06'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.06'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_06_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.06 Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.06 Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_06_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.06 Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.06 Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_07", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.07'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.07'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_07_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.07 Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.07 Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_07_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.07 Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.07 Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_08", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.08'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.08'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_08_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.08 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.08 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_09", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.09'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.09'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_10", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.10'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.10'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_11", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.11'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.11'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cold_box_machineno_11_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Cold Box Machine No.11 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Cold Box Machine No.11 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_sand_feeding_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Sand Feeding 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Sand Feeding 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_sand_feeding_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Sand Feeding 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Sand Feeding 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_mixer_900", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Mixer 900'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Mixer 900'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_mixer_450", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Mixer 450'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Mixer 450'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_painting_skilled_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Painting Skilled Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Painting Skilled Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_painting_operator_900_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Painting Op. 900-01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Painting Op. 900-01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_painting_operator_900_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Painting Op. 900-02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Painting Op. 900-02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_painting_operator_900_3", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Painting Op. 900-03'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Painting Op. 900-03'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_painting_skilled_operator_arpa_450", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Painting Skilled Op. Arpa 450'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Painting Skilled Op. Arpa 450'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_painting_operator_arpa_450", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Painting Op. Arpa 450'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Painting Op. Arpa 450'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_skilled_inspector_arpa_450", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Skilled Inspector Arpa 450'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Skilled Inspector Arpa 450'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_oven_skilled_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Oven Skilled Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Oven Skilled Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_oven_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Oven Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Oven Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_box_cleaning_vent_changing", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Core Box Cleaning & Vent Changing'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Core Box Cleaning & Vent Changing'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_inspection_arpa900", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Inspection Arpa 900'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Inspection Arpa 900'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_inspection_co_operator_arpa_900", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Inspection Co-Op. Arpa 900'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Inspection Co-Op. Arpa 900'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_assembly_operator_450", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Assembly Op. 450'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Assembly Op. 450'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_assembly_450_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Assembly 450 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Assembly 450 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_tool_change", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Tool Change'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Tool Change'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_venting_skill_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Venting Skill Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Venting Skill Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_venting_skill_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Venting Skill Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Venting Skill Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_venting_skill_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Venting Skill Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Venting Skill Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_01", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_02", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_03", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.03'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.03'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_04", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.04'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.04'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_05", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.05'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.05'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_05_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.05 Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.05 Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_06", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.06'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.06'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_07", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.07'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.07'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_08", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.08'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.08'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_09", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.09'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.09'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_10", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.10'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.10'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_12", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.12'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.12'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_13", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.13'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.13'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_14", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.14'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.14'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_15", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.15'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.15'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_16", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.16'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.16'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_17", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.17'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.17'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_19", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.19'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.19'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_20", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.20'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.20'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_21", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.21'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.21'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_shell_machine_no_22", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Shell Machine No.22'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Shell Machine No.22'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_jd_head_assembly_01", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'JD Head Assembly 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'JD Head Assembly 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_jd_head_assembly_02", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'JD Head Assembly 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'JD Head Assembly 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_jd_head_assembly_co_operator",async (req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'JD Head Assembly Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'JD Head Assembly Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_same_head", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Same Head'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Same Head'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_same_kf_head_01", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Same KF Head 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Same KF Head 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_same_kf_head_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Same KF Head Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Same KF Head Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_same_kf_head_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Same KF Head Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Same KF Head Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_tata_4sp_block", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'TATA 4Sp block'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'TATA 4Sp block'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_oven_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Core Oven Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Core Oven Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_oven_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Core Oven Co-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Core Oven Co-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_oven_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Core Oven Co-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Core Oven Co-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_oven_co_operator_3", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Core Oven Co-Op. 03'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Core Oven Co-Op. 03'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_inspection", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Inspection'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Inspection'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_inspection_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Inspection Co-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Inspection Co-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_assembly_dipping", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Assembly Dipping'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Assembly Dipping'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_m_c_co_operator_air_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'M/C CO-Op.(AIR) 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'M/C CO-Op.(AIR) 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_m_c_co_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'M/C CO-Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'M/C CO-Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_m_c_co_operator_air_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'M/C CO-Op.(AIR) 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'M/C CO-Op.(AIR) 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_m_c_co_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'M/C CO-Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'M/C CO-Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_drag_mould_painting_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'DRAG MOULD PAINTING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'DRAG MOULD PAINTING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_setting_operator_1", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CORE SETTING Op. 01'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CORE SETTING Op. 01'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_core_setting_operator_2", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CORE SETTING Op. 02'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CORE SETTING Op. 02'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_cope_box_prepration_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'COPE BOX PREPRATION Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'COPE BOX PREPRATION Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_clamp_pin_removing_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CLAMP & PIN REMOVING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CLAMP & PIN REMOVING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_k_out_crane_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'K-OUT CRANE Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'K-OUT CRANE Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_k_out_crane_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'K-OUT CRANE CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'K-OUT CRANE CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_empty_box_trasfer_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'EMPTY BOX TRASFER Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'EMPTY BOX TRASFER Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_sand_plant_co_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SAND PLANT CO-Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SAND PLANT CO-Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_new_sand_add_operator", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'NEW SAND ADD Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'NEW SAND ADD Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_compactibility_checking_op", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'COMPACTIBILITY CHECKING Op.'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'COMPACTIBILITY CHECKING Op.'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_final_fettling_all_item", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'FINAL FETTLING ALL ITEM'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'FINAL FETTLING ALL ITEM'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_averaging", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'AVERAGING'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'AVERAGING'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_crane_operating", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'CRANE OPERATING'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'CRANE OPERATING'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_sami_final_fettling", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'SAMI FINAL FETTLING'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'SAMI FINAL FETTLING'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

router.post("/getAllocation_hand_moulding", async(req, res) => {
    const { subdeptManpower, verified, shift } = req.body;
    // pool.query(`SELECT * FROM allocation WHERE shift = '${shift}' AND subdept = '${subdeptManpower}' AND verified = '${verified}' AND location = 'Hand Moulding'`, [], (error, results) => {
    //     if (results.rows.length === 0) { res.status(200).json(''); } else { res.status(200).json(results.rows); }
    // });
    let results = await allocation.find({
        shift : shift,
        subdept:subdeptManpower,
        verified:verified,
        location :'Hand Moulding'
    })
    if(results.length === 0){
        res.status(200).json('')
    }else{
        res.status(200).json(results)
    }
});

module.exports = router;