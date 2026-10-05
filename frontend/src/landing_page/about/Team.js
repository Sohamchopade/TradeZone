

import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top mt-5">
        <h2 className="text-center "  
        style={{
         
          color: "#424242",
          lineHeight: "1.5",
          margin: "0 0 70px",
          letterSpacing: "-0.3px",
          marginTop:"30px"
        }}>The Project</h2>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/image.png"
            style={{ width: "90%", borderRadius:"10px"}}
          />
          <h4 className="mt-5" style={{marginBottom:"10px"}}>TradeZone Dashboard</h4>
          
          <h6>Trading & Portfolio Platform</h6>
        </div>
        <div className="col-6 p-3">
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
             TradeZone brings stock discovery, watchlists, orders, holdings, positions, and funds together in one trading dashboard.
          </p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            The dashboard connects the frontend with backend services, REST APIs, and database operations to create a complete full-stack application.
          </p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>Built as a learning and portfolio project.</p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
