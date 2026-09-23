import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import "./SignUp.css";

import { Link } from "react-router-dom";

function SignUp(){
 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:3002/signup", {
      username,
      email,
      password,
    });

    // Signup successful → open Kite Dashboard
    window.location.href = "http://localhost:3001";

  }catch (error) {
  console.log("SIGNUP ERROR:", error.response?.data);

  if (error.response?.data?.message) {
    alert(error.response.data.message);
  } else {
    alert("Signup failed");
  }
}
};
    return(
        <>

        
    <style>
  {`
  .btn:hover{
    background-color:black !important;
  }
`}
</style>

        
<div className="container mt-5 p-5">
<div className="row  p-5">

<h2 style={{
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "36px",
    fontWeight: "500",
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 10px",
  }}>Open a free demat and trading account online</h2>

<h3  style={{
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "20px",
    fontWeight: "400",
    color: "#555555",
    lineHeight: "1.6",
    margin: "10px 0 40px",
  }}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>

<div className="col-6 mt-5 p-5">
<img src="media/images/account_open.svg"style={{width:"600px"}}></img>
 
</div>

<div className="col-1"></div>
    <div className="col-5 mt-5 p-5">
    <h2 style={{
     
    fontFamily: "Arial, sans-serif",
    fontSize: "26px",
    fontWeight: "500",
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 10px",
  }}>Signup now</h2>
    
    <p>Or track your existing application</p>
 <form onSubmit={handleSignup}>
  <div className="op">

    <input
      type="text"
      placeholder="Enter your username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />

    <br />
    <br />

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <br />
    <br />

    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

  </div>

<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

  <button
    type="submit"
    className="btn"
    style={{
      backgroundColor: "#387ed1",
      color: "#ffffff",
      border: "1px solid #387ed1",
       
    }}
  >
    Submit 
  </button>
  <br/>
   <p style={{marginTop:"10px"}}>Already have an account?   <Link to="/login"style={{textDecoration:"none"}}>Login</Link>
    </p>
     </div>
</form>
</div>

<h3 style={{
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    
  
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 10px",
  }}>Already have a demat account?</h3>
  <br/>

<p style={{textAlign:"center"}}>Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500,<a href="" style={{textDecoration:"none",textAlign:"center"}}>learn more.</a></p>

<h3 style={{
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    
   
    color: "#424242",
    lineHeight: "1.5",
     marginTop:"100px"
  }}>Investment options with Zerodha demat account</h3>

 <div className="col-1"></div>

<div className="col-5 mt-5 p-5">

  {/* Stocks */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "50px" }}>
    <img
      src="media/images/stocks-acop.svg"
      style={{ marginRight: "30px" }}
    />

    <div>
      <h4 style={{ margin: "0 0 10px 0", 
    fontFamily: "Inter, sans-serif",
    
  fontSize:"25px",
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 0", }}>Stocks</h4>
      <p style={{ margin: "0", lineHeight: "1.6" }}>
        Invest in all exchange-listed
        <br />
        securities
      </p>
    </div>
  </div>


  {/* Mutual Funds */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="media/images/mf-acop.svg"
      style={{ marginRight: "30px" }}
    />

    <div>
      <h4 style={{ margin: "0 0 10px 0", fontFamily: "Inter, sans-serif",
    
  fontSize:"25px",
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 0px", }}>Mutual funds</h4>
      <p style={{ margin: "0", lineHeight: "1.6" }}>
        Invest in commission-free direct
        <br />
        mutual funds
      </p>
    </div>
  </div>

</div>


<div className="col-1"></div>

<div className="col-5 mt-5 p-5">

  {/* IPO */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "50px" }}>
    <img
      src="media/images/ipo-acop.svg"
      style={{ marginRight: "30px" }}
    />

    <div>
      <h4 style={{ margin: "0 0 10px 0", fontFamily: "Inter, sans-serif",
    
  fontSize:"25px",
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 0",  }}>IPO</h4>
      <p style={{ margin: "0", lineHeight: "1.6" }}>
        Apply to the latest IPOs instantly
        
        via UPI
      </p>
    </div>
  </div>


  {/* Futures & Options */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="media/images/fo-acop.svg"
      style={{ marginRight: "30px" }}
    />

    <div>
      <h3 style={{ margin: "0 0 10px 0", fontFamily: "Inter, sans-serif",
    
  fontSize:"25px",
    color: "#424242",
    lineHeight: "1.5",
    margin: "20px 0 0",  }}>
        Futures & options
      </h3>

      <p style={{ margin: "0", lineHeight: "1.6" }}>
        Hedge and mitigate market risk
        <br />
        through simplified F&O trading
      </p>
    </div>
  </div>

</div>

 <button  className="btn"
 
 style={{
    width: "250px",
  margin:"auto",
  marginTop:"50px",
    padding: "12px 25px",
    backgroundColor: "#387ed1",
    color: "#ffffff",
    border: "1px solid #387ed1",
    borderRadius: "3px",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "Arial, sans-serif",
    letterSpacing: "0.2px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "none",
  }}>Explore Investments</button>

</div>

</div>
        
        </>
    )
}

export default SignUp;