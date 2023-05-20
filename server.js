require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port =  4455;


app.locals.baseURL = "http://localhost:4455";
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

///////////////// Login /////////////////////
var loginRouter = require('./routes/Login');
app.use('/login', loginRouter);

///////////////// Employee /////////////////////
var empRouter = require('./routes/Employees');
app.use('/emp', empRouter);

///////////////// Contractor /////////////////////
var conRouter = require('./routes/Contractor');
app.use('/con', conRouter);

///////////////// Manpower /////////////////////
var manpowerRouter = require('./routes/Manpower');
app.use('/mp', manpowerRouter);

///////////////// GraphicalView /////////////////////
var graphicalRouter = require('./routes/GraphicalView');
app.use('/graphical', graphicalRouter);

///////////////// Leave /////////////////////
var leaveRouter = require('./routes/Leave');
app.use('/leave', leaveRouter);

///////////////// Punching /////////////////////
var punchRouter = require('./routes/Punching');
app.use('/punch', punchRouter);

///////////////// Reports /////////////////////
var reportRouter = require('./routes/Reports');
app.use('/report', reportRouter);

///////////////// Requirements /////////////////////
var reqRouter = require('./routes/Requirements');
app.use('/req', reqRouter);

app.listen(4455, () => {
    console.log('Server started on: ' + port);
});