const fs = require('fs');
const argv = require('yargs').argv;
const { home } = require('./common/utils');

const action = argv._[ 0 ];
const instance = argv._[ 1 ];
const name = argv._[ 2 ];

const options = {
    theme: !!argv.theme,
    scss: !!argv.scss,
    brand: !!argv.brand,
    config: !!argv.config,
};

if (action === 'init' || !fs.existsSync(`${home}/.nectar_config`)) {
    return require('./commands/init.command').run(options);
}

if (action === 'reinit') {
    return require('./commands/reinit.command').run(options);
}

if (action === 'generate' && instance === 'component') {
    return require('./commands/generate-component.command').run(name, options);
}

if (action === 'remove' && instance === 'component') {
    return require('./commands/remove-component.command').run(name, options);
}

if (action === 'generate' && instance === 'page') {
    return require('./commands/generate-page.command').run(name, options);
}

console.log(`Usage: ${argv.$0} [action] [instance] [name]`);
console.log(`Usage: ${argv.$0} generate component HomeSlider`);
console.log(`Usage: ${argv.$0} generate component HomeSlider --theme=true --scss=false`);
