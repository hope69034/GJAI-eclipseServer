const express = require("express");
const mysql = require("mysql");
const config = require("../config.json");
const conn = mysql.createConnection(config);


const router = express.Router();
router.post("/lifeConcierge/api/signUp", (req,res)=>{
  const id = req.body.id;
  const pw = req.body.pw;
  const name = req.body.name;
  const gender = req.body.gender;
  const birthday = req.body.birthday;
  const job = req.body.job;
  const hAddr = req.body.hAddr;
  const cAddr = req.body.cAddr;
  const disease = req.body.disease;
  const params = [id,pw,name,gender,birthday,job,hAddr,cAddr,disease]
  const sql = "insert into userinfo values (null, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(sql, params, (err, rows)=>{
    if (!err) {
      res.send(rows);
    } else {
      console.log("오류 발견");
    }
  })
  
})

router.get('/lifeConcierge/api', (req,res)=>{
  conn.query('select * from userinfo', (err,rows)=>{
    if(!err) {
      res.send(rows);
    }else{
      console.log(err);
    }
  })
})
module.exports = router