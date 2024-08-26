/**
 * Cafe shop router
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERIC IMPORT
const express = require('express');
const cafeShopController = require('../controllers/cafeShopController.js');

// ROUTER DECALRE
const router = express.Router();

// API METHODS
router.get('/getAllCafeShop', cafeShopController.getAllCafeShops);
router.get('/getAllCafeShopOptions', cafeShopController.getAllCafeShopsOptions);
router.get('/getCafeShopDetailsById', cafeShopController.getCafeShopDetailsById);
router.post('/createShopCafe', cafeShopController.createShopCafe);
router.put('/updateShopCafe', cafeShopController.updateShopCafe);
router.delete('/deleteShopCafeById', cafeShopController.deleteShopCafeById);

module.exports = router;
