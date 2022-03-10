import React, {Component, useEffect, useState} from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SigIn"
import SignUp from "./components/auth/SigUp";
import CreateProject from "./components/projects/CreateProjects";
import db from "./config/fbConfig";
import { getDatabase, ref, onValue, query} from "firebase/database";
import { collection, getDocs } from "firebase/firestore/lite";



 function App() {
  
  const [projects, setProjects] = useState([])
  
   
   
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Dashboard />}/>
          <Route path="/project/:id" element={<ProjectDetails />}/>
          <Route path="/signin" element={< SignIn/>} />
          <Route path="/signup" element={< SignUp/>} />
          <Route path="/create" element={< CreateProject/>}/> 
        </Routes>
        {/* {projects.map(project => <Dashboard data={project}/>)} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
