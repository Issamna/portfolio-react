import React, { useState, useEffect } from "react";

const Navbar = () => {
  
  return (

    <nav>
        <div className="sidenav">
            <a href="#top"><img className="nav-logo" src="/images/logo.png" alt="IA" /></a>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
        </div>
    </nav>
  );
};

export default Navbar;