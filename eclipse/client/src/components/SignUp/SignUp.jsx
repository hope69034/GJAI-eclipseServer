import { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import UserChar from './UserChar';
import axios from 'axios';
import {Box, Stepper, Step, StepLabel, Button, Container} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
const steps = ['상세정보', '성향 정보'];
export default function HorizontalLinearStepper() {

  useEffect(()=>{
    callApi()
    .then((res)=>{
      dispatch({type:"USER/USERINFO", user:{userInfo:res}});
    })
    .catch((err)=>{console.log(err)})
  },[])

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputUserInfo, setInputUserInfo] = useState({
    email:"",pw:"",name:"",gender:"",birthday:"",job:"",hAddr:"",cAddr:"",disease:""
  });
  const [inputUserChar, setInputUserChar] = useState({
    transpo:"",hobby:"",food:"",drink:"",mbti:"",fashion:"",music:""
  })
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

    
  const callApi = async ()=>{
    const response = await fetch('/lifeConcierge/api/userInfo');
    const body = await response.json();
    return body;
  }

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isAllNotDefined = (obj) => {
    for (let i of Object.values(obj)) {
      if(i == false) {
        return false
      }
    }
    return true;
  }

  const handleFormSubmit = (e) => {
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
      disease:inputUserInfo.disease,
      transpo:inputUserChar.transpo,
      hobby:inputUserChar.hobby,
      food:inputUserChar.food,
      drink:inputUserChar.drink,
      mbti:inputUserChar.mbti,
      fashion:inputUserChar.fashion,
      music:inputUserChar.music,
    }
    if (isAllNotDefined(data)) {
      dispatch({type:"PROGRESS/ON", progress:{progressToggle:true}});
      axios.post(url, data)
      .then((res)=>{
        console.log(res);
        dispatch({type:"PROGRESS/OFF", progress:{progressToggle:false}});
        navigate('/');
        dispatch({type:"SNACKBAR/ON", snackbar:{snackbarToggle:true, explain:"회원가입이 성공적으로 완료 되었습니다.", severity:"success"}});
      })
      .catch((err)=>{
        console.log(err);
        dispatch({type:"PROGRESS/OFF", progress:{progressToggle:false}});
      })
    } else {
      dispatch({type:"SNACKBAR/ON", snackbar:{snackbarToggle:true, explain:"비어 있는 값이 있습니다. 다시 입력 해 주세요,", severity:"error"}});
    }
  }

  return (
    <Box sx={{ width: '100%' , mt:'2%', mb:'2%'}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} completed={false}>
              <StepLabel {...labelProps} >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ?<UserInfo inputUserInfo={inputUserInfo} setInputUserInfo={setInputUserInfo}/>: <UserChar inputUserChar={inputUserChar} setInputUserChar={setInputUserChar}/>}
      {activeStep === steps.length ? (
      <Container fixed>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: 'auto' }} />
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            모든 작성이 완료 되었습니다. 
          </Typography> */}
          {/* <Button variant="contained" onClick={handleCheck} sx={{mr:"5px"}}> 체크하기 </Button> */}
          <Button variant="contained" onClick={handleFormSubmit} sx={{mr:"5px"}}> 제출하기 </Button>
          <Button variant="outlined" onClick={handleReset}>Reset</Button>
        </Box>
      </Container>
      ) : (
      <Container fixed>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Container>
      )}
    </Box>
  );
}
