import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">

        <h3 style={{
           
            fontWeight: "500",
            color: "#333333",
            marginTop: "0px",
            marginBottom: "20px",
            lineHeight: "1.3",
            paddingTop: "80px",
          }}>Technology</h3>

        <p>
          Sleek, modern and intuitive trading platforms
        </p>

        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <span style={{ fontSize: "15px" }}>➜</span>{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
