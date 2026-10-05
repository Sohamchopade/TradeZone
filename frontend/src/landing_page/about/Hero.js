import React from "react";

function Hero() {
  return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className="row p-5 mt-5 mb-5">
        <h4
        style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.7",
          margin: "0 0 70px",
          letterSpacing: "-0.3px",
        }}>
          Built to simplify the stock market experience with modern technology.<br/>
TradeZone brings powerful features together in one simple platform.
        </h4>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p
          style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            TradeZone is a full-stack stock market project inspired by modern trading platforms. It combines a React.js frontend, Node.js and Express.js backend, MongoDB database, REST APIs, and external market data.
          </p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
              TradeZone combines modern technology, intuitive design, and practical features to create a simple and organized stock market experience. The platform brings different trading tools together in one place, making it easier for users to explore stocks, track market information, and manage their simulated trading activities.
          </p>

          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
             Users can explore stocks, manage watchlists, place simulated buy orders, and view their orders, holdings, positions, and funds through the dashboard.
          </p>

        </div>
        <div className="col-6 p-5 mt-3">
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
             TradeZone brings essential stock market features together in one simple and organized platform for users to <a href="" style={{textDecoration:"none"}}>explore</a> and track stocks.
          </p>

          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
             The project connects the frontend, backend, database, REST APIs, and external market data into one complete application.
          </p>

          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            TradeZone is built as a learning and portfolio project to gain practical experience in full-stack development and simulated trading workflows.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
