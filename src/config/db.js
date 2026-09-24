const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const { DB_HOST } = process.env;
    await mongoose.connect(DB_HOST);
    console.log("Database connection successful");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
