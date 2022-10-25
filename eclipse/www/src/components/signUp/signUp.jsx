// import * as React from 'react';
import { useState } from 'react';
import UserInfo from './userInfo';
import UserChar from './userChar';
import {Box, Stepper, Step, StepLabel, Typography, Button, Container} from '@mui/material';

const steps = ['상세정보', '성향 정보', '데일리 루틴'];

export default function HorizontalLinearStepper() {
  const [inputUserInfo, setInputUserInfo] = useState({
    id:"",
    pw:"",
    name:"",
    gender:"",
    birthday:"",
    job:"",
    hAddr:"",
    cAddr:"",
    disease:""
  });
  const [inputUserChar, setInputUserChar] = useState({
    transpo:"",hobby:"",food:"",drink:"",mbti:"",fashion:"",music:""
  })
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

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
        <Typography sx={{ mt: 2, mb: 1 }}>
          모든 작성이 완료 되었습니다. 
        </Typography>
        <Button variant="outlined" > 제출하기 </Button>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      </Container>
      ) : (
      <Container fixed>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
          <Button
            color="inherit"
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
