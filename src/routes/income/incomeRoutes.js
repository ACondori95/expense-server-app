const express = require("express");
const {
  createIncCtrl,
  fetchAllIncCtrl,
  fetchIncDetailCtrl,
} = require("../../controllers/income/incomeCtrl");

const incomeRoute = express.Router();

incomeRoute.post("/", createIncCtrl);
incomeRoute.get("/", fetchAllIncCtrl);
incomeRoute.get("/:id", fetchIncDetailCtrl);

module.exports = incomeRoute;
