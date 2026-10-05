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
           Simple and transparent simulated pricing for a smooth trading experience
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
            Simulated equity delivery
Demonstration of ₹0 brokerage for equity delivery orders.
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
            Simulated intraday and F&O trades
Demonstration of a flat ₹20 or 0.03% (whichever is lower) per simulated order.
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
            Simulated direct mutual funds
Demonstration of ₹0 commissions and DP charges for direct mutual fund investments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
