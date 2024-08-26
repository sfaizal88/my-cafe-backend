require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const cafeShopRoutes = require('./src/routes/cafeShopRoutes.js');
const employeeRoutes = require('./src/routes/employeeRoutes.js');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Use body-parser to parse JSON request bodies
app.use(bodyParser.json());

// Use routes
app.use('/api/cafes/', cafeShopRoutes);
app.use('/api/employees/', employeeRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
