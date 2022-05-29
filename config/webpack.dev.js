// eslint-disable-next-line import/no-extraneous-dependencies
const {merge} = require("webpack-merge");
const webpackConfig = require("./webpack.common")

module.exports = merge(webpackConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        hot: true,
    }
});
