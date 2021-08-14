// upgrade profiles

const version = "2.0.5"
console.log("upgradeProfiles", version)
// Import the filesystem module
const fs = require('fs');
const path = require('path');

async function readProfiles(currentPath) {

    return new Promise((resolve, reject) => {
        fs.readdir(currentPath + "/profiles", (err, files) => {
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

async function getProfiles(currentPath) {
    const files = await readProfiles(currentPath);
    // console.log("files", files)
    var profiles = {}
    await Promise.all(files.map(async (file) => {
        // console.log(file)
        const obj = require(currentPath + "/profiles/" + file);
        // console.log(obj)
        profiles[obj.name] = obj
    }));


    return profiles
}

getProfiles(__dirname).then(profiles => {

    // find default profile
    var defaultProfile

    for (const key in profiles) {
        if (profiles[key].hasOwnProperty('defaultProfile')) {

            if (profiles[key].defaultProfile) {
                defaultProfile = profiles[key]
                break
            }
        }
    }

    // upgrade configBOT, add type    
    var bot = profiles.configBOT
    if (bot.hasOwnProperty('type')) {
        console.log("configBOT already migrated")
    } else {
        bot.type = "BOT"
        bot.defaultCrypto = defaultProfile.defaultCrypto
        bot.defaultCurrency = defaultProfile.defaultCurrency
        bot.key = defaultProfile.key
        bot.secret = defaultProfile.secret

        fs.writeFileSync("profiles/" + bot.name + ".json", JSON.stringify(bot, null, 4), function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("configBOT migrated")
    }



    var gui = profiles.configGUI
    if (defaultProfile.hasOwnProperty('type')) {
        console.log("configGUI already migrated")
    } else {
        defaultProfile.type = "GUI"

        defaultProfile.server = gui.server
        defaultProfile.ws_endpoint = gui.ws_endpoint
        defaultProfile.debug = gui.debug
        defaultProfile.debugLevel = gui.debugLevel
        defaultProfile.path_bot_thresholds = gui.path_bot_thresholds
        defaultProfile.path_masks = gui.path_masks
        defaultProfile.path_log = gui.path_log

        fs.writeFileSync("profiles/defaultGUIProfile.json", JSON.stringify(defaultProfile, null, 4), function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("configGUI migrated")
    }



}
)




