const Pool = require("pg").Pool;
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "menon",
//     password: "admin",
//     port: 5433
//     // user: "uhhgrbrfolzyaj",
//     // host: "ec2-44-198-196-149.compute-1.amazonaws.com",
//     // database: "d24ode0d0ebi9b",
//     // password: "65b8f6da97e202754f349ffa534ea076837cceee03705b5abb975f6c73fbe6a3",
//     // port: 5432
// });
const pool = mongoose.connect('mongodb://rest-api:34eace700b79730481c17bab7e2657e1@cluster0-shard-00-00.uouvd.mongodb.net:27017,cluster0-shard-00-01.uouvd.mongodb.net:27017,cluster0-shard-00-02.uouvd.mongodb.net:27017/ManPower?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Database successfully connected');
  }).catch((err) => {
    console.log(err);
  });


module.exports = pool;
