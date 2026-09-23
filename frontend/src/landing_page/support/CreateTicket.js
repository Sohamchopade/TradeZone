import React, { useState } from "react";

function CreateTicket() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <style>
                {`

                   @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
                .selection-box {
                    width: 70%;
                    border: 1px solid #ddddddbc;
                    margin-top: 50px;
                    magin:auto;
                    margin-left:150px;
                }

                .selection-header {
                    height: 65px;
                    display: flex;
                    align-items: center;
                    border: 2px solid #222;
                    cursor: pointer;
                    background-color: white;
                }

                .plus-box {
                    width: 75px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-right: 1px solid #dddddded;
                    background-color:#f8f8f8;
                }

                .plus-icon {
                    font-size: 28px;
                    color: #387ed1;
                }

                .selection-title {
                    margin-left: 20px;
                    font-size: 20px;
                    color: #424242;
                    font-family: "Inter", sans-serif;
                    font-weight: 500;
                }

                .arrow {
                    margin-left: auto;
                    margin-right: 25px;
                    font-size: 24px;
                    color: #387ed1;
                }

                .selection-content {
                    padding: 10px 40px;
                    background-color: white;
                }

                .selection-content ul {
                    margin: 0;
                    padding-left: 35px;
                }

                .selection-content li {
                    padding: 12px 0;
                    color: #387ed1;
                    font-size: 20px;
                    font-family: "Inter", sans-serif;
                }

                .selection-content li::marker {
                    color: #387ed1;
                }

                .selection-content a {
                    color: #387ed1;
                    text-decoration: none;
                }

                .selection-content a:hover {
                    text-decoration: underline;
                }

              
                `}
            </style>

            <div className="selection-box">

                <div
                    className="selection-header"
                    onClick={() => setOpen(!open)}
                >

                    <div className="plus-box">
                        <i
                            className={
                                open
                                    ? "bi bi-dash-circle plus-icon"
                                    : "bi bi-plus-circle plus-icon"
                            }
                        ></i>
                    </div>

                    <div className="selection-title">
                        Account Opening
                    </div>

                    <i
                        className={
                            open
                                ? "bi bi-chevron-up arrow"
                                : "bi bi-chevron-down arrow"
                        }
                    ></i>

                </div>

                {open && (
                    <div className="selection-content">

                        <ul>

                            <li>
                                <a href="#">Resident individual</a>
                            </li>

                            <li>
                                <a href="#">Minor</a>
                            </li>

                            <li>
                                <a href="#">Non Resident Indian (NRI)</a>
                            </li>

                            <li>
                                <a href="#">
                                    Company, Partnership, HUF and LLP
                                </a>
                            </li>

                            <li>
                                <a href="#">Glossary</a>
                            </li>

                        </ul>

                    </div>
                )}

            </div>



              <div className="selection-box">

                <div
                    className="selection-header"
                    onClick={() => setOpen(!open)}
                >

                    <div className="plus-box">
                        <i
                            className={
                                open
                                    ? "bi bi-dash-circle plus-icon"
                                    : "bi bi-plus-circle plus-icon"
                            }
                        ></i>
                    </div>

                    <div className="selection-title">
                         Your Zerodha Account
                    </div>

                    <i
                        className={
                            open
                                ? "bi bi-chevron-up arrow"
                                : "bi bi-chevron-down arrow"
                        }
                    ></i>

                </div>

                {open && (
                    <div className="selection-content">

                        <ul>

                            <li>
                                <a href="#">Your Profile</a>
                            </li>

                            <li>
                                <a href="#">Account modification</a>
                            </li>

                            <li>
                                <a href="#">Client Master Report (CMR) and Depository Participant (DP)</a>
                            </li>

                            <li>
                                <a href="#">
                                    Nomination
                                </a>
                            </li>

                            <li>
                                <a href="#">Transfer and conversion of securities</a>
                            </li>

                        </ul>

                    </div>
                )}

            </div>


              <div className="selection-box">

                <div
                    className="selection-header"
                    onClick={() => setOpen(!open)}
                >

                    <div className="plus-box">
                        <i
                            className={
                                open
                                    ? "bi bi-dash-circle plus-icon"
                                    : "bi bi-plus-circle plus-icon"
                            }
                        ></i>
                    </div>

                    <div className="selection-title">
                        Kite
                    </div>

                    <i
                        className={
                            open
                                ? "bi bi-chevron-up arrow"
                                : "bi bi-chevron-down arrow"
                        }
                    ></i>

                </div>

                {open && (
                    <div className="selection-content">

                        <ul>

                            <li>
                                <a href="#">IPO</a>
                            </li>

                            <li>
                                <a href="#">Trading FAQs</a>
                            </li>

                            <li>
                                <a href="#">Margin Trading Facility (MTF) and Margins</a>
                            </li>

                            <li>
                                <a href="#">
                                    Charts and orders
                                </a>
                            </li>

                            <li>
                                <a href="#">Alerts and Nudges</a>
                            </li>

                        </ul>

                    </div>
                )}

            </div>
        </>
    );
}

export default CreateTicket;