const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://sudarsan:sudarsan@cluster0.ubtbcec.mongodb.net/?retryWrites=true&w=majority").then(() => {
      console.log("db connected successfully");
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
