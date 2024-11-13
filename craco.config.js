const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@page': path.resolve(__dirname, 'src/Page'),
            '@routes': path.resolve(__dirname, 'src/Routes'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@context': path.resolve(__dirname, 'src/Context'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
