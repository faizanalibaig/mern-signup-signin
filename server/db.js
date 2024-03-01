const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try { 
        await mongoose.connect(process.env.MONGOOSE_URI, connectionParams); 
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};
