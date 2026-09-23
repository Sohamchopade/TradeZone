

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
        }}>People</h2>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>Playing basketball is his zen.</p>
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
