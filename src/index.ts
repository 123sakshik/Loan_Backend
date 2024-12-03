import express, { Request, Response } from 'express';
import cors from 'cors';
import sequelize from './config/database'; // Assuming sequelize is properly set up in database.ts
// Import your routes if needed
// import taskRoutes from './route/TaskRoute';
// import userRoutes from './route/UserRoute';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '3002', 10); // Default to 3002 if PORT is not defined

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
    // app.use('/users', userRoutes);

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error: Error) => {
    console.error('Error synchronizing the database:', error);
});
