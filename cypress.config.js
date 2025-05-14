const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')


function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve(`cypress.env.${file}.json`)

    return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {

            const file = config.env.configFile || 'qauto'

            return getConfigurationByFile(file)
        },
    }
});



