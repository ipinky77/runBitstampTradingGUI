const configuration = require("./config.js")
const BitstampGUIServer = require("bitstamp_trading_gui")

server = new BitstampGUIServer(configuration)

server.run()


