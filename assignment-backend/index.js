require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const connectedDB = require('./utils/db-connection');
const router = require('./routes/router');


// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use(router);


// mongodb connection
// connectedDB();


// error handler - global


// server
const PORT = 8080;
// app.listen(PORT, () => {
//   console.log('Listening on port ' + PORT);
// });

// // MongoDB connection and Server
connectedDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
});