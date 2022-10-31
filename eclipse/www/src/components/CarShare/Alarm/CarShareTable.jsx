import React from 'react'
import {Typography, Button, TableHead, TableBody, Table, TableRow, TableCell} from '@mui/material';

const tableStyle = {minWidth:"80px"}

const carSharUserInfo = [{
  user: "오지현",
  hAddr: "광주 동구 동명동",
  cAddr: "광주 서구 화정동",
  km: "18km",
  accord: "80%",
  fee: "1,300원"
},
{
  user: "김수현",
  hAddr: "광주 북구 효죽로9번길",
  cAddr: "광주 서구 경열로122",
  km: "20km",
  accord: "56%",
  fee: "1,100원"
},
{
  user: "동나연",
  hAddr: "광주 동구 동명동",
  cAddr: "광주 서구 화정동",
  km: "15km",
  accord: "50%",
  fee: "1,500원"
},
{
  user: "나기용",
  hAddr: "광주 동구 중앙로320",
  cAddr: "광주 남구 군분로148번길",
  km: "4.8km",
  accord: "76%",
  fee: "500원"
}
]
const CarShareTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>이름</TableCell>
          <TableCell>출발</TableCell>
          <TableCell>목적지</TableCell>
          <TableCell>거리</TableCell>
          <TableCell>목적지 경로 일치 비율</TableCell>
          <TableCell>제안 비용</TableCell>
          <TableCell>가격 협상</TableCell>
          <TableCell>지도 보기</TableCell>
          <TableCell>승낙 </TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
      {carSharUserInfo.map((userInfo,index)=><TableRow key={index}>
        <TableCell style={tableStyle}>{userInfo.user}</TableCell>
        <TableCell style={tableStyle}>{userInfo.hAddr}</TableCell>
        <TableCell style={tableStyle}>{userInfo.cAddr}</TableCell>
        <TableCell style={tableStyle}>{userInfo.km}</TableCell>
        <TableCell style={tableStyle}>{userInfo.accord}</TableCell>
        <TableCell style={tableStyle}>{userInfo.fee}</TableCell>
        <TableCell><Button variant="contained" color="success" >협상</Button></TableCell>
        <TableCell><Button variant="contained" color="success" >위치</Button></TableCell>
        <TableCell><Button variant="contained" color="success" >승낙</Button></TableCell>
      </TableRow>)}
      </TableBody>
    </Table>
    )
}
export default CarShareTable