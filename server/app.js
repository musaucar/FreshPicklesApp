const express = require("express");
const app = express();
require("./database/dbConnection");
const allRoutes = require("./routes/user_routes");
const errorHandlingMW = require("./error-middlewares/error-middlewares.js");
const axios = require('axios')
const cors = require('cors');
const sweetalert = require('sweetalert2')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors())

app.use("/api", allRoutes);


app.use(errorHandlingMW);


const port = 3000;
app.listen(port, () => {
  console.log("Connected");
});
