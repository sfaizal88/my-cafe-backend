const SELECT_ALL_EMPLOYEE= 'SELECT c.name as cafe_shop_name, e.cafe_shop_id, e.id, e.name, e.email_address, e.phone_number, e.gender, e.job_start_date, e.date_created, e.date_updated FROM Cafes c LEFT JOIN Employees e ON c.id = e.cafe_shop_id GROUP BY c.id;';

const SELECT_EMPLOYEE_BY_ID = 'SELECT c.name as cafe_shop_name, e.cafe_shop_id, e.id, e.name, e.email_address, e.phone_number, e.gender, e.job_start_date, e.date_created, e.date_updated FROM Cafes c LEFT JOIN Employees e ON c.id = e.cafe_shop_id and e.id = ? GROUP BY c.id;';

const DELETE_EMPLOYEE_BY_ID = 'DELETE FROM Employees WHERE id = ?';

const INSERT_EMPLOYEE = `
    INSERT INTO Employees (id, name, email_address, phone_number, gender, cafe_shop_id, job_start_date, date_created)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

const UPDATE_EMPLOYEE_BY_ID = `
    UPDATE Employees
    SET name = ?, email_address = ?, phone_number = ?, gender = ?, cafe_shop_id = ?, date_updated = ?
    WHERE id = ?
`;

module.exports = {
    SELECT_ALL_EMPLOYEE,
    SELECT_EMPLOYEE_BY_ID,
    DELETE_EMPLOYEE_BY_ID,
    INSERT_EMPLOYEE,
    UPDATE_EMPLOYEE_BY_ID,
};
