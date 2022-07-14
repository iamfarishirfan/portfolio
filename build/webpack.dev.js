/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require */

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = require('webpack-merge').merge(require('./webpack.common'), {
    mode: 'development',
    plugins: [new DashboardPlugin()]
});
