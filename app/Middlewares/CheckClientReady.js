const { getClientReady } = require('../../state/WhatsappState');

const checkClientReady = (req, res, next) => {
    if (getClientReady()) {
        next();
    } else {
        res.status(503).json({ error: 'WhatsApp client is not ready. Please try again later.' });
    }
};

module.exports = checkClientReady;