const DevMode = process.env.NODE_ENV !== "production"
const webpack = require("webpack")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const UglifyJS = require("uglifyjs-webpack-plugin")
const optimizeCSS = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: DevMode ? 'development' : 'production',
    entry: "./src/index.js",
    devServer: {
        contentBase: "./build",
        port: 8080
    },

    optimization: {
        minimizer: [
            new UglifyJS({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new optimizeCSS({})
        ]
    },

    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },

    plugins: [
        new MiniCSSExtractPlugin({ filename: "style.css" }),
        new CopyWebpackPlugin([
            { context: "src/", from: "**/*.html" },
            { context: "src/", from: "imgs/**/*" }
        ])
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCSSExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        }]
    }
}