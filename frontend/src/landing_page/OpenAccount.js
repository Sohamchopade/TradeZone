import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
 
const navigate = useNavigate();
  return (
<> 
    <style>
  {`
  .btn:hover{
    background-color:black !important;
  }
`}
</style>

    <div className="container p-5 mb-5 mt-5">
      <div className="row text-center ">
        <h3  style={{
           
            fontWeight: "500",
            color: "#424242",
            letterSpacing: "-0.5px",
            lineHeight: "1.3",
            margin: "0 0 18px",
          }} className="mt-5">Open a Zerodha account</h3>
        <br/>
          <br/>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <br/>
          <br/>
            <br/>

        <button className="btn"
         style={{
    width: "200px",
    margin: "0 auto",
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
  }}
          
       onClick={() => navigate("/signup")}  >
          Sign up Now
        </button>
      </div>
    </div>
     </>
  );
   
}



export default OpenAccount;
