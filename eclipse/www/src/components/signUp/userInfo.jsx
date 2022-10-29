import {Link, Container, TextField, Stack, Button} from '@mui/material';
import axios from 'axios'

export default ({ inputUserInfo, setInputUserInfo }) => {
  const addCustomer = () => {
    const url = "/lifeConcierge/api/signup";
    const formData = new FormData();
    formData.append("id", inputUserInfo);
    const data = {
      id:inputUserInfo.id,
      pw:inputUserInfo.pw,
      name:inputUserInfo.name,
      gender:inputUserInfo.gender,
      birthday:inputUserInfo.birthday,
      job:inputUserInfo.job,
      hAddr:inputUserInfo.hAddr,
      cAddr:inputUserInfo.cAddr,
      disease:inputUserInfo.disease
    }
    return axios.post(url,data);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    addCustomer()
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
  }
  return(
    <Container fixed sx={{border:"1px solid black", p:"20px", mt:"2%"}}>
    <form onSubmit={handleFormSubmit}>
        {/* <input type="text" name="id1" onChange={(e)=>{setTest(e.target.value)}} /> */}
      <Stack spacing={2} alignItems="stretch">
        <TextField error helperText="사용 한 아이디가 있습니다. 다른 아이디를 선택 해 주세요." label="아이디" name="id" value={inputUserInfo.id} onChange={(e)=>{setInputUserInfo({...inputUserInfo, id:e.target.value})}}></TextField>
        <TextField error helperText="8자리 이상 특수문자를 포함하여 작성 해 주세요." label="비밀번호" type="password" name="pw" onChange={(e)=>{setInputUserInfo({...inputUserInfo, pw:e.target.value})}}></TextField>
        <TextField label="이름" name="name" value={inputUserInfo.name} onChange={(e)=>{setInputUserInfo({...inputUserInfo, name:e.target.value})}}></TextField>
        <TextField label="성별" name="gender" value={inputUserInfo.gender} onChange={(e)=>{setInputUserInfo({...inputUserInfo, gender:e.target.value})}}></TextField>
        <TextField label="생년월일" name="birthday" value={inputUserInfo.birthday} onChange={(e)=>{setInputUserInfo({...inputUserInfo, birthday:e.target.value})}}></TextField>
        <TextField label="직업" name="job" value={inputUserInfo.job} onChange={(e)=>{setInputUserInfo({...inputUserInfo, job:e.target.value})}}></TextField>
        <TextField label="집주소" name="hAddr" value={inputUserInfo.hAddr} onChange={(e)=>{setInputUserInfo({...inputUserInfo, hAddr:e.target.value})}}></TextField>
        <TextField label="회사주소" name="cAddr" value={inputUserInfo.cAddr} onChange={(e)=>{setInputUserInfo({...inputUserInfo, cAddr:e.target.value})}}></TextField>
        <TextField label="질병" name="disease" value={inputUserInfo.disease} onChange={(e)=>{setInputUserInfo({...inputUserInfo, disease:e.target.value})}}></TextField>
        <Button variant="contained" color="success" type="submit">테스트 버튼</Button>
      </Stack>
    </form>
  </Container>
  );
}