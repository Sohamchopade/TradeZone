import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center mt-5">
        <h2  style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.5",
         marginTop:"50px",
          letterSpacing: "-0.3px",
        }}>Pricing</h2>
        <h3 className="text-muted mt-3 fs-5"  style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.5",
          margin: "0 0 70px",
          letterSpacing: "-0.3px",
        }}>
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h2   style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.5",
          
          letterSpacing: "-0.3px",
        }}>Free equity delivery</h2>
        <br/>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" />
          <h2  style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.5",
          
          letterSpacing: "-0.3px",
        }}>Intraday and F&O trades</h2>
           <br/>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h2  style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.5",
          
          letterSpacing: "-0.3px",
        }}>Free direct MF</h2>
           <br/>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
