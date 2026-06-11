const mongoose = require('mongoose');
const connectDB = async () => {
    try {
    await mongoose.connect("mongodb+srv://amisha_db_user:amisha123@cluster0.lazbwqv.mongodb.net/TodoManager?appName=Cluster0")
    console.log('MongoDB connected successfully');
    }
    catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
    }
};
module.exports = connectDB;
