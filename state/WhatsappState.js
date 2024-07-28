let isClientReady = false;

const setClientReady = (ready) => {
    isClientReady = ready;
};

const getClientReady = () => isClientReady;

module.exports = {
    setClientReady,
    getClientReady
};
