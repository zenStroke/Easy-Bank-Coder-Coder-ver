const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/script.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        //Asset Modules の出力先の指定
        // assetModuleFilename: 'images/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    // {
                    //     loader: 'sass-loader',
                    //     options: {
                    //         //Prefer `dart-sass`
                    //         implementation: require('sass'),
                    //     },
                    // },
                    'sass-loader'
                ],
            },
            //Asset modules の設定
            // {
            //     //対象とするアセットファイルの拡張子を正規表現で指定
            //     test: /\.(png|svg|jpe?g|gif)$/i,
            //     //画像をコピーして出力
            //     type: 'asset/resource' 
            // }
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devtool:'source-map',
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9000,
    },
};