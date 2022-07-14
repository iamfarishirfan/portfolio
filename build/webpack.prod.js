/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require */

module.exports = require('webpack-merge').merge(require('./webpack.common'), {
    mode: 'production'
});
