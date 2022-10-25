import * as React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Menu, MenuItem} from '@mui/material';

const pages = [{page:"메인",path:'/'}, {page:"일정관리",path:"/calendar"}, {page:"회계관리",path:"/accountManage"}, {page:"유저 정보(개발자 전용)", path:"/userInfo"}, {page:"유저 성향(개발자 전용)", path:"/userChar"}]



// style
const body       = {backgroundColor : '#282c34'               }
const styleDoor  = {backgroundColor : 'red'    , color: 'black'}
const styleService  = {backgroundColor : 'orange' , color: 'black'}
const styleProposal = {backgroundColor : 'yellow'  , color: 'black'}
const stylePresentation = {backgroundColor : 'green'  , color: 'black'}
const styleIntroduction = {backgroundColor : 'blue'  , color: 'black'}




export default function ButtonAppBar2() {
  return (
    <>
    <body style={body}>
        <Link to='/' style={styleDoor}> Door </Link>
        <Link to='/Service' style={styleService}> Service </Link>
        <Link to='/Proposal' style={styleProposal}> Proposal </Link>
        <Link to='/Presentation' style={stylePresentation}> Presentation </Link>
        <Link to='/Introduction' style={styleIntroduction}> Introduction </Link>
    </body>

    </>
)
}
