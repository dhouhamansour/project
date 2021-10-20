require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("mongodb connection success")
);
app.use(express.json());
app.use(cors());

app.use("/user", require("./routes/userRoute"));
app.use("/posts", require("./routes/eventRoute"));

app.listen(process.env.PORT, () => console.log("server running"));
