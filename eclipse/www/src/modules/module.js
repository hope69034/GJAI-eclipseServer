const initialState = {
  session:"",
  snackbar:{
    snackbarToggle:false,
    explain:"",
    severity:""
  },
  progress:{
    progressToggle:false,
  },
  user: {
    userinfo:[]
  }
}
export default (state = initialState, action) =>{
  switch (action.type){
    case "SESSION":
      return {...state, session: action.session};
    case "SNACKBAR/ON":
      return {...state, snackbar: {snackbarToggle: action.snackbar.snackbarToggle, explain: action.snackbar.explain, severity:action.snackbar.severity }};
    case "SNACKBAR/OFF":
      return {...state, snackbar: {...state.snackbar, snackbarToggle: action.snackbar.snackbarToggle}};
    case "PROGRESS/ON":
      return {...state, progress: {...state.progress, progressToggle: action.progress.progressToggle}};
    case "PROGRESS/OFF":
      return {...state, progress: {...state.progress, progressToggle: action.progress.progressToggle}};
    case "USER/USERINFO":
      // console.log("리듀서 실행중");
      return {...state, user: {...state.user, userInfo: action.user.userInfo}};
    default:
      return {...state};
  }
};

