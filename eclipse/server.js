const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res)=>{
  res.send([{
    id:1,
    image:'https://www.placeimg.com/64/64/any/1',
    name:'홍길동',
    birthday:'19961222',
    gender:'남자',
    job:'대학생'
  },
  {
    id:2,
    image:'https://www.placeimg.com/64/64/any/2',
    name:'김여름',
    birthday:'19970112',
    gender:'남자',
    job:'웹디자이너'
  },
  {
    id:3,
    image:'https://www.placeimg.com/64/64/any/3',
    name:'홍장미',
    birthday:'19980617',
    gender:'여자',
    job:'간호사'
  }
  ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));