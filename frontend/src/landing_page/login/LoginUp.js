import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function LoginUp() {
 
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:3002/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (response.data.success) {
      window.location.href = "http://localhost:3001";
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Login Failed");
  }
};

  return (
    <>
       <style>
{`
  .op {
    width: 700px;
    margin: 50px auto;
    padding: 40px;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .op img {
    width: 130px;
    margin: 0 auto;
  }

  .op h2 {
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    color: #424242;
  }

  .op form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .op input {
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }

  .op button {
    padding: 12px;
    width: 100%;
    background: #387ed1;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .op button:hover {
    background-color: #2f6fb5;
  }

  .login-signup {
    text-align: center;
    color: #666666;
  }
`}
</style>

      <div className="container mt-5 p-5">
        <div className="row">

          <div className="op">

            <img src="media/images/logo.svg" alt="Logo" />
 
            <h2>Login to Zerodha</h2>

<form onSubmit={handleLogin}> 
            <input
                 type="text"
  name="login-email"
  placeholder="Username or email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  autoComplete="new-password"
  required
            />

            <input
        type="password"
  name="login-password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="new-password"
  required
            />

            <button type="submit">
        Login
      </button>
 
            <p style={{textAlign:"center", color:" #666666"}}>Forgot user ID or password?</p>
</form>
          </div>

           <p style={{textAlign:"center", color:" #666666",textDecoration:"none"}}>
  Don't have an account?{" "}
  <Link to="/signup" style={{textDecoration:"none"}}>Sign up for free!</Link>
</p>

          <p style={{ textAlign: "center",
    fontSize: "10px",
    color: "#9b9b9b",
    fontWeight: "300",
    lineHeight: "1.6"}}>Zerodha Broking Limited: Member of NSE, BSE, MCX ‐ SEBI Reg.<br/> no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | <br/>Smart Online Dispute Resolution | SEBI SCORES<br/> 

v3.0.0</p>

        </div>
      </div>
    </>
  );
}

export default LoginUp;