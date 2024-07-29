const express = require('express');
const qrcode = require('qrcode');
const client = require('../config/WhatsappConfig');
const apiRoutes = require('../routes/api');
const webRoutes = require('../routes/web');
const { setClientReady, setQrCode } = require('../state/WhatsappState');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', webRoutes);

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);

    qrcode.toDataURL(qr, (err, url) => {
        if (err) {
            console.error('Failed to convert QR code to data URL:', err);
            return;
        }
        
        setQrCode(url.split(',')[1]);
    });
});

client.on('ready', () => {
    setClientReady(true);
    console.log('WhatsApp client is ready!');
});

client.on('auth_failure', (msg) => {
    setClientReady(false);
    setQrCode(null);
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('disconnected', (reason) => {
    setClientReady(false);
    setQrCode(null);
    console.log('Client was logged out', reason);
});

client.initialize();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});