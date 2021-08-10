const version = "2.0.0"
console.log("runBot.js", version)
const getConfiguration = require("bitstamp_trading_tools/config.js")
const BitstampBot = require("bitstamp_trading_tools/bitstampBot.js")

var bot

getConfiguration(__dirname).then(configuration => {
    bot = new BitstampBot(configuration.bot)

    runBot()

}
)



async function runBot() {
    await bot.init()
    await bot.run()
}


