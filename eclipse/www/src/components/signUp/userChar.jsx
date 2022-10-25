import {Container, TextField, Stack} from '@mui/material';
export default ({inputUserChar, setInputUserChar}) => {
  return(
    <Container fixed sx={{border:"1px solid black", p:"20px", mt:"2%"}}>
    <Stack spacing={2} alignItems="stretch">
      <TextField label="교통수단" name="transpo" value={inputUserChar.transpo} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
      <TextField label="취미" name="hobby" value={inputUserChar.hobby} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
      <TextField label="선호음식" name="food" value={inputUserChar.food} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
      <TextField label="선호음료" name="drink" value={inputUserChar.drink} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
      <TextField label="MBTI" name="mbti" value={inputUserChar.mbti} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
      <TextField label="선호패션" name="fashion" value={inputUserChar.fashion} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
      <TextField label="선호음악" name="music" value={inputUserChar.music} onChange={(e)=>{setInputUserChar({...inputUserChar, name:e.target.value})}}></TextField>
    </Stack>
  </Container>
  );
}