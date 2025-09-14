import mongose from "mongoose";

export const connectDB = async () => {

  try {
    
    const conn = await mongose.connect(process.env.MONGO_URI); 
    console.log(`Database Connected ${conn.connection.host}`);

  } catch (error) {
    
    console.log("Error connecting to database", error);
    process.exit(1);  // exit with failure

  }

};
