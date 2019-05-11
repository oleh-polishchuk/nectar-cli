const fs = require('fs');
const { home } = require('../common/utils');

module.exports.run = (options = {}) => {
    const config = options.config || `${home}/.nectar_config`;

    if (!fs.existsSync(config)) {
        fs.writeFileSync(config, JSON.stringify({
            projectDir: `${home}/IdeaProjects/backend/www/app/react/`,
            defaultName: 'BaseComponent1',
            defaultBrand: 'Bundle',
            theme: false,
            scss: true,
        }, null, 2), { flag: 'wx' });
        console.log(`Default config was successfully initialized!`);
    }
};
