/**
 * Created by ubuntu on 5/7/18.
 */
const path =require('path');
module.exports = {
    entry: path.resolve(__dirname, 'entry.js'), //编译输入的 index.js 文件
    output: {
        path: path.resolve(__dirname, 'dist'), //编译输出的静态资源路径
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style!css" },
            {
                test:  /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","react"]
                }
            }
        ]
    },
    mode: 'production'
};