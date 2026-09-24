const { Schema, model } = require("mongoose");

const incomeExpenseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Income", "Expense"],
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const IncomeExpense = model(
  "incomeExpense",
  incomeExpenseSchema,
  "Income-Expenses",
);

module.exports = IncomeExpense;
