import React from "react";
import { useNavigate } from "react-router-dom";
function Universe() {


const navigate = useNavigate();
  return (
<> 
    
    <style>
      {`
.btn:hover{
background-color:black;
      }
      `}
    </style>

    <div className="container mt-5">
      <div className="row text-center">

        <h2 style={{
            
            fontWeight: "500",
            color: "#333333",
            marginTop: "0px",
            marginBottom: "20px",
            lineHeight: "1.3",
          }}>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"180px"}}/>
          <br/>
          <br/>
          <p className="text-small text-muted">Our asset management venture<br/>
that is creating simple and transparent index<br/>
funds to help you save for your goals.
</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"style={{width:"180px"}} />
<br/>
          <br/>
          <p className="text-small text-muted">Options trading platform that lets you<br/>
create strategies, analyze positions, and examine<br/>
data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"180px"}}/>
          <br/>
          <br/>
          <p className="text-small text-muted">Investment research platform<br/>
that offers detailed insights on stocks,<br/>
sectors, supply chains, and more.
</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"180px"}}/>
          <br/>
          <br/>
          <p className="text-small text-muted">Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <br/>
          <br/>
          <p className="text-small text-muted">Thematic investing platform<br/>
that helps you invest in diversified<br/>
baskets of stocks on ETFs.
</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"120px"}}/>
          <br/>
          <br/>
          <p className="text-small text-muted">Personalized advice on life<br/>
and health insurance. No spam<br/>
and no mis-selling.
Sign up for free</p>
        </div>
        <button 
          className="p-2 btn btn-primary fs-5 mb-5 btn"
          style={{ width: "20%", margin: "0 auto" }}
       
          onClick={() => navigate("/signup")} >Signup Now
        </button>
      </div>
    </div>
    </>
  );
}

export default Universe;
