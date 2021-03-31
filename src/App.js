import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import Profile from "./components/profile/Profile";
import "./App.css";

const App = () => {
  // States data
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [dropdownOpen, setOpen] = useState(false);

  // Functions
  const toggle = () => setOpen(!dropdownOpen);
  const toggleSidebar = () => setSideBarOpen(!isSideBarOpen);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggleSideBar={toggleSidebar} isSideBarOpen={isSideBarOpen} />
        <Content toggleSidebar={toggleSidebar} isSideBarOpen={isSideBarOpen} />
      </div>
    </Router>
  );
};

export default App;
