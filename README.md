# TradeZone

A full-stack stock market platform inspired by Zerodha, built with React.js, Node.js, Express.js, and MongoDB. TradeZone combines a public-facing website with a trading dashboard for exploring stocks and managing a simulated portfolio workflow.

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-https://tradezone-frontend-6v41.onrender.com)

## Features

- **User Authentication:** Includes signup and login pages for user access.
- **Stock Market Data:** Displays stock market prices and related price information using a stock market data API.
- **Stock Search:** Search for stocks and explore available market information.
- **Watchlist:** Track selected stocks from the trading dashboard.
- **Buy Order Workflow:** Enter order details such as quantity and price as part of the simulated trading workflow.
- **Order Management:** View placed orders in the Orders section.
- **Holdings and Portfolio:** View holdings and portfolio profit-and-loss information, with holdings updated after a purchase workflow.
- **Positions:** View the Positions section of the dashboard.
- **Funds:** Access the Funds section for account-related information.
- **Multi-Page Website:** Includes Home, Products, Pricing, About, Support, Signup, and Login pages.

## Tech Stack

**Frontend Website:** React.js, JavaScript, Bootstrap

**Trading Dashboard:** React.js, Material UI

**Backend:** Node.js, Express.js, REST APIs

**Database:** MongoDB

**Stock Data Integration:** BharatStock API

**Deployment and Tools:** Render, Git, GitHub

## Project Structure

- `frontend/` — Public-facing website, including home, products, pricing, about, support, signup, and login pages.
- `dashboard/` — Trading dashboard with stock search, watchlist, orders, holdings, positions, and funds sections.
- `backend/` — Express.js server, API routes, and database-related logic.

## Application Workflow

1. Users access the public website and use the available signup or login flow.
2. The frontend and trading dashboard communicate with backend services through API requests.
3. The backend processes requests and interacts with MongoDB where persistence is required.
4. Stock data is retrieved through the stock market data API and displayed in the dashboard.
5. The buy-order workflow updates the order and holdings information supported by the application.

## Try TradeZone

Explore the website and trading dashboard through the live demo.

[![Explore TradeZone](https://img.shields.io/badge/EXPLORE_TRADEZONE-Visit_App-https://tradezone-frontend-6v41.onrender.com)

**Note:** TradeZone is a learning project inspired by stock trading platforms. The order workflow is intended for demonstration and should not be treated as a real brokerage service or used for real-money trading.

## Author

**Soham Chopade**

[![GitHub](https://img.shields.io/badge/View_Profile-181717?style=for-the-badge&logo=github)](https://github.com/Sohamchopade)
