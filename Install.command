DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd "${DIR}"
echo $DIR
npm install bitstamp_trading_tools
curl -O https://raw.githubusercontent.com/ipinky77/runbitstampTradingTools/main/runBot.js
curl -O https://raw.githubusercontent.com/ipinky77/runbitstampTradingTools/main/runServer.js
curl -O https://raw.githubusercontent.com/ipinky77/runbitstampTradingTools/main/config.js
curl -O https://raw.githubusercontent.com/ipinky77/runbitstampTradingTools/main/bitstampBotThresholds.txt