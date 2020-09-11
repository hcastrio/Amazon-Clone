const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51HPyOjFBfJibA50ZAWsWlqjO2qJw1s394VSjxI83trrvmWgidkSAU359n5sjGLfIdIiwyjrTs8Sc3DN0JkyB1Fj000QcsR01hS"
);

// Setting up an API

// - App config

const app = express();

// - Middlewares

app.use(cors({ orgin: true }));
app.use(express.json()); // allows us to send data and pass it in a json format
// - API routes

app.get("/", (request, response) => res.status(200).send("hello world"));

// - Listen command

exports.api = functions.https.onRequest(app); // cloud functions
