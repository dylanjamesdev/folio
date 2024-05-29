import mongoose from "mongoose";

const initConnection = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI || "mongodb://data.myinfra.lol:27017/CV")
    .catch((e) => {
      console.log(e);
    });

  return conn;
};

export default initConnection;
