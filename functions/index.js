const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KaLTASFKFa6j6vPOZ2nZLc4o0UTjPTexIn5JTOxBQ4y72ZDf09KVsd50mfi4MVALRdlNL1rRGdw1oeocGBzJokO00UdjFZEtd"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(`Payment Request Recived Boom!!! for this amount >>> `, total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sybunits of the currency
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-93eed/us-central1/api
