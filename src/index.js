const express = require("express");
const app = express();
import configViewEngine from "./configs/viewEngine";
import dotenv from "dotenv";
import initWebRoute from "./route/webRoute";
dotenv.config();
const port = process.env.PORT || 6000;

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
