require('dotenv').config(); 
/**
 * Index
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERIC IMPORT
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// ROUTER IMPORT
const cafeShopRoutes = require('./src/routes/cafeShopRoutes.js');
const employeeRoutes = require('./src/routes/employeeRoutes.js');

// APP EXPRESS
const app = express();

// ENABLE CORS FOR ALL ROUTES
app.use(cors());

// USE BODY-PARSER TO PARSE JSON REQUEST BODIES
app.use(bodyParser.json());

// USE ROUTES
app.use('/api/cafes/', cafeShopRoutes);
app.use('/api/employees/', employeeRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
