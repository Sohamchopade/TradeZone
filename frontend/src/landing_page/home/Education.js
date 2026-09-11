import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5">
          <img src="media/images/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6 mt-5">
          <h2  style={{
           
            fontWeight: "500",
            color: "#424242",
            letterSpacing: "-0.5px",
            lineHeight: "1.3",
            margin: "0 0 18px",
          }}>Free and open market education</h2>

          <p>
            Varsity, the largest online stock market education book in the world<br/>
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <span style={{ fontSize: "15px" }}>➜</span><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community<br/> in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <span style={{ fontSize: "15px" }}>➜</span><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
