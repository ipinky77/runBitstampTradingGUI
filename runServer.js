const version = "1.2.0"
console.log("runServer.js", version)
const configuration = require("./config.js")
const BitstampServer = require("bitstamp_trading_tools").BitstampServer

server = new BitstampServer(configuration.gui)

server.run()


