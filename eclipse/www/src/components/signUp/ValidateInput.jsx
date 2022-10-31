import React, { useState } from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export default function ValidationInput({
  label,
  type,
  value,
  maxValue,
  setValue,
  regexCheck,
  successText,
  errorText,
  defaultText,
  form
}) {
  const [isError, setIsError] = useState(true);
  const [helperText, setHelperText] = useState(defaultText);

  const HandleOnChange = (e) => {
    //최대값이 지정되어있으면 value를 저장하지 않는다.
    // if (maxValue && maxValue < e.target.value.length) return;

    setValue({...value, [form]: e.target.value});

    //공백인 경우 defaultText로 바꾼다.
    if (e.target.value === "") {
      setIsError(true);
      return setHelperText(defaultText);
    }

    if (regexCheck) {
      // 정규표현식체크가 통과되면 successText를 송출하고 아니면 errorText를 송출한다
      if (regexCheck.test(e.target.value)) {
        setIsError(false);
        return setHelperText(successText);
      }
      if (!regexCheck.test(e.target.value)) {
        setIsError(true);
        setHelperText(errorText);
      }
    }
  };

  return (
    <>
      <div>{label}</div>
      <TextField
        error={isError}
        // id="standard-error-helper-text"
        helperText={helperText}
        type={type}
        onChange={HandleOnChange}
        value={value}
      />
    </>
  );
}

// ValidationInput.defaultProps = {
//   type: "text",
//   label: "",
//   value: ""
// };

// const Label = styled.span`
//   color: #878787;
//   font-size: 18px;
// `;