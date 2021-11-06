const version = "2.0.9"
console.log("runBot.js", version)
const getProfiles = require("bitstamp_trading_tools/config.js")
const BitstampBot = require("bitstamp_trading_tools/bitstampBot.js")
var arguments = process.argv;

var config
if (2 == arguments.length) {
    config = 'defaultProfile'
    console.log(`We use default profile`)

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