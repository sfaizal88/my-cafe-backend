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
        console.log(results);
        res.status(200).json({ ok: true, data: results });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// GET API FOR OPTIONS
exports.getAllCafeShopsOptions = async (req, res) => {
    // res.json({ok: true, data: cafeShop});
    try {
        const [results] = await db.query(queries.SELECT_ALL_CAFE_SHOP_OPTIONS);
        console.log(results);
        res.status(200).json({ ok: true, data: results });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// GET API BY ID
exports.getCafeShopDetailsById = async (req, res) => {
    const id = req.query.id;
    /* const cafe = cafeShop.find(c => c.id === id);
    if (cafe) {
        res.json({ok: true, data: cafe});
    } else {
        res.status(404).json({ ok: false, message: "Cafe shop not found" });
    } */
    try {
        const [results] = await db.query(queries.SELECT_CAFE_SHOP_BY_ID, [id]);
        if (results.length === 0) {
            return res.status(404).json({ ok: false, message: 'Cafe shop not found' });
        }
        res.status(200).json({ ok: true, data: results[0] });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// POST/PUT
exports.submitShopCafe = async (req, res) => {
    const now = new Date();
    const { id, name, description, location } = req.body;
    
    /* if (id) {
        cafeShop = cafeShop.map(item => {
            if (item.id === id) {
                return {
                    ...item, 
                    name,
                    description,
                    location,
                }
            }
        });
    } else {
        const newCafe = {
            id: uuidv4(),
            name,
            description,
            location,
            total_employees: 0 // Initial default value for total_employees
        };
        cafeShop.push(newCafe);
    }
    res.status(201).json({
        ok: true, 
        message: "Cafe shop added successfully",
    });*/

    try {
        if (id) {
            const [results] = await db.query(queries.UPDATE_CAFE_SHOP_BY_ID, [name, description, location, now, id]);
            if (results.affectedRows === 0) {
                return res.status(404).json({ ok: false, message: 'Cafe shop not found' });
            }
            res.status(200).json({ ok: true, message: 'Cafe shop updated successfully' });
        } else {
            const [results] = await db.query(queries.INSERT_CAFE_SHOP, [uuidv4(), name, description, location, now]);
            res.status(201).json({ ok: true, message: 'Cafe shop added successfully' });
        }
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
};

// DELETE API
exports.deleteShopCafeById = async (req, res) => {
    const id = req.query.id;
    /* const index = cafeShop.findIndex(c => c.id === id);
    if (index !== -1) {
        cafeShop.splice(index, 1);
        res.json({ ok: true, message: "Cafe shop deleted successfully" });
    } else {
        res.status(404).json({ ok: false, message: "Cafe shop not found" });
    }*/
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