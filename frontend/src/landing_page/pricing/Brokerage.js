import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">

     
        <div className="col-8 p-4"style={{paddingLeft:"10px"}}>
          <a href="" style={{ textDecoration: "none",display: "block",
      marginLeft: "10px"}}>
            <h3 style={{fontSize:"25px"}}>Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <br/>
      

            <li className="text-muted"style={{fontSize:"15px"}}>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>Digital contract notes will be sent via e-mail.</li>
            <li className="text-muted"style={{fontSize:"15px"}}>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" ,fontSize:"25px"}}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
  

      </div>
    </div>
  );
}

export default Brokerage;
