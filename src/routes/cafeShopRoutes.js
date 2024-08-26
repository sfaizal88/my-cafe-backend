const express = require('express');
const router = express.Router();
const cafeShopController = require('../controllers/cafeShopController.js');

router.get('/getAllCafeShop', cafeShopController.getAllCafeShops);
router.get('/getAllCafeShopOptions', cafeShopController.getAllCafeShopsOptions);
router.get('/getCafeShopDetailsById', cafeShopController.getCafeShopDetailsById);
router.post('/submitShopCafe', cafeShopController.submitShopCafe);
router.delete('/deleteShopCafeById', cafeShopController.deleteShopCafeById);

module.exports = router;
