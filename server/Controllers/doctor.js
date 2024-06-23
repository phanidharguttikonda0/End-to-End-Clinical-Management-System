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

const doctorCheck = async (req,res) => {
    const {email, password} = req.body;
    gmail = email ;
    //* we need to check whether the email and password or correct or not
    const result = await pool.query('select * from doctor where gmail=$1 and password=$2',[gmail,password]) ;
    if(result.rows.length == 0) {
        console.log(`hey he is not a doctor with gmail ${gmail}`)
        res.send(false) ;
    }else{
        console.log(`hey he is a doctor with gmail ${gmail}`)
        res.send(true) ;
    }
}


const doctorHome = async (req,res) => {}


const getpatient = async (req,res) => {}

const writeReports = async (req,res) => {}

const writeMedicines = async (req,res) => {}


const prevPatients = async (req,res) => {}

const prevPatientReports = async (req,res) => {}

const prevpatientMedicine = async (req,res) => {}

const applyLeave = async (req,res) => {}

const Info = async (req,res) => {}

const prevLeaves = async (req,res) => {}

module.exports = {doctorCheck,doctorHome,getpatient,writeReports,writeMedicines,
    prevPatients,prevPatientReports,prevpatientMedicine,applyLeave,Info,prevLeaves
} ;