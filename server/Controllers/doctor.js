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
    const result = await pool.query('select * from doctor where email=$1 and password=$2',[gmail,password]) ;
    if(result.rows.length == 0) {
        console.log(`hey he is not a doctor with gmail ${gmail}`)
        res.send(false) ;
    }else{
        console.log(`hey he is a doctor with gmail ${gmail}`)
        res.send(true) ;
    }
}


const doctorHome = async (req,res) => { 
    //* we need to get list of appointments booked today
    const {gmail} = req.query ;
    const currentDate = new Date().toISOString().split('T')[0];
    const result1 = await pool.query('select doctor_id from doctor where email=$1',[gmail]) ;
    const result = await pool.query('select * from appointment where doctor_id=$1 and appointment_date=$2',[result1.rows[0].doctor_id,currentDate]) ;
    let patients = [] ;
    for(let x = 0 ; x < result.rowCount ; x++){
        patients.push(await getPatient(result.rows[x])) ;
    }

    res.send({patients: patients, appointments: result.rows}) ;
}

const getPatient = async (patient) => {
    return (await pool.query('select blood_group,sex,dob,name from patient where patient_id=$1',[patient.patient_id])).rows[0] ;
}



const writeReports = async (req,res) => {
    //* doctor writes precations and disease clarrification
    const {report, appointment_id} = req.query ;
    const currentDate = new Date().toISOString().split('T')[0];
    await pool.query("update appointment set doctor_report=$1 where appointment_id=$2",[report,appointment_id]) ;
}

const writeMedicines = async (req,res) => {
    
}


const prevPatients = async (req,res) => {
    const {gmail} = req.query ;
    const result1 = await pool.query('select doctor_id from doctor where email=$1',[gmail]) ;
    const result = await pool.query('select * from appointment where doctor_id=$1',[result1.rows[0].doctor_id]) ;
    console.log(result.rowCount)
    const patientNames= [] ;
    for(let x = 0 ; x < result.rowCount ; x++){
        console.log(result.rows[x].patient_id)
        patientNames.push(await getpatient(result.rows[x].patient_id)) ;
    }
    res.send({patientNames: patientNames, appointments: result.rows}) ;
}

const getpatient = async (id) => {
    const res = await pool.query('select name from patient where patient_id=$1',[id]) ;
    return res.rows[0].name ;
}

const prevPatientReports = async (req,res) => {}

const prevpatientMedicine = async (req,res) => {}

const applyLeave = async (req,res) => {
    console.log(gmail) ;
    const leave = req.body ;
    console.log(new Date(leave.start_date).toISOString().split('T')[0])
    const result1 = await pool.query('select doctor_id from doctor where email=$1',[leave.gmail])
    await pool.query("INSERT INTO leave (start_date, end_date, sanctioned, doctor_id) VALUES ($1, $2, $3, $4)",[new Date(leave.start_date).toISOString().split('T')[0],new Date(leave.end_date).toISOString().split('T')[0],leave.sanctioned,result1.rows[0].doctor_id]) ;
    res.send(true) ;
}

const Info = async (req,res) => {
    //* returning present doctor information
    const {gmail} = req.query ;
    res.send( (await pool.query("select * from doctor where email = $1",[gmail])).rows[0] )
}

const prevLeaves = async (req,res) => {}

module.exports = {doctorCheck,doctorHome,writeReports,writeMedicines,
    prevPatients,prevPatientReports,prevpatientMedicine,applyLeave,Info,prevLeaves
} ;