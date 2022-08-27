# Crypto Portofolio and Tracker

## About the app:
This is a website hosted with Gihub Pages at https://sergiuburu.github.io/Crypto-Portofolio-and-Tracker/#.
The web app provides crypto, finance and world economy news and a list of currently trending crypto coins. Most importantly, it lets the user track cryptos they have invested in.

##Features:
The app contains four screens which can be accessed by clicking the burger button in the navigation bar:
1. The news screen where news about crypto, finance and economy are fetched from the [Lunar Crush API](https://lunarcrush.com/developers/docs#feeds)
2. the trending crypto where information such as market history for up to seven cryptos is fetched from the [CoinGecko API](https://www.coingecko.com/en/api#explore-api)
3. The personal investments page where the user will keep track of the crypto they have invested in or are following. This data is being stored using the IndexedDB API and is persistent over time.
4. The screen for adding new cryptos to the investments page
    - Here the user will be prompted to introduce the name of the crypto
    - After they hit the search button the app will match the input with multiple cryptos fetched from the CoinGecko API
    - Then the user can select the crypto they are looking for from the select dropwdown menu and hit Add to add the crypto to the investments

### App responsiveness
The app is repsonsive on multiple devices including large monitors, smaller devices such as tablets and laptops and phones

### Extra features:
The app uses the gyroscope sensor of a device in order to detect tilting. If the device is tilted 30 degrees or more to the right, the screen menu will open.
