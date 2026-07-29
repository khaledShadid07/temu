const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
     if(!process.env.MONGO_URL){throw new Error("MONGO_URL is missing in .env file!")}

   const conn=  await mongoose.connect(process.env.MONGO_URL)
    console.log(`Mongoose DataBase Connected successfully:${conn.connection.host}🛰️`)
    console.log(" You Are In Good Hand 🔥 🎯")
  }

  catch (error) {
    console.log("MongoDB Connection Failed ❌:", error.message)
    process.exit(1);
   }

}

module.exports=connectDB;