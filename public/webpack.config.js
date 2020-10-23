const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
        main: '/assets/js/index.js',
        db: '/assets/js/db.js',
    },
    output: {
        path: __dirname + '/public/dist',
        filename: '[name].bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            inject: false,
            name: 'Offline Banking',
            short_name: 'Offline Banking',
            description: 'Banking, now conveniently offline!.',
            background_color: '#01579b',
            theme_color: '#ffffff',
            start_url: '/',
            display: "standalone",
            icons: [
                {
                    src: path.resolve(
                        __dirname,
                        "/assets/img/icon-192x192.png"
                    ),
                    sizes: [192, 512],
                    destination: path.join('assets', 'img'),
                },
            ],
        }),
    ],
};

module.exports = config;