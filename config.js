manualTrading = {
    name: 'Manual Trading', // preferably your Bitstamp sub account name for easy reference
    key: 'SzDYyV7m5FwTXeTTrW2hu9YJwZS8ASo4',
    secret: 'HhP9RXKxGDnlZdIYwYVfsCzmytUIY1WV',
    uniqueID: '48669399',
    defaultCrypto: 'BTC',
    defaultCurrency: 'USD'
}

defaultAccount = {
    name: 'Trading Bot',
    key: 'ILiw3HPy4QhW0Oa5WhWQDoCki6qjZOlZ',
    secret: 'UA9kcSox0fdSGIXYKe5Lx4OnzFtbyBZk',
    uniqueID: '22031722',
    defaultCrypto: 'xrp',
    defaultCurrency: 'USD'
}

t = {
    name: 'T1',
    key: 'vxeek40E14b6FYrZu9fU4CwByvUs7goS',
    secret: 'iKOvhS844XDRCeRbbbDm2r6rRgNUYdoQ',
    defaultCrypto: 'XRP',
    defaultCurrency: 'BTC'
}

reserve = {
    name: 'Reserve',
    key: 'UQyT1Fjlhz5rCc8DvKErZ0gy5EmB4Sra',
    secret: 'GHT5MhTVjyBvoXUiPqOYLWYyvhIaPVul',
    uniqueID: '21855811',
    defaultCrypto: 'XLM',
    defaultCurrency: 'GBP'
}

main = {
    name: 'Main account',
    key: 'q3hTZ01woanJxpjkY37D0a13FBCjHKbJ',
    secret: 'Ti52vYuYWKwElvWhLuOiEZPntbDFgWCV',
    defaultCrypto: 'xrp',
    defaultCurrency: 'usd'

}
var accounts = { defaultAccount, manualTrading, t, reserve, main }

var configuration = {};
configuration.server = 'www.bitstamp.net'
configuration.ws_endpoint = 'wss://ws.bitstamp.net'
configuration.defaultAccount = defaultAccount
configuration.accounts = accounts
configuration.path_bot_ini = '../Python/config.ini'
configuration.debug = true // set to false if you don't want to see messages in the server window
configuration.debugLevel = 1 // can set to 2 to display results from Bitstamp API
configuration.path_log = "serverBitstampGUI.txt"


module.exports = configuration
