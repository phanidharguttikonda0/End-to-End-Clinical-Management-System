//const pool  = require('../server.js')
const { Pool } = require('pg');
//* giftbox.pool, giftbox.app

const pool = new Pool({
    user: 'postgres',       //* Your PostgreSQL username
    host: 'localhost', //* Ip address
    database: 'kannayaclinics',   //* database name
    password: 'Phani@9090K',   //* password
    port: 5432,                 //* PostgreSQL port
  });



let gmail = '' ;

const patientCheck = async (req,res) => {
    const {email, password} = req.body;
    console.log('This is working')
    gmail = email ;
    //* we need to check whether the email and password or correct or not
    const result = await pool.query('select * from patient where gmail=$1 and password=$2',[gmail,password]) ;
    if(result.rows.length == 0) {
        console.log(`hey he is not a patient with gmail ${gmail}`)
        res.send(false) ;
    }else{
        console.log(`hey he is a patient with gmail ${gmail}`)
        res.send(true) ;
    }
}


module.exports = {
    patientCheck
}