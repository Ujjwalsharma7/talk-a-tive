import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to mongodb: ", error);
  }
};

export default connectToMongoDB;
