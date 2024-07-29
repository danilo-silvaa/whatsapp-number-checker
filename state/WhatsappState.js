let isClientReady = false;
let qrCode = null;

const setClientReady = (ready) => {
    isClientReady = ready;
};

const getClientReady = () => isClientReady;

const setQrCode = (code) => {
    qrCode = code;
};

const getQrCode = () => qrCode;

module.exports = {
    setClientReady,
    getClientReady,
    setQrCode,
    getQrCode
};
