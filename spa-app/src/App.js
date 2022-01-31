import React from "react";

//import BrowserRouter : BrowserRouter helps to write the Single Page Applications Logic
//import NavLink: NavLink helps to create the hyperlinks (router links) in Single Page Application.

import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import "./App.css";

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          {/* About navlink */}
          <NavLink to="/"
          activeStyle={{color:"green"}}
          style={{marinRight:100}}><strong>About</strong></NavLink>

          {/* Home navlink*/}
          <NavLink to="/home"  activeStyle={{color:"green"}}
          style={{marinRight:100}}><strong>Home</strong></NavLink>

          {/* Contact Navlink */}
          <NavLink to="/contact"  activeStyle={{color:"green"}}
          style={{marinRight:100}}><strong>Contact</strong></NavLink>

          <br></br><br></br>
        <Routes>
          <Route path="/" element={<About/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
          
        </div>
      </Router>
    )
  }
}