import NavBar from './components/NavBar';

import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Calendar from './pages/Calendar';
import Test from './pages/Test';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserInfo from './pages/UserInfo';
import UserChar from './pages/UserChar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const callApi = async () => {
    const response = await fetch("/lifeConcierge/api");
    const body = await response.json();
    return body;
  }
  
  useEffect(()=>{
    callApi()
    .then(res=>{
      dispatch({type:"SESSION", session:res})
    })
    .catch(err=>{console.log(err)})
  });

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/userInfo" element={<UserInfo/>}/>
          <Route path="/userChar" element={<UserChar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
