import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Set the maximum number of connections in the pool
      maxPoolSize: 50,
      // Set the minimum number of connections in the pool
      minPoolSize: 2,
      // Set the maximum number of milliseconds a connection can be idle before closing
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`Successfully connected to MongoDB`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
