const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: process.env.VUE_APP_MOCK_URL,
    assetsDir: 'assets',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
    }
}