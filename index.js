const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./connection/conn");
const User = require("./model/usermodel");

dotenv.config();

const app = express();
connect();
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  return res.send("hello server");
});
app.post("/api/v1/enroll", async (req, res) => {
  const { name, age, batch } = req.body;
  if (!name || !age || !batch) {
    return res.status(401).json({ error: "Incomplete data" });
  }
  const newuser = await User.create({ name, age, batch });
  if (newuser) {
    return res.status(201).send({ msg: "Enrolled successfully", newuser });
  } else {
    return res.status(400).send({ msg: "Error during enroll" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port number ${process.env.PORT}`);
});
