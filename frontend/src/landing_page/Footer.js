 import React from "react";

function Footer() {
  return (
    <>
       <style>
  {`
    .zerodha-footer {
      background-color: rgb(250, 250, 250);
      color: #555;
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 50px;
    }

    .footer-container {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 45px 50px 40px;
}

    /* ================= TOP FOOTER ================= */

    .footer-top {
  display: grid;
  grid-template-columns: 300px 220px 220px 220px 220px;
  column-gap: 5px;
  align-items: start;
  width: 100%;
}

    /* ================= BRAND ================= */

    .footer-brand {
      width: 260px;
    }

    .footer-logo {
      width: 170px;
      height: auto;
      display: block;
      margin-bottom: 18px;
    }

    .footer-copy {
      font-size: 14px;
      line-height: 1.7;
      color: #666;
      margin: 0;
    }

    /* ================= SOCIAL ICONS ================= */

    .footer-social-row {
      display: flex;
      align-items: center;
      gap: 22px;
      margin-top: 20px;
    }

    .footer-social-row a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: #666;
      text-decoration: none;
    }

    .footer-social-row svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    .footer-social-row a:hover {
      color: #387ed1;
    }

    .footer-divider {
      border: 0;
      border-top: 1px solid #ddd;
      width: 170px;
      margin: 22px 0;
    }

    /* ================= APP BUTTONS ================= */

    .footer-apps {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 22px;
    }

    .footer-apps img {
      width: 110px;
      height: auto;
      display: block;
    }

    /* ================= COLUMNS ================= */

    .footer-column {
      width: 180px;
      padding: 0;
      margin: 0;
    }

    .footer-column h3 {
      margin: 0 0 22px 0;
      padding: 0;
      color: #222;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.2;
    }

    .footer-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-column li {
      list-style: none;
      margin: 0 0 16px 0;
      padding: 0;
    }

    .footer-column a {
      display: block;
      padding: 0;
      margin: 0;
      color: #555;
      text-decoration: none;
      font-size: 14px;
      line-height: 1.5;
      white-space: nowrap;
    }

    .footer-column a:hover {
      color: #387ed1;
    }

    /* ================= BOTTOM TEXT ================= */

    .footer-bottom {
      margin-top: 45px;
      padding-top: 25px;
      border-top: 1px solid #eee;
      color: #8a8a8a;
      font-size: 10px;
      line-height: 1.75;
    }

    .footer-bottom p {
      margin: 0 0 18px;
    }

    .footer-bottom a {
      color: #387ed1;
      text-decoration: none;
    }

    /* ================= RESPONSIVE ================= */

    @media (max-width: 1100px) {
      .footer-top {
        grid-template-columns: 240px 160px 160px 160px 160px;
        column-gap: 5px;
      }

      .footer-brand {
        width: 240px;
      }

      .footer-column {
        width: 160px;
      }
    }

    @media (max-width: 850px) {
      .footer-top {
        grid-template-columns: 1fr 1fr;
        gap: 35px;
      }

      .footer-brand {
        width: 100%;
        grid-column: span 2;
      }

      .footer-column {
        width: 100%;
      }
    }

    @media (max-width: 500px) {
      .footer-top {
        grid-template-columns: 1fr;
      }

      .footer-brand {
        grid-column: span 1;
      }

      .footer-column {
        width: 100%;
      }

      .footer-column a {
        white-space: normal;
      }

      .footer-apps {
        flex-wrap: wrap;
      }
    }
  `}
</style>

      <footer className="zerodha-footer">
        <div className="footer-container">

          {/* ================= TOP FOOTER ================= */}

          <div className="footer-top">

            {/* ================= BRAND ================= */}

            <div className="footer-brand">

              <img
                src="media/images/logo.svg"
                alt="Zerodha"
                className="footer-logo"
              />

              <p className="footer-copy">
                © 2010 - 2026, Zerodha Broking Ltd.
                <br />
                All rights reserved.
              </p>

              {/* FIRST SOCIAL ROW */}

              <div className="footer-social-row">

                {/* X */}
                <a href="#" aria-label="X">
                  <svg viewBox="0 0 24 24">
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.46 22H3.34l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2zm-1.1 17.9h1.73L8.26 4h-1.8L17.8 19.9z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M13.5 22v-8h2.75l.41-3.13H13.5v-2c0-.91.27-1.53 1.58-1.53h1.69V4.54c-.29-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23v2.23H7.42V14h2.77v8h3.31z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.1 2h9.8A5.1 5.1 0 0 1 22 7.1v9.8a5.1 5.1 0 0 1-5.1 5.1H7.1A5.1 5.1 0 0 1 2 16.9V7.1A5.1 5.1 0 0 1 7.1 2zm-.2 2A3.1 3.1 0 0 0 4 7.1v9.8A3.1 3.1 0 0 0 7.1 20h9.8a3.1 3.1 0 0 0 3.1-3.1V7.1A3.1 3.1 0 0 0 16.9 4H6.9zm9.95 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24">
                    <path d="M5.1 3.5A2.1 2.1 0 1 1 5.1 7.7 2.1 2.1 0 0 1 5.1 3.5zM3.3 8.7h3.6V21H3.3V8.7zM9.2 8.7h3.4v1.68h.05c.47-.89 1.62-2.03 3.34-2.03 3.57 0 4.23 2.35 4.23 5.41V21h-3.6v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.67-2.46 3.39V21H9.2V8.7z" />
                  </svg>
                </a>

              </div>

              <hr className="footer-divider" />

              {/* SECOND SOCIAL ROW */}

              <div className="footer-social-row">

                {/* YouTube */}
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.7V8.3l6.4 3.7-6.4 3.7z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a href="#" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.5 3.5A11.7 11.7 0 0 0 12.15 0 11.7 11.7 0 0 0 2 17.58L.5 23.5l6.06-1.5A11.8 11.8 0 0 0 12.14 24h.01C18.64 24 24 18.64 24 12.15c0-3.46-1.35-6.7-3.5-8.65zM12.15 21.9c-1.8 0-3.57-.48-5.1-1.4l-.37-.22-3.6.9.96-3.5-.24-.38a9.73 9.73 0 0 1-1.49-5.15c0-5.36 4.36-9.72 9.73-9.72 2.6 0 5.04 1.01 6.87 2.84a9.66 9.66 0 0 1 2.85 6.88c0 5.36-4.36 9.75-9.61 9.75z" />
                    <path d="M17.5 14.5c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1-1.03 2.45s1.05 2.84 1.2 3.03c.15.2 2.06 3.15 4.99 4.42.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.11.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a href="#" aria-label="Telegram">
                  <svg viewBox="0 0 24 24">
                    <path d="M21.9 3.2 2.7 10.6c-1.31.51-1.3 1.22-.24 1.53l4.93 1.54 1.9 5.78c.23.63.12.88.77.88.51 0 .74-.23 1.02-.5l2.38-2.31 4.95 3.65c.91.5 1.56.24 1.79-.84L23.43 4.4c.34-1.36-.52-1.98-1.53-1.2zM8.12 13.31l10.92-6.89c.54-.33 1.03-.15.63.21l-8.84 7.99-.34 3.61-2.37-4.92z" />
                  </svg>
                </a>

              </div>

              {/* APP STORE BUTTONS */}

              <div className="footer-apps">
 

              </div>

            </div>


            {/* ================= ACCOUNT ================= */}

            <div className="footer-column">

              <h3>Account</h3>

              <ul>
                <li><a href="#">Open demat account</a></li>
                <li><a href="#">Minor demat account</a></li>
                <li><a href="#">NRI demat account</a></li>
                <li><a href="#">HUF demat account</a></li>
                <li><a href="#">Commodity</a></li>
                <li><a href="#">Dematerialisation</a></li>
                <li><a href="#">Fund transfer</a></li>
                <li><a href="#">MTF</a></li>
              </ul>

            </div>


            {/* ================= SUPPORT ================= */}

            <div className="footer-column">

              <h3>Support</h3>

              <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Support portal</a></li>
                <li><a href="#">How to file a complaint?</a></li>
                <li><a href="#">Status of your complaints</a></li>
                <li><a href="#">Bulletin</a></li>
                <li><a href="#">Circular</a></li>
                <li><a href="#">Z-Connect blog</a></li>
                <li><a href="#">Downloads</a></li>
              </ul>

            </div>


            {/* ================= COMPANY ================= */}

            <div className="footer-column">

              <h3>Company</h3>

              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Philosophy</a></li>
                <li><a href="#">Press & media</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Zerodha Cares (CSR)</a></li>
                <li><a href="#">Zerodha.tech</a></li>
                <li><a href="#">Open source</a></li>
                <li><a href="#">Referral program</a></li>
              </ul>

            </div>


            {/* ================= QUICK LINKS ================= */}

            <div className="footer-column">

              <h3>Quick links</h3>

              <ul>
                <li><a href="#">Upcoming IPOs</a></li>
                <li><a href="#">Brokerage charges</a></li>
                <li><a href="#">Market holidays</a></li>
                <li><a href="#">Economic calendar</a></li>
                <li><a href="#">Calculators</a></li>
                <li><a href="#">Markets</a></li>
                <li><a href="#">Sectors</a></li>
                <li><a href="#">Gift Nifty</a></li>
              </ul>

            </div>

          </div>


          {/* ================= BOTTOM INFORMATION ================= */}

          <div className="footer-bottom">

            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
              #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
              J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
              any complaints pertaining to securities broking please write to{" "}
              <a href="#">complaints@zerodha.com</a>, for DP related to{" "}
              <a href="#">dp@zerodha.com</a>.
            </p>

            <p>
              Procedure to file a complaint on{" "}
              <a href="#">SEBI SCORES/SMARTODR</a>: Register on SCORES portal &
              SMARTODR. Mandatory details for filing complaints on SCORES:
              Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              <a href="#">Smart Online Dispute Resolution</a> |{" "}
              <a href="#">Grievances Redressal Mechanism</a>
            </p>

            <p>
              Investments in securities market are subject to market risks;
              read all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE.{" "}
              <a href="#">NSE broker factsheet</a>
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers/depository
              participants. Receive information of your transactions directly
              from Exchange/Depositories on your mobile/email at the end of the
              day. Issued in the interest of investors. KYC is one time
              exercise while dealing in securities markets - once KYC is done
              through a SEBI registered intermediary (broker, DP, Mutual Fund
              etc.), you need not undergo the same process again when you
              approach another intermediary." Dear Investor, if you are
              subscribing to an IPO, there is no need to issue a cheque. Please
              write the Bank account number and sign the IPO application form
              to authorize your bank to make payment in case of allotment. In
              case of non allotment the funds will remain in your bank account.
              As a business we don't give stock tips, and have not authorized
              anyone to trade on behalf of others. If you find anyone claiming
              to be part of Zerodha and offering such services, please{" "}
              <a href="#">create a ticket here.</a>
            </p>

             

          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;