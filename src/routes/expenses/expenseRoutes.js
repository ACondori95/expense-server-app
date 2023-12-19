const express = require("express");
const {
  createExpCtrl,
  fetchAllExpCtrl,
  fetchExpDetailCtrl,
  updateExpCtrl,
  deleteExpCtrl,
} = require("../../controllers/expenses/expenseCtrl");

const expenseRoutes = express.Router();

expenseRoutes.post("/", createExpCtrl);
expenseRoutes.get("/", fetchAllExpCtrl);
expenseRoutes.get("/:id", fetchExpDetailCtrl);
expenseRoutes.put("/:id", updateExpCtrl);
expenseRoutes.delete("/:id", deleteExpCtrl);

module.exports = expenseRoutes;
