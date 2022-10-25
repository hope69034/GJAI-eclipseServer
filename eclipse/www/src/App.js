// import
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import  compo
/* import Header from './components/00.Header.js' */
import Door from "./components/01.Door";
import Service from "./components/02.Service";
import Proposal from "./components/03.Proposal";
import Presentation from "./components/04.Presentation";
import Introduction from "./components/05.Introduction";

import NavBar from "./components/navBar";
/* import NavBar2 from './components/navBar2'; */

import Main from "./pages/main";
import SignUp from "./pages/signUp";
import Calendar from "./pages/calendar";

import UserInfo from "./pages/userInfo";
import UserChar from "./pages/userChar";

/* import {  BrowserRouter } from 'react-router-dom'; */

function App() {
  return (
    <>
      {/*  <NavBar2/> */}
      {/* <Header></Header> */}

      <NavBar />

      <Routes>

        <Route path="/" element={<Door></Door>}></Route>


        <Route path="/Service" element={<Service></Service>}></Route>
        <Route path="/Proposal" element={<Proposal></Proposal>}></Route>
        <Route path="/Presentation" element={<Presentation></Presentation>}></Route>
        <Route path="/Introduction" element={<Introduction></Introduction>}></Route>

        <Route path="/main" element={<Main></Main>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/calendar" element={<Calendar></Calendar>} />
        <Route path="/userInfo" element={<UserInfo></UserInfo>} />
        <Route path="/userChar" element={<UserChar></UserChar>}></Route>
      </Routes>
    </>
  );
}

export default App;
