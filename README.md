# Addis song manager

## Project Setup

### Prerequisites
- Node.js v16+
- npm/yarn
- Git

### Installation
``bash
git clone [your-repo-url]
cd [project-folder]
npm install

# webpack config

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })]
};


# Used MirageJs for CRUD operation 
So it doesn't work on production
