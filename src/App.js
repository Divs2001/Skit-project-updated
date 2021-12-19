import React from "react";
import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import CoursePage from "./screens/course";
import Rightbar from "./screens/rightbar";

function App() {
  return (
    <div className="App flex">
      {/* <Sidebar /> */}
      <div className="app-content">
        <CoursePage />
      </div>
      {/* <Rightbar /> */}
    </div>
  );
}

export default App;