const mysql = require("mysql");
module.exports = mysql.createConnection({
  host:"database-2.c7gpv2et9juo.us-east-1.rds.amazonaws.com",
  user:"admin",
  password:"eclipse2",
  port:3306,
  database:"eclipse1"
});

