const { checkNumberExists } = require('../Services/WhatsappService');

const checkNumber = async (req, res) => {
    let { number } = req.query;

    number = number.replace(/\D/g, '');

    if (!number || number.length < 10 || number.length > 15) {
        return res.status(400).json({ error: 'Número inválido. Certifique-se de incluir o código do país e não usar espaços ou outros caracteres.' });
    }

    try {
        const result = await checkNumberExists(number);
        res.status(result.exists ? 200 : 404).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { checkNumber };