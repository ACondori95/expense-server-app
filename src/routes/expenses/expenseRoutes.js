const express = require("express");
const {
  createExpCtrl,
  fetchAllExpCtrl,
  fetchExpDetailCtrl,
  updateExpCtrl,
  deleteExpCtrl,
} = require("../../controllers/expenses/expenseCtrl");
const authMiddleware = require("../../middlewares/authMiddleware");

const expenseRoutes = express.Router();

expenseRoutes.post("/", authMiddleware, createExpCtrl);
expenseRoutes.get("/", authMiddleware, fetchAllExpCtrl);
expenseRoutes.get("/:id", authMiddleware, fetchExpDetailCtrl);
expenseRoutes.put("/:id", authMiddleware, updateExpCtrl);
expenseRoutes.delete("/:id", authMiddleware, deleteExpCtrl);

module.exports = expenseRoutes;
