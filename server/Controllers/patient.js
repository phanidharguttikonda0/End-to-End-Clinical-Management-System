//const pool  = require('../server.js')
const { query } = require('express');
const { Pool } = require('pg');
const crypto = require('crypto');
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
    const result = await pool.query('select * from patient where EMAIL=$1 and password=$2',[gmail,password]) ;
    if(result.rows.length == 0) {
        console.log(`hey he is not a patient with gmail ${gmail}`)
        res.send(false) ;
    }else{
        console.log(`hey he is a patient with gmail ${gmail}`)
        res.send(true) ;
    }
}


const SignUp = async (req,res) => {
    const details = req.body ;

    gmail = details.email ;

    const result = await pool.query('select * from patient where email=$1',[gmail]) ;

    if (result.rows.length === 0) {
        //* then we are going to insert these
        await pool.query(
            'INSERT INTO patient (email, password, name, dob, mobile_no, sex, blood_group, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [details.email, details.password, details.name, details.dob, details.mob, details.sex, details.bloodgroup, details.address]
        );
        res.send(true) ;
    }else{
        //* Means already exists
        res.send(false) ;
    }

}


const patientHome = async (req,res) => {
    //* we are going to return the list of doctors that are not on the Leave
    const currentDate = new Date().toISOString().split('T')[0];
    console.log('the current date was ',currentDate)
    const query = `
    SELECT d.*
    FROM Doctor AS d
    LEFT JOIN Leave AS l ON l.Doctor_id = d.Doctor_id 
        AND $1 BETWEEN l.start_date AND l.end_date
    LEFT JOIN (
        SELECT a.Doctor_id, COUNT(*) as appointment_count
        FROM Appointment AS a
        WHERE a.appointment_date = $1
        GROUP BY a.Doctor_id
    ) AS ap ON ap.Doctor_id = d.Doctor_id
    WHERE l.Doctor_id IS NULL
      AND (ap.appointment_count IS NULL OR d.doctor_limit > ap.appointment_count);
  `;

  const result = await pool.query(query, [currentDate]);

    console.log(`The list of doctors were ${result.rows}`)

    res.send(result.rows) ; //* sending list of doctors
}


const appointment = async (req,res) => {
    const {gmail, doctor_id} = req.body ;
    const currentDate = new Date().toISOString().split('T')[0];
    //* First thing is to add the appointment
    const result1 = await pool.query("select patient_id from patient where email=$1", [gmail]) ;
    const result = await pool.query("select patient_id from appointment where appointment_date=$1 and patient_id=$2 and doctor_id=$3", [currentDate,
        result1.rows[0].patient_id,doctor_id
    ]) ;
    console.log("The Appointment was booked", result.rows.length)
    if (result.rows.length===0) res.send(true) ;
    //* we are going to check whether patient is booking appointment again or not
    
    else res.send(false) ;

}

const appointmentConfirm = async (req,res) => {
    const {gmail, symptoms, doctor_id} = req.body ;
    const currentDate = new Date().toISOString().split('T')[0];
    //* First thing is to add the appointment
    const result1 = await pool.query("select patient_id from patient where email=$1", [gmail]) ;
    await pool.query("insert into appointment(appointment_date, symptoms,doctor_report,doctor_id,patient_id) values($1, $2, $3, $4,$5)",
         [currentDate,symptoms,"Not yet", doctor_id,result1.rows[0].patient_id]) ;
    res.send(true) ;
}

const recentAppointments = async (req,res) => {
    const {gmail} = req.query ;
    const result1 = await pool.query("select patient_id from patient where email=$1", [gmail]) ;
    const result = await 
    pool.query("select * from Appointment where patient_id = $1", [result1.rows[0].patient_id]) ;
    res.send(result.rows) ;
}

const getRecentAppointments = async (req,res) => {
    //* returning doctor creditionals
    const {doctor_id} = req.query ;
    const result = await pool.query("select * from doctor where doctor_id = $1",[doctor_id]) ;
    res.send(result.rows[0]) ;
}

const MedicineBill = async (req,res) => {
    //* returning the prescription of the doctor and the amount to pay for Medical bill
    const {appointment_id} = req.query ;
    console.log(appointment_id)
    const result = await 
    pool.query("select details,Bill_amount,payed,prescription_id from Prescription where appointment_id = $1", [appointment_id]) ;
    console.log(result.rowCount)
    res.send(result.rows[0])
}

const MedicinceBillPay = async (req,res) => {
    //* we are going to pay the bill and generating an hash based on the prescription id
    const {prescription_id} = req.query ;

    await pool.query("update prescription SET payed=$1 where prescription_id=$2", ["Yes",prescription_id]) ;


    const generateHash = (data) => {
    return crypto.createHash('sha256').update(data).digest('hex');
    };

    await pool.query("insert into medicine_bill values($1,$2)",[generateHash(prescription_id), prescription_id]) ;

    res.send(true)
}


const Settings = async(req,res) => {
    const {gmail} = req.query ;
    const result = await pool.query('select * from patient where email=$1',[gmail]) ;
    res.send(result.rows[0]) ;
}

module.exports = {
    patientCheck,
    SignUp,
    patientHome,
    appointment,
    appointmentConfirm,
    recentAppointments,
    MedicineBill,
    MedicinceBillPay,
    Settings,
    getRecentAppointments
}