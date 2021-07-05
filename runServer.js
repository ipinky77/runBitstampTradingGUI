const version = "1.2.0"
console.log("runServer.js", version)
const configuration = require("./config.js")
const BitstampGUIServer = require("bitstamp_trading_tools")

server = new BitstampGUIServer(configuration.gui)

server.run()


