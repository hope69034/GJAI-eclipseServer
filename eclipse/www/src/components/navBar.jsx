import * as React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Menu, MenuItem} from '@mui/material';

const pages = [{page:"메인",path:'/main'}, {page:"일정관리",path:"/calendar"}, {page:"회계관리",path:"/accountManage"}, {page:"유저 정보(개발자 전용)", path:"/userInfo"}, {page:"유저 성향(개발자 전용)", path:"/userChar"}]
//font-size: medium | xx-small | x-small | small | large | x-large | xx-large | smaller | larger | length | initial | inherit

// style
/* const body       = {backgroundColor : '#282c34'               } */
const styleDoor  = {    textDecoration:"none", color: 'orange'}
const styleService  = {  textDecoration:"none", color: 'white'}
const styleProposal = {     textDecoration:"none", color: 'orange'}
const stylePresentation = {    textDecoration:"none", color: 'orange'}
const styleIntroduction = {   textDecoration:"none", color: 'orange'}



export default function ButtonAppBar() {




  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [inputValue, setInputValue] = useState({
    id:"",
    pw:""
  })
  const handleOpenClick = () => {
    setOpenLogin(true);
  }
  const handleClose = () => {
    setOpenLogin(false);
  }
  const handleFormSubmit = () => {
    
    setOpenLogin(false);
  }
  const handleInputValue = (e) => {
    if(e.target.name==="id") {
      setInputValue({id:e.target.value, pw:inputValue.pw})
    }else if (e.target.name ==="pw") {
      setInputValue({id:inputValue.id, pw:e.target.value});
    }
  }
  const handleOpenNavMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar>

      <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}>  

 
            
            <MenuIcon/> &nbsp; AI Life Concierge Service 
          </IconButton> 
 
 
          {/* <Link  aria-label="menu" style={styleService} onClick={handleOpenNavMenu}> AI Life Concierge Service </Link>    */}
        {/* <Button onClick={handleOpenNavMenu} style={styleService} >AI Life Concierge Service</Button> */}
        
          <Link to='/' style={styleDoor} onClick={handleCloseNavMenu}>&nbsp;Door&nbsp;</Link>  
  <Link to='/Proposal' style={styleProposal} onClick={handleCloseNavMenu}>&nbsp;Proposal&nbsp;</Link>
  <Link to='/Presentation' style={stylePresentation} onClick={handleCloseNavMenu}>&nbsp;Presentation&nbsp;</Link>
  <Link to='/Introduction' style={styleIntroduction} onClick={handleCloseNavMenu}>&nbsp;Introduction&nbsp;</Link>
          
          


 
 
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseNavMenu}>




        

        
            {pages.map(pageObj=><Link to={pageObj.path} style={{textDecoration:"none", color:"black"}}><MenuItem key={pageObj.page} onClick={handleCloseNavMenu}><Typography>{pageObj.page}</Typography></MenuItem></Link>)}
          </Menu>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          </Typography>
          <Link to="/signUp" style={{textDecoration:"none", color:"white"}}><Button color="inherit">Join</Button></Link>
          <Button color="inherit" onClick={handleOpenClick}>Login</Button>
          <Dialog open={openLogin} onClose={handleClose}>
            <DialogTitle>로그인
              <DialogContent>
                <TextField label="아이디" type="text" name="id" onChange={handleInputValue}></TextField><br/>
                <TextField label="비밀번호" type="password" name="pw" onChange={handleInputValue}></TextField>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" color="primary" component="span" onClick={handleFormSubmit}>로그인</Button>
                <Button variant="outlined" color="primary" component="span" onClick={handleClose}>취소</Button>
              </DialogActions>
            </DialogTitle>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
