const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:
        {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.js'

        },
    plugins: [
        // eslint-disable-next-line new-cap
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),// 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html'// 指定生成的页面的名称
        })
    ],
    mode: 'production',
    module: {
        // eslint-disable-next-line no-sparse-arrays
        rules: [
            {
                test: /\.css$/,
                include: [path.resolve(__dirname,'src/styles'),/node_modules/],
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname,'src/styles'),/node_modules/],
                use: ["style-loader", "css-loader?modules"]
            },

            {test: /\.js$/,
                exclude:/node_modules/,
                enforce:"pre", use: ['babel-loader' ,'eslint-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
    }

}