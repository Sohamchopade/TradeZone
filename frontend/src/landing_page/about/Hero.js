import React from "react";

function Hero() {
  return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className="row p-5 mt-5 mb-5">
        <h3
        style={{
         
        textAlign:"center",
          color: "#424242",
          lineHeight: "1.5",
          margin: "0 0 70px",
          letterSpacing: "-0.3px",
        }}>
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h3>
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
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>

        </div>
        <div className="col-6 p-5">
          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#424242",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
