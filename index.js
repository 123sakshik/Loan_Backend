const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
//const taskRoutes = require('./route/TaskRoute');
//const userRoutes = require('./route/UserRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT||3002;

// Use the cors middleware to enable CORS
app.use(cors());
// Parse JSON requests
app.use(express.json());

// Define associations or any additional model configurations here if needed

// Synchronize the models with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized');

    // Set up routes
   // app.use('/tasks', taskRoutes);
    //app.use('/users', userRoutes);

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error synchronizing the database:', error);
});
















