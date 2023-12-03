import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import database from './src/config/database.js';
import routes from './src/routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

// Connect to MongoDB
database.connect();

// Define a simple route
routes(app);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

export default app;
