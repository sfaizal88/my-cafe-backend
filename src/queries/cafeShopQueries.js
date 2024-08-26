const SELECT_ALL_CAFE_SHOP= 'SELECT c.id, c.name, c.description, c.location, COUNT(e.id) AS total_employees FROM Cafes c LEFT JOIN Employees e ON c.id = e.cafe_shop_id GROUP BY c.id;'

const SELECT_CAFE_SHOP_BY_ID = 'SELECT c.id, c.name, c.description, c.location, COUNT(e.id) AS total_employees FROM Cafes c LEFT JOIN Employees e ON c.id = e.cafe_shop_id WHERE c.id = ? GROUP BY c.id;';

const DELETE_CAFE_SHOP_BY_ID = 'DELETE FROM Cafes WHERE id = ?';

const SELECT_ALL_CAFE_SHOP_OPTIONS = 'SELECT id as value, name as label FROM Cafes';

const INSERT_CAFE_SHOP = `
    INSERT INTO Cafes (id, name, description, location, date_created)
    VALUES (?, ?, ?, ?, ?)
`;

const UPDATE_CAFE_SHOP_BY_ID = `
    UPDATE Cafes
    SET name = ?, description = ?, location = ?, date_updated = ?
    WHERE id = ?
`;

module.exports = {
    SELECT_ALL_CAFE_SHOP,
    SELECT_CAFE_SHOP_BY_ID,
    DELETE_CAFE_SHOP_BY_ID,
    INSERT_CAFE_SHOP,
    UPDATE_CAFE_SHOP_BY_ID,
    SELECT_ALL_CAFE_SHOP_OPTIONS
};
