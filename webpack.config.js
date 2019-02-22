const path = require('path');

module.exports = {
    entry: './public/js/index.ts',

    mode: "development",
    devtool: "inline-source-map",

    resolve: {
        extensions: ['.js', '.ts'],
        modules: ['./', 'node_modules'],
        alias: {
            "webix/debug": path.resolve(__dirname, "./node_modules/webix/webix_debug")
        }
    },
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

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js')
    },

};