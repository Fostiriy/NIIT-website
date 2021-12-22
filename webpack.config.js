const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/whack-a-mole.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dest')
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
