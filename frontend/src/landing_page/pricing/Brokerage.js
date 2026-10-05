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
               All charges shown on TradeZone are simulated for educational and demonstration purposes.
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>Digital contract notes will be sent via e-mail.</li>
            <li className="text-muted"style={{fontSize:"15px"}}>
               No real brokerage or transaction charges are applied on the platform.
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>
              Order-related charges are displayed only to demonstrate a trading platform's pricing structure.
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>
               Digital order and transaction information is provided for demonstration purposes.
            </li>
            <li className="text-muted"style={{fontSize:"15px"}}>
              TradeZone does not provide real brokerage, investment, or financial services
            </li>
             <li className="text-muted"style={{fontSize:"15px"}}>
               All trading, orders, holdings, and portfolio activities on TradeZone are simulated and do not involve real-money transactions.
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
