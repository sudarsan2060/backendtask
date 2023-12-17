const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.url).then(() => {
      console.log("db connected successfully");
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
