const express = require('express');
const router = express.Router();
const { getQrCode, getClientReady } = require('../state/WhatsappState');

router.get('/qr', (req, res) => {
    if (getClientReady()) {
        res.send('O cliente WhatsApp já está logado. Não é necessário código QR.');
    } else {
        const qrCode = getQrCode();
        if (qrCode) {
            res.send(`<img src="data:image/png;base64,${qrCode}" />`);
        } else {
            res.send('QR code não disponível. Tente novamente mais tarde.');
        }
    }
});

module.exports = router;
