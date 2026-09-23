import React from "react";

function Hero() {
    return (
        <>
            <style>
                {`
                .supportOp {
                    background-color: #f7f7f7;
                    width: 100%;
                    padding: 50px 0;
                }

                .support-content {
                    width: 80%;
                    margin: auto;
                }

                .support-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    margin-top:20px;
                }

                .support-header h1 {
                    color: #424242;
                    font-size: 48px;
                    font-weight: 600;
                    margin-top:25px ;
                }
 
                .search-box {
                    position: relative;
                    width: 100%;
               
                }

                .search-box i {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #555;
                    font-size: 18px;
                }

                .search-box input {
                    width: 100%;
                    height: 65px;
                    padding: 12px 15px 12px 35px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    outline: none;
                    font-size: 18px;
                    box-sizing: border-box;
                }
                `}
            </style>

            <div className="supportOp">

                <div className="support-content">

                    <div className="support-header">

                        <h1 style={{fontFamily:"Inter,sans-serif",fontWeight: "600",
    color: "#424242",fontSize: "40px"}}>Support Portal</h1>
                    </div>

                    <div className="search-box">

                        <i className="bi bi-search"></i>

                        <input
                            type="text"
                            placeholder="Eg: How do I open my account, How do I activate F&O..."
                        />

                    </div>

                </div>

            </div>
        </>
    );
}

export default Hero;