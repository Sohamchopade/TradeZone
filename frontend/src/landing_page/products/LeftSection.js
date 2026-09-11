import React from "react";

function LeftSection({
  imageURL,
  imageStyle,
  productName,
  
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={imageStyle} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3 style={{
          
            fontWeight: "500",
            color: "#333333",
            marginTop: "0px",
            marginBottom: "20px",
            lineHeight: "1.3",
             
          }}>{productName}</h3>

          <p>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <span style={{ fontSize: "15px" }}>➜</span></a>
            <a href={learnMore} style={{ marginLeft: "50px",textDecoration:"none"}}>
              Learn More  <span style={{ fontSize: "15px" }}>➜</span>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{textDecoration:"none"}}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
