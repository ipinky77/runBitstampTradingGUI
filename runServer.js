const version = "1.2.1"
console.log("runServer.js", version)
const getConfiguration = require("bitstamp_trading_tools/config.js")
const BitstampGUIServer = require("bitstamp_trading_tools").BitstampServer

getConfiguration(__dirname).then(configuration => {
    server = new BitstampGUIServer(configuration.gui)
    server.run()
}
)

