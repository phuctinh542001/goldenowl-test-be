import express from 'express';
import cors from 'cors';
import database from './src/config/database/index.js';
import routes from './src/routes/index.js';

// Connect to MongoDB
database.connect();

const app = express();
const PORT = 5050;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({ origin: '*' }));

// Define a simple route
routes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


export default app;