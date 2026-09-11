import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (

    <> 
 
    <style>
      {`
.btn:hover{
background-color:black;
      }
      `}
    </style>

    <div className="container p-5 mb-5 mt-5">
      <div className="row text-center mt-5">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"style={{width:"70%",margin:"auto"}}
        />
        <h3 
           style={{
           
            fontWeight: "500",
            color: "#424242",
            letterSpacing: "-0.5px",
            lineHeight: "1.3",
            margin: "0 0 18px",
          }}
          >Invest in everything</h3>
        <p  style={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#666666",
            marginTop: "0px",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
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
       onClick={() => navigate("/signup")} >
          Signup Now
        </button>
      </div>
    </div>
    </>
  );
}

export default Hero;
