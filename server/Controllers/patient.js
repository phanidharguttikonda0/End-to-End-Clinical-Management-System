//const pool  = require('../server.js')
const { query } = require('express');
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

    const result = await pool.query('select * from patient where gmail=$1',[gmail]) ;

    if (result.rows.length === 0) {
        //* then we are going to insert these
        await pool.query(
            'INSERT INTO patient (gmail, password, name, dob, mob, sex, bloodgroup, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [details.gmail, details.password, details.name, details.dob, details.mob, details.sex, details.bloodgroup, details.address]
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


const appointment = async (req,res) => {}

const appointmentConfirm = async (req,res) => {}

const recentAppointments = async (req,res) => {}

const MedicineBill = async (req,res) => {}

const MedicinceBillPay = async (req,res) => {}


const Settings = async(req,res) => {}

module.exports = {
    patientCheck,
    SignUp,
    patientHome,
    appointment,
    appointmentConfirm,
    recentAppointments,
    MedicineBill,
    MedicinceBillPay,
    Settings
}