const version = "2.0.8"
console.log("runServer.js", version)
const getProfiles = require("bitstamp_trading_tools/config.js")
const BitstampGUIServer = require("bitstamp_trading_tools").BitstampServer

getProfiles(__dirname, "GUI").then(profiles => {
    server = new BitstampGUIServer(profiles)
    server.run()
}
)


