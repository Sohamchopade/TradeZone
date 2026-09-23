require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");

const cookieParser=require("cookie-parser");

const authRoute=require("./Routes/AuthRoute");
const { BharatStock } = require("bharatstock");


const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");

const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;

const uri = process.env.MONGO_URL;

const app = express();



const bharatStock = new BharatStock({
  apiKey: process.env.BHARATSTOCK_API_KEY,
});

 const stockCache = new Map();

const CACHE_TIME = 30 * 60 * 1000;

 
let rateLimitedUntil = 0;

const RATE_LIMIT_COOLDOWN = 60 * 60 * 1000; 

const isRateLimited = () => {
  return Date.now() < rateLimitedUntil;
};

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(cookieParser());

app.use(bodyParser.json());

app.use("/",authRoute);

// app.get("/addHoldings", async (req, res) => {

//   let tempHoldings = [

//     {

//       name: "BHARTIARTL",

//       qty: 2,

//       avg: 538.05,

//       price: 541.15,

//       net: "+0.58%",

//       day: "+2.99%",

//     },

//     {

//       name: "HDFCBANK",

//       qty: 2,

//       avg: 1383.4,

//       price: 1522.35,

//       net: "+10.04%",

//       day: "+0.11%",

//     },

//     {

//       name: "HINDUNILVR",

//       qty: 1,

//       avg: 2335.85,

//       price: 2417.4,

//       net: "+3.49%",

//       day: "+0.21%",

//     },

//     {

//       name: "INFY",

//       qty: 1,

//       avg: 1350.5,

//       price: 1555.45,

//       net: "+15.18%",

//       day: "-1.60%",

//       isLoss: true,

//     },

//     {

//       name: "ITC",

//       qty: 5,

//       avg: 202.0,

//       price: 207.9,

//       net: "+2.92%",

//       day: "+0.80%",

//     },

//     {

//       name: "KPITTECH",

//       qty: 5,

//       avg: 250.3,

//       price: 266.45,

//       net: "+6.45%",

//       day: "+3.54%",

//     },

//     {

//       name: "M&M",

//       qty: 2,

//       avg: 809.9,

//       price: 779.8,

//       net: "-3.72%",

//       day: "-0.01%",

//       isLoss: true,

//     },

//     {

//       name: "RELIANCE",

//       qty: 1,

//       avg: 2193.7,

//       price: 2112.4,

//       net: "-3.71%",

//       day: "+1.44%",

//     },

//     {

//       name: "SBIN",

//       qty: 4,

//       avg: 324.35,

//       price: 430.2,

//       net: "+32.63%",

//       day: "-0.34%",

//       isLoss: true,

//     },

//     {

//       name: "SGBMAY29",

//       qty: 2,

//       avg: 4727.0,

//       price: 4719.0,

//       net: "-0.17%",

//       day: "+0.15%",

//     },

//     {

//       name: "TATAPOWER",

//       qty: 5,

//       avg: 104.2,

//       price: 124.15,

//       net: "+19.15%",

//       day: "-0.24%",

//       isLoss: true,

//     },

//     {

//       name: "TCS",

//       qty: 1,

//       avg: 3041.7,

//       price: 3194.8,

//       net: "+5.03%",

//       day: "-0.25%",

//       isLoss: true,

//     },

//     {

//       name: "WIPRO",

//       qty: 4,

//       avg: 489.3,

//       price: 577.75,

//       net: "+18.08%",

//       day: "+0.32%",

//     },

//   ];

//   tempHoldings.forEach((item) => {

//     let newHolding = new HoldingsModel({

//       name: item.name,

//       qty: item.qty,

//       avg: item.avg,

//       price: item.price,

//       net: item.day,

//       day: item.day,

//     });

//     newHolding.save();

//   });

//   res.send("Done!");

// });

// app.get("/addPositions", async (req, res) => {

//   let tempPositions = [

//     {

//       product: "CNC",

//       name: "EVEREADY",

//       qty: 2,

//       avg: 316.27,

//       price: 312.35,

//       net: "+0.58%",

//       day: "-1.24%",

//       isLoss: true,

//     },

//     {

//       product: "CNC",

//       name: "JUBLFOOD",

//       qty: 1,

//       avg: 3124.75,

//       price: 3082.65,

//       net: "+10.04%",

//       day: "-1.35%",

//       isLoss: true,

//     },

//   ];

//   tempPositions.forEach((item) => {

//     let newPosition = new PositionsModel({

//       product: item.product,

//       name: item.name,

//       qty: item.qty,

//       avg: item.avg,

//       price: item.price,

//       net: item.net,

//       day: item.day,

//       isLoss: item.isLoss,

//     });

//     newPosition.save();

//   });

//   res.send("Done!");

// });

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});

    const tickerMap = {
      HUL: "HINDUNILVR",
      "M&M": "M_M",
    };

    const symbols = holdings.map(
      (holding) =>
        tickerMap[holding.name] || holding.name
    );

    const apiSymbols = [...new Set(symbols)];

    const cacheKey = apiSymbols.sort().join(",");

    let stocks;

    const cachedData = stockCache.get(cacheKey);

    if (
      cachedData &&
      Date.now() - cachedData.timestamp < CACHE_TIME
    ) {
      console.log("Using cached holdings stock data");

      stocks = cachedData.data;

    } else {

      if (isRateLimited()) {
        return res.status(429).json({
          message:
            "BharatStock rate limit active. Please try again later.",
        });
      }

      console.log(
        "Fetching fresh holdings data from BharatStock"
      );

      stocks = await bharatStock.stocks.quotes(apiSymbols);

      stockCache.set(cacheKey, {
        data: stocks,
        timestamp: Date.now(),
      });
    }

    const updatedHoldings = holdings.map((holding) => {

      const apiSymbol =
        tickerMap[holding.name] || holding.name;

      const stock = stocks.find(
        (item) => item.symbol === apiSymbol
      );

      if (!stock || !stock.found) {
        return holding.toObject();
      }

      const netChange =
        ((stock.close - holding.avg) / holding.avg) * 100;

      return {
        ...holding.toObject(),
        price: stock.close,
        net: `${
          netChange >= 0 ? "+" : ""
        }${netChange.toFixed(2)}%`,
        day: `${
          stock.changePct >= 0 ? "+" : ""
        }${stock.changePct.toFixed(2)}%`,
      };
    });

    res.json(updatedHoldings);

  } catch (error) {

    console.error(
      "Holdings API Error:",
      JSON.stringify(error, null, 2)
    );

    if (error.statusCode === 429) {

      rateLimitedUntil =
        Date.now() + RATE_LIMIT_COOLDOWN;

      return res.status(429).json({
        message:
          "BharatStock rate limit reached. Try again later.",
      });
    }

    res.status(500).json({
      message: "Failed to fetch holdings",
    });
  }
});

app.get("/allPositions", async (req, res) => {

  let allPositions = await PositionsModel.find({});

  res.json(allPositions);

});

app.post("/newOrder", async (req, res) => {
  try {
    const name = req.body.name;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const mode = req.body.mode;

    
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    const savedOrder = await newOrder.save();

    
    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({ name });

      if (existingHolding) {
        
        const totalQty =
          existingHolding.qty + qty;

        const totalInvestment =
          existingHolding.qty * existingHolding.avg +
          qty * price;

        const newAvg =
          totalInvestment / totalQty;

        existingHolding.qty = totalQty;
        existingHolding.avg = newAvg;

        await existingHolding.save();

        console.log("HOLDING UPDATED:", existingHolding);
      } else {
        
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price: price,
          net: "0.00%",
          day: "0.00%",
        });

        await newHolding.save();

        console.log("NEW HOLDING CREATED:", newHolding);
      }
    }

    console.log("ORDER SAVED:", savedOrder);

    res.status(200).json({
      success: true,
      message: "Order placed successfully!",
      order: savedOrder,
    });

  } catch (error) {
    console.error("NEW ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
});
  
 app.post("/api/stocks/batch", async (req, res) => {
  try {
    const symbols = req.body.symbols;

    if (!symbols || !Array.isArray(symbols)) {
      return res.status(400).json({
        message: "Symbols array is required",
      });
    }

    const tickerMap = {
      HUL: "HINDUNILVR",
      "M&M": "M_M",
    };

    const apiSymbols = symbols.map(
      (symbol) =>
        tickerMap[symbol.toUpperCase()] ||
        symbol.toUpperCase()
    );

    const cacheKey = apiSymbols.sort().join(",");

    const cachedData = stockCache.get(cacheKey);

    if (
      cachedData &&
      Date.now() - cachedData.timestamp < CACHE_TIME
    ) {
      console.log("Using cached stock data");

      return res.json(cachedData.data);
    }

    if (isRateLimited()) {
      return res.status(429).json({
        message:
          "BharatStock rate limit active. Please try again later.",
      });
    }

    console.log(
      "Fetching fresh stock data from BharatStock"
    );

    const stocks =
      await bharatStock.stocks.quotes(apiSymbols);

    stockCache.set(cacheKey, {
      data: stocks,
      timestamp: Date.now(),
    });

    res.json(stocks);

  } catch (error) {

    console.error(
      "BharatStock Batch Error:",
      JSON.stringify(error, null, 2)
    );

    if (error.statusCode === 429) {

      rateLimitedUntil =
        Date.now() + RATE_LIMIT_COOLDOWN;

      return res.status(429).json({
        message:
          "BharatStock rate limit reached. Try again later.",
      });
    }

    res.status(500).json({
      message: "Failed to fetch stock data",
    });
  }
});


app.listen(PORT, () => {

console.log("App started!");
 mongoose.connect(uri);

console.log("DB started!");

});