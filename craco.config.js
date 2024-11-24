const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@page': path.resolve(__dirname, 'src/Page'),
            '@routes': path.resolve(__dirname, 'src/Routes'),
            '@Components': path.resolve(__dirname, 'src/Components'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@Context': path.resolve(__dirname, 'src/Context'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@Reduxtoolkit': path.resolve(__dirname, 'src/Reduxtoolkit'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
