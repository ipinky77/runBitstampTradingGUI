const version = "2.0.5"
console.log("runBot.js", version)
const getProfiles = require("bitstamp_trading_tools/config.js")
const BitstampBot = require("bitstamp_trading_tools/bitstampBot.js")
var arguments = process.argv;

var config = "configBOT"
if (2 == arguments.length) {
    console.log(`We use default configuration "configBOT"`)

} else {
    config = arguments[2]
    console.log(`We use configuration ${config}`)
}
var bot

getProfiles(__dirname, "BOT").then(profiles => {
    bot = new BitstampBot(profiles[config])

    runBot()

}
)



async function runBot() {
    await bot.init()
    await bot.run()
}