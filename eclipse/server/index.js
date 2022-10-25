const express = require("express");
const bodyParser = require("body-parser");
const router = require('./router/router');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get('/', (req, res)=>{
  console.log("ermalrmleam");
  res.send("환영합니다.");
})

app.use(router);
app.listen(PORT, ()=>{`server is running at : ${PORT}`});