// Import the filesystem module
const fs = require('fs');
const path = require('path');

async function getProfiles() {

    return new Promise((resolve, reject) => {
        fs.readdir(__dirname + "/profiles", (err, files) => {
            if (err)
                console.log(err);
            else {
                // filter only the json files
                const EXTENSION = '.json';
                const targetFiles = files.filter(file => {
                    return path.extname(file).toLowerCase() === EXTENSION;
                });

                // console.log("targetFiles", targetFiles)
                resolve(targetFiles)
            }
        })
    })
}

async function readProfiles() {
    const files = await getProfiles();
    // console.log("files", files)
    var profiles = {}
    await Promise.all(files.map(async (file) => {
        // console.log(file)
        const obj = require(__dirname + "/profiles/" + file);
        // console.log(obj)
        profiles[obj.name] = obj
        if (obj.defaultProfile) {
            profiles['defaultProfile'] = obj
        }
    }));

    return profiles
}


async function getConfiguration() {
    var profiles = await readProfiles()

    // console.log(profiles)

    var configuration = {}

    var configBot = profiles.configBOT
    configBot.defaultProfile = profiles.defaultProfile
    configuration.bot = configBot

    var configGUI = profiles.configGUI
    configGUI.defaultProfile = profiles.defaultProfile
    delete profiles.configGUI
    configGUI.profiles = profiles
    configuration.gui = configGUI

    return configuration
    // console.log(configuration)
}

module.exports = getConfiguration




