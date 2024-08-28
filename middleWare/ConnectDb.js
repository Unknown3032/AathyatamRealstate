const mongoose = require('mongoose');
// import dotenv from 'dote '


const url = process.env.MONGO_URL
const connectDB = async () => {
    await mongoose.connect(url)

        .then(async () => {
            console.log('connected to mongo')
        })

        .catch((err) => {
            console.error('failed to connect with mongo');
            console.error(err);
        });
};

module.exports = connectDB;