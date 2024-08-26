/**
 * Helper
 * @author - Faizal 
 * @date - 25th August 2024
 */
// GENERATE UNIQUE CODE FOR EMPLOYEE
exports.generateUniqueCode = () => {
    const prefix = 'UI';
    const length = 7;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = prefix;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}