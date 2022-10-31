import React,{useState} from 'react'
import {Paper, Button, Dialog, DialogContent, DialogActions, DialogTitle, Typography} from '@mui/material';
import CarShareTable from './CarShareTable';

const Alarm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Paper style={{margin:"auto"}}>
      <Button vairant="contained" color="success" onClick={handleOpen}> 알림 : 주변에 자동차 쉐어 하고 싶은 사람이 있습니다. </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          자동차 쉐어 알림
        <Typography>주변에 자동차 쉐어 하고 싶은 사람이 있습니다.</Typography>
        </DialogTitle>
        <DialogContent>
          <CarShareTable/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>5분뒤 다시 알림</Button>
          <Button variant="outlined" color="success" onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  )
}

export default Alarm