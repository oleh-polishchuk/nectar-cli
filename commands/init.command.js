const fs = require('fs');
const { home } = require('../common/utils');

module.exports.run = (options = {}) => {
    const config = options.config || `${home}/.nectar_config`;

    if (!fs.existsSync(config)) {
        fs.writeFileSync(config, JSON.stringify({
            projectDir: `${home}/IdeaProjects/backend/www/app/react/`,
            defaultName: 'BaseComponent1',
            defaultBrand: 'Nectar',
            theme: false,
            scss: true,
            test: true,
        }, null, 2), { flag: 'wx' });
        console.log(`Default config was successfully initialized!`);
        console.log(`${config} `.padEnd(44, "="));
        console.log(fs.readFileSync(config, 'utf8'));
        console.log(`============================================`);
        console.log(`Please update project dir to your own!`)
    }
};
