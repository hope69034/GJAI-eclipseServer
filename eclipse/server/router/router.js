const express = require("express");
const conn = require("../config")


const router = express.Router();
router.post("/lifeConcierge/api/signUp", (req,res)=>{
  console.log("잘 확인 했습니다.");
  const sqlQuery1 = "insert into userinfo values (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), 0, null);";
  const params1 = [req.body.email, req.body.pw, req.body.name, req.body.gender, req.body.birthday, req.body.job, req.body.hAddr, req.body.cAddr, req.body.disease]
  const query1 = conn.format(sqlQuery1, params1);
  console.log(query1);

  const sqlQuery2 = "insert into userchar values (null, ?, ?, ?, ?, ?, ?, ?);";
  const params2 = [req.body.transpo, req.body.hobby, req.body.food, req.body.drink, req.body.mbti, req.body.fashion, req.body.music]
  const query2 = conn.format(sqlQuery2, params2)
  console.log (query2)
  conn.query(query1, (err, rows)=>{
    if(err) {
      console.log("에러");
      res.json(err);
    }else if (rows.length == 0){
      console.log ("값이 없음")
      res.json(err);
    }else {
      console.log(rows);
      res.json(rows)
    }
  conn.end();
  })
})

router.post("/lifeConcierge/api/logIn",(req,res)=>{
  const email = req.body.email;
  const pw = req.body.pw;
  const sql = 'select * from userinfo where email=? and pw=?';
  console.log(`전달받은 email : ${email}, pw : ${pw}`);
  
  conn.query(sql, [email, pw], (err, rows) => {
    if (err){
      console.log(err);
    } else if (rows.length == 0) {
      console.log('id가 없습니다.');
      res.json("NoneId");
    } else {
      req.session.user = rows[0];
      console.log(req.session.user);
      res.send({rows});
    }
  });
})

router.get("/lifeConcierge/api/logOut", (req,res)=>{
  delete req.session.user;
  res.send(req.session.user);
})

router.get('/lifeConcierge/api/userInfo', (req,res)=>{
  conn.query('select * from userinfo', (err,rows)=>{
    if(!err) {
      res.json(rows);
    }else{
      console.log(err);
    }
  })
})

router.get('/lifeConcierge/api/userChar', (req,res)=>{
  conn.query('select * from userchar', (err,rows)=>{
    if(!err) {
      res.send(rows);
    }else{
      console.log(err);
    }
  })
})

router.get('/lifeConcierge/api/session', (req,res)=>{
  console.log(req.session.user);
  res.send(req.session.user);
})

module.exports = router;