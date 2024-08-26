/**
 * Employees router
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERIC IMPORT
const express = require('express');
const employeeController = require('../controllers/employeeController.js');

// ROUTER DECALRE
const router = express.Router();

// API METHODS
router.get('/getAllEmployee', employeeController.getAllEmployee);
router.get('/getEmployeeDetailsById', employeeController.getEmployeeDetailsById);
router.post('/submitEmployee', employeeController.submitEmployee);
router.delete('/deleteEmployeeById', employeeController.deleteEmployeeById);

module.exports = router;
