const client = require('../../config/WhatsappConfig');

const checkNumberExists = async (number) => {
    try {
        const numberId = await client.getNumberId(number);
        return { exists: !!numberId };
    } catch (error) {
        console.log('Error checking number: ' + error.message);
        throw new Error('Error checking number');
    }
};

module.exports = { checkNumberExists };
