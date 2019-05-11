const fs = require('fs');
const { home } = require("./utils");

module.exports.getConfig = () => {
    const data = fs.readFileSync(`${home}/.nectar_config`, 'utf8');
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error('Config file is corrupted!');
    }
};
