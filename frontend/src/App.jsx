import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>        
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<SignUp/>}/>

        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
