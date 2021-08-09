const version = "1.2.0"
console.log("runBot.js", version)
const configuration = require("./config.js")
const BitstampBot = require("bitstamp_trading_tools").BitstampBot

var bot = new BitstampBot(configuration.bot)


async function runBot() {
    await bot.init()
    await bot.run()
}

runBot()


