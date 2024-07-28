const express = require('express');
const client = require('../config/WhatsappConfig');
const numberRoutes = require('../routes/api');
const { setClientReady } = require('../state/WhatsappState');

const app = express();
app.use(express.json());
app.use('/api', numberRoutes);

client.on('qr', (qr) => {
    console.log('Scan the QR code below:');
    require('qrcode-terminal').generate(qr, { small: true });
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    setClientReady(true);
    console.log('WhatsApp client is ready!');
});

client.on('auth_failure', (msg) => {
    setClientReady(false);
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('disconnected', (reason) => {
    setClientReady(false);
    console.log('Client was logged out', reason);
});

client.initialize();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});