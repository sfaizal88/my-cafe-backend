/**
 * Cafe shop controller
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERIC IMPORT
const { v4: uuidv4 } = require('uuid');
const db = require('../config/dbConfig');
const queries = require('../queries/cafeShopQueries.js');

// DECLARE LOCAL VARIABLE
let cafeShop = require('../data/cafeShop.js');

// GET API
exports.getAllCafeShops = async (req, res) => {
    // res.json({ok: true, data: cafeShop});
    try {
        const [results] = await db.query(queries.SELECT_ALL_CAFE_SHOP);
        res.status(200).json({ ok: true, output: results });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// GET API BY ID
exports.getCafeShopDetailsById = async (req, res) => {
    const id = req.query.id;
    try {
        const [results] = await db.query(queries.SELECT_CAFE_SHOP_BY_ID, [id]);
        if (results.length === 0) {
            return res.status(404).json({ ok: false, message: 'Cafe shop not found' });
        }
        res.status(200).json({ ok: true, output: results[0] });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// POST
exports.createShopCafe = async (req, res) => {
    const now = new Date();
    const { name, description, location } = req.body;
    try {
        const [results] = await db.query(queries.INSERT_CAFE_SHOP, [uuidv4(), name, description, location, now]);
        res.status(201).json({ ok: true, message: 'Cafe shop added successfully' });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};


// PUT
exports.updateShopCafe = async (req, res) => {
    const now = new Date();
    const { id, name, description, location } = req.body;
    try {
        const [results] = await db.query(queries.UPDATE_CAFE_SHOP_BY_ID, [name, description, location, now, id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ ok: false, message: 'Cafe shop not found' });
        }
        res.status(200).json({ ok: true, message: 'Cafe shop updated successfully' });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// DELETE API
exports.deleteShopCafeById = async (req, res) => {
    const id = req.query.id;
    try {
        const [results] = await db.query(queries.DELETE_CAFE_SHOP_BY_ID, [id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ ok: false, message: 'Cafe shop not found' });
        }
        res.status(200).json({ ok: true, message: 'Cafe shop deleted successfully' });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};