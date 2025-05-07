const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html", // Output file name
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/i, // Apply Babel to JavaScript files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"], // Use the preset-env preset
                    },
                },
            },
            {
                test: /\.css$/i, // Handle CSS files
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i, // Handle HTML files
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
                type: "asset/resource",
            },
        ],
    },
};