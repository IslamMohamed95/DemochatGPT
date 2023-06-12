require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(`${process.env.DB_PORT}${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code after successful connection
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
