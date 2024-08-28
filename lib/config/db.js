import mongoose from "mongoose";

const ConnectDB = async () => {
  await mongoose.connect(process.env.NEXT_PUBLIC_DB_URI);
  console.log("db connected");
};

export default ConnectDB;
