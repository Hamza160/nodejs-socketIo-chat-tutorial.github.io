module.exports = {
    generateMessage: (from, text) => {
        return {
            from,
            text,
            createdAt: new Date().getTime()
        };
    },
    generateLocationMessage: (from, latitude, longitude) => {
        return {
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}`,
            createdAt: new Date().getTime()
        };
    }
};
