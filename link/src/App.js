import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";
import Home from "./components/Home";
import Signin from "./components/subHome/Signin";
import Register from "./components/subHome/Register";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Search from "./components/Search";


function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [logContainer, setLogContainer] = useState(false);
  const [mainComponent,setMainComponent] = useState(false);
  const [username,setUsername] = useState();
  const [isSearch,setIsSearch] = useState(false);

  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{setUserLogin}}
      >
        <Navbar login={userLogin} setMainComponent={setMainComponent} mainComponent={mainComponent} username={username} isSearch={isSearch} setIsSearch={setIsSearch} />
        <Routes>
          <Route exact path="/" element={<Home space={logContainer} setMainComponent={setMainComponent}  setIsSearch={setIsSearch} /> } />
          <Route exact path="/signin" element={<Signin space="true"/> } />
          <Route exact path="/signup" element={<Register space="true" /> } />
          <Route exact path="/search" element={<Search space="true" isSearch={isSearch} setIsSearch={setIsSearch}/> } />
          <Route exact path="/:username" element={<Main setMainComponent={setMainComponent} setUsername={setUsername} isSearch={isSearch} setIsSearch={setIsSearch}/> } />
        </Routes>
        <Footer/>
        <ToastContainer theme="dark" />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;