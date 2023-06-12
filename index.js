const app = require("./src/app");
require("dotenv").config();
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is connected");
});
