/**
 * Employee controller
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERIC IMPORT
const helper = require('../utils/helper.js');
const db = require('../config/dbConfig');
const queries = require('../queries/employeeQueries.js');

// DECLARE LOCAL VARIABLE
let employees = require('../data/employee.js');

// GET API
exports.getAllEmployee = async (req, res) => {
    // res.json({ok: true, data: employees});
    try {
        const [results] = await db.query(queries.SELECT_ALL_EMPLOYEE);
        res.status(200).json({ ok: true, data: results });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};

// GET API BY ID
exports.getEmployeeDetailsById = async (req, res) => {
    const id = req.query.id;
    /* const employee = employees.find(c => c.id === id);
    if (employee) {
        res.json({ok: true, data: employee});
    } else {
        res.status(404).json({ ok: false, message: "Employee not found" });
    } */
    try {
        const [results] = await db.query(queries.SELECT_EMPLOYEE_BY_ID, [id]);
        if (results.length === 0) {
            return res.status(404).json({ ok: false, message: 'Employee not found' });
        }
        res.status(200).json({ ok: true, data: results[0] });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};

// POST/PUT
exports.submitEmployee = async (req, res) => {
    const now = new Date();
    let { id, cafe_shop_id, email_address, gender, name, phone_number } = req.body;
    console.log("cafe_shop_id: ", cafe_shop_id);
    /*if (id) {
        employees = employees.map(item => {
            if (item.id === id) {
                return {
                    ...item, 
                    name,
                    email_address,
                    phone_number,
                    gender,
                    cafe_shop_id,
                }
            }
        });
    } else {
        const now = new Date();
        const newEmployee = {
            id: helper.generateUniqueCode(),
            name,
            email_address,
            phone_number,
            gender,
            cafe_shop_id,
            job_start_date: now.toDateString()
        };
        employees.push(newEmployee);
    }
    res.status(201).json({
        ok: true, 
        message: "Employee added successfully",
    });*/
    try {
        if (!cafe_shop_id) {
            cafe_shop_id = null;
        }
        if (id) {
            const [results] = await db.query(queries.UPDATE_EMPLOYEE_BY_ID, [name, email_address, phone_number, gender, cafe_shop_id, now, id]);
            if (results.affectedRows === 0) {
                return res.status(404).json({ ok: false, message: 'Employee not found' });
            }
            res.status(200).json({ ok: true, message: 'Employee updated successfully' });
        } else {
            const id = helper.generateUniqueCode();
            const [results] = await db.query(queries.INSERT_EMPLOYEE, [id, name, email_address, phone_number, gender, cafe_shop_id, now, now]);
            res.status(201).json({ ok: true, message: 'Employee added successfully' });
        }
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};

// DELETE API
exports.deleteEmployeeById = async (req, res) => {
    const id = req.query.id;
    /*const index = employees.findIndex(c => c.id === id);

    if (index !== -1) {
        employees.splice(index, 1);
        res.json({ ok: true, message: "Employee deleted successfully" });
    } else {
        res.status(404).json({ ok: false, message: "Employee not found" });
    } */

    try {
        const [results] = await db.query(queries.DELETE_EMPLOYEE_BY_ID, [id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ ok: false, message: 'Employee not found' });
        }
        res.status(200).json({ ok: true, message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};