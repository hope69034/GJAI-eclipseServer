import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Container, TextField, Stack} from '@mui/material';
import axios from 'axios'
import {useSelector} from'react-redux';
import {useState} from 'react';
import ValidateInput from './ValidateInput';
import regex from './regex';

export default ({ inputUserInfo, setInputUserInfo }) => {
  const userInfo = useSelector(state=>state.user.userInfo);
  const addCustomer = () => {
    const url = "/lifeConcierge/api/signUp";
    const data = {
      email:inputUserInfo.email,
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
  const [checkId, setCheckId] = useState({
    error:false,
    helperText:""
  })
  const handleOnChange = (e)=>{
    setInputUserInfo({...inputUserInfo, email:e.target.value})
    
  }
  return(
    <Container sx={{border:"1px solid black", padding:"20px", marginTop:"2%"}}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={2} alignItems="stretch">
          <ValidateInput label="이메일" type="text" form="email" value={inputUserInfo.email} setValue={setInputUserInfo} maxValue={10} regexCheck={regex.email} defaultText="이메일을 입력 해주세요." successText="통과" errorText="올바르지 않는 이메일 형식 입니다."/>
          {/* <TextField defaultValue="내용을 입력해주세요." error={inputUserInfo.email===""?true:false} helperText={inputUserInfo.email===""?"빈 문자입니다. 값을 넣어주세요.":""} label="E-mail" name="email" value={inputUserInfo.email} onChange={handleOnChange}></TextField> */}
          <ValidateInput label="비밀번호" type="password" form="pw" value={inputUserInfo.pw} setValue={setInputUserInfo} maxValue={10} regexCheck={regex.password} defaultText="비밀번호를 입력 해주세요." successText="통과" errorText="영어소문자+숫자+특수문자(_,-)+글자수(6글자 이상, 10글자 이하)"/>
          {/* <TextField error helperText="8자리 이상 특수문자를 포함하여 작성 해 주세요." label="비밀번호" type="password" name="pw" onChange={(e)=>{setInputUserInfo({...inputUserInfo, pw:e.target.value})}}></TextField> */}
          <TextField label="이름" name="name" value={inputUserInfo.name} onChange={(e)=>{setInputUserInfo({...inputUserInfo, name:e.target.value})}}></TextField>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">성별</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="gender"
            >
              <FormControlLabel value="남자" control={<Radio onChange={(e)=>{setInputUserInfo({...inputUserInfo, gender : e.target.value})}}/>} label="남자" />
              <FormControlLabel value="여자" control={<Radio onChange={(e)=>{setInputUserInfo({...inputUserInfo, gender : e.target.value})}}/>} label="여자" />
            </RadioGroup>
          </FormControl>
          <TextField required helperText="생년월일" type="date" name="birthday" value={inputUserInfo.birthday} onChange={(e)=>{setInputUserInfo({...inputUserInfo, birthday:e.target.value})}}></TextField>
          <TextField label="직업" name="job" value={inputUserInfo.job} onChange={(e)=>{setInputUserInfo({...inputUserInfo, job:e.target.value})}}></TextField>
          <TextField label="집주소" name="hAddr" value={inputUserInfo.hAddr} onChange={(e)=>{setInputUserInfo({...inputUserInfo, hAddr:e.target.value})}}></TextField>
          <TextField label="회사주소" name="cAddr" value={inputUserInfo.cAddr} onChange={(e)=>{setInputUserInfo({...inputUserInfo, cAddr:e.target.value})}}></TextField>
          <TextField label="질병" name="disease" value={inputUserInfo.disease} onChange={(e)=>{setInputUserInfo({...inputUserInfo, disease:e.target.value})}}></TextField>
        </Stack>
      </form>
    </Container>
  );
}