// mandatory key for defaultProfile
defaultProfile = {
    name: 'your preferred profile name',
    key: 'API key for subaccount from bitstamp used for this profile',
    secret: 'API secret for subaccount from bitstamp used for this profile',
    uniqueID: 'uniqueID for subaccount from bitstamp used for this profile',
    defaultCrypto: 'default crypto', // btc, xrp, xlm etc if unsure check the crypto pairs in the GUI
    defaultCurrency: 'default currency' // usd, eur, gbp, btc etc. if unsure check the crypto pairs in the GUI
}

// if you want to transfer funds between sub accounts
// main is the mandatory key
main = {
    name: 'your preferred profile name',
    key: 'API key for subaccount from bitstamp used for this profile',
    secret: 'API secret for subaccount from bitstamp used for this profile',
    uniqueID: 'uniqueID for subaccount from bitstamp used for this profile',
    defaultCrypto: 'default crypto', // btc, xrp, xlm etc if unsure check the crypto pairs in the GUI
    defaultCurrency: 'default currency' // usd, eur, gbp, btc etc. if unsure check the crypto pairs in the GUI
}

var profiles = { defaultProfile, main }

var configuration = {}
var configGUI = {};
configGUI.server = 'www.bitstamp.net'
configGUI.ws_endpoint = 'wss://ws.bitstamp.net'
configGUI.defaultProfile = defaultProfile
configGUI.profiles = profiles
configGUI.debug = true // set to false if you don't want to see messages in the server window
configGUI.path_bot_thresholds = "bitstampBotThresholds.txt"
configGUI.debugLevel = 1 // can set to 2 to display results from Bitstamp API
configGUI.path_log = "bitstampServerLog.txt"

configuration.gui = configGUI

var configBot = {};
configBot.server = configGUI.server
configBot.ws_endpoint = configGUI.ws_endpoint
configBot.defaultProfile = configGUI.defaultProfile
configBot.debug = true // set to false if you don't want to see messages in the server window
configBot.path_bot_thresholds = configGUI.path_bot_thresholds
configBot.debugLevel = 1
configBot.path_log = "bitstampBotLog.txt"
configBot.executeTrades = false
configBot.heartBeat = 15 // minutes
configBot.thresholdIntervall = 2 // minutes

configuration.bot = configBot

module.exports = configuration
