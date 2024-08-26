const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController.js');

router.get('/getAllEmployee', employeeController.getAllEmployee);
router.get('/getEmployeeDetailsById', employeeController.getEmployeeDetailsById);
router.post('/submitEmployee', employeeController.submitEmployee);
router.delete('/deleteEmployeeById', employeeController.deleteEmployeeById);

module.exports = router;
