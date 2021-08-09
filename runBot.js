const version = "1.3.0"
console.log("runBot.js", version)
const getConfiguration = require("bitstampTradingTools/config.js")
const BitstampBot = require("bitstampTradingTools/bitstampBot.js")

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


