const path = require('path');


module.exports = {
    entry: './public/js/index.ts',

    mode: "development",
    devtool: "inline-source-map",


    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: 'tslint-loader',
                options: {},
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {onlyCompileBundledFiles: true},
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)?$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png)?$/,
                use: ['file-loader'],
            },
        ]
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['./', 'node_modules'],
        alias: {
            "webix": path.resolve(__dirname, "./node_modules/webix"),
            "@types": path.resolve(__dirname, "./node_modules/@types")
        }
    },


    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js')
    },

};