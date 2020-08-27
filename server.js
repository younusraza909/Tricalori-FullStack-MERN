const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Db
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  console.log(`Welcome To Tricalori API`);
});

//DEFINING ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth", require("./routes/users"));
app.use("/api/auth", require("./routes/items"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started At ${PORT}`);
});
