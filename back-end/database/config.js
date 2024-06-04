const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    if (process.env.DB_CNN_STRING === "docker") {
      await mongoose.connect(
        "mongodb://localhost:27017/chatdb?authSource=admin"
      );
    } else {
      await mongoose.connect(process.env.DB_CNN_STRING);
    }

    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - ver  logs");
  }
};

module.exports = {
  dbConnection,
};
