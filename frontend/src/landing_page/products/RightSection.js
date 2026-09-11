import React from "react";

function RightSection({ imageURL, productName,productStyle, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h3
          style={{
            
            fontWeight: "500",
            color: "#333333",
            marginTop: "0px",
            marginBottom: "20px",
            lineHeight: "1.3",
            ...productStyle
          }}>{productName}</h3>
          
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More  <span style={{ fontSize: "15px" }}>➜</span></a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
