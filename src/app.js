import express from 'express';
import cors from 'cors';
import database from './config/database/index.js';
import routes from './routes/index.js';

// Connect to MongoDB
database.connect();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: '*' }));

// Define a simple route
routes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
