import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assests/whitevoids.jpg";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <AppBar position="static" style={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
          {/* Left: Search Icon */}
          <IconButton color="default" style={{ marginLeft: "80px" ,backgroundColor: "rgb(229, 230, 240)"}}>
            <SearchIcon style={{fontSize: "42px"}} />
          </IconButton>

          {/* Center: Logo */}
          <Box style={{ flexGrow: 1, display: "flex", justifyContent: "center",marginLeft:"200px" }}>
            <img src={logo} alt="Logo" style={{ height: "200px", width: "480px" }} />
          </Box>

          {/* Right: Home & Sign In buttons */}
          <Box style={{ marginRight: "120px" }}>
            <Button style={{ color: "black" ,backgroundColor: "rgb(229, 230, 240)", fontSize: "24px", textTransform: "capitalize",padding: "12px"}} component={Link} to="/">Sign in</Button>
            <Button style={{ color: "white", backgroundColor: "#20C997", marginLeft: "10px",fontSize: "24px", textTransform: "capitalize" ,padding: "12px"}} component={Link} to="/signin">Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sticky Sub Navbar */}
      <AppBar position="sticky" style={{ top: 0, backgroundColor: "white", boxShadow: isSticky ? "0px 4px 10px rgba(0, 0, 0, 0)" : "none", transition: "0.3s", display: isSticky ? "flex" : "flex" }}>
        <Toolbar style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button style={{ color: "#137558 ",marginLeft:"4px",textTransform: 'capitalize' , fontSize: "28px"}} component={Link} to="/">Home</Button>
          <Button style={{ color: "#137558 ",marginLeft:"4px",textTransform: 'capitalize' , fontSize: "28px"}} component={Link} to="/whoweserve">Who We Serve</Button>
          <Button style={{ color: "#137558 ",marginLeft:"4px",textTransform: 'capitalize' , fontSize: "28px"}} component={Link} to="/patsol">Patsol</Button>
          <Button style={{ color: "#137558 ",marginLeft:"4px",textTransform: 'capitalize' , fontSize: "28px"}} component={Link} to="/patsol">Events</Button>
          <Button style={{ color: "#137558 ",marginLeft:"4px",textTransform: 'capitalize' , fontSize: "28px"}} component={Link} to="/contact">About Us</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;