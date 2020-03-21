const fs = require('fs');
const { getConfig, getConfigPath } = require("../common/config");

const ABSOLUTE_CONFIG_PATH = '/Users/olehpolishchuk/.nectar_config';

describe('config', () => {
    describe('getConfig', () => {
        test('should log an error if config not exists', () => {
            console.error = jest.fn();
            if (fs.existsSync(ABSOLUTE_CONFIG_PATH)) {
                fs.unlinkSync(ABSOLUTE_CONFIG_PATH);
            }

            const config = getConfig();
            expect(console.error).toHaveBeenCalledWith('Config file is corrupted!');
        });

        test('should return valid object if config exists', () => {
            const testConfigObject = {
                projectDir: '/IdeaProjects/react/',
                theme: false,
                scss: true,
            };

            if (fs.existsSync(ABSOLUTE_CONFIG_PATH)) {
                fs.unlinkSync(ABSOLUTE_CONFIG_PATH);
            }
            fs.writeFileSync(ABSOLUTE_CONFIG_PATH, JSON.stringify(testConfigObject, null, 2), { flag: 'wx' });

            const config = getConfig();
            expect(config).toEqual(testConfigObject);
        });
    });

    describe('getConfigPath', () => {
        test('should return config path if option provided', () => {
            const testConfigPath = 'test/config/path';

            const path = getConfigPath({ config: testConfigPath });
            expect(path).toBe(testConfigPath);
        });

        test('should return default config path', () => {
            const path = getConfigPath();
            expect(path).toBe('/Users/olehpolishchuk/.nectar_config');
        });
    })
});