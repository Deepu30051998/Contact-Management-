const express = require("express");
const errorHandler = require("./middlware/errorhandler");


const app = express();
app.use(express.json());

const { connectMongoDB } = require("./connection");

connectMongoDB("mongodb://127.0.0.1:27017/Contact-Management");

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
