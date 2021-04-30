
//HTML ELEMENTS, VARIABLES AND INSTANTIATIONS
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const nav = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('main');
// const drawerScrim = document.querySelector(".mdc-drawer-scrim");
const hamburgerButton = document.querySelector("#nav-burgerbutton");
const drawerHomeButton = document.querySelector("#home-button");
const drawerNewsButton = document.querySelector("#news-button");
const drawerTrendingButton = document.querySelector("#trending-button");
const drawerInvestmentsButton = document.querySelector("#investments-button");
const container = document.querySelector(".container");
const barIcon = document.querySelector("#bar-icon");
const newsGrid = document.createElement("div");
newsGrid.classList.add("news-grid");

// container.innerHTML = window.innerWidth;


//API ENDPOINTS
const COINGECKO_TRENDING_URL = "https://api.coingecko.com/api/v3/search/trending";
const LUNARCRUSH_FEED_URL = "https://api.lunarcrush.com/v2?data=feeds&sources=news&key=25wd02gbkx519y03yeha2f";

//Templates
const newsCardTemplate = `<div class="mdc-card__primary-action">
                                <div class="mdc-card__media mdc-card__media--square mdc-card__media--16-9"></div>
                            </div>
                            <div>
                              <strong class="card-title"></strong>
                              <p class="card-description"></p>
                            </div>              
                            <div class="mdc-card__actions mdc-card__actions--full-bleed">
                              <a class="mdc-button mdc-card__action mdc-card__action--button" target="_blank" href="">
                                <div class="mdc-button__ripple"></div>
                                <span class="mdc-button__label">Read article</span>
                              </a>
                          </div>`
const trendingChartTemplate = `<div class="crypto-div-title border-bottom"></div>
                               <div class="crypto-price-grid">
                                 <div class="crypto-usd-price"></div>
                                 <div class="crypto-growth"></div>
                               </div>
                              <div id="curve_chart" class="crypto-curve"></div>`

const addCryptoButton = document.createElement("button");
addCryptoButton.id = "add-crypto-button";
addCryptoButton.classList.add("mdc-fab");
addCryptoButton.innerHTML = `<div class="mdc-fab__ripple"></div>
                             <span class="mdc-fab__icon material-icons">add</span>`;

const screenCover = document.createElement("div");
screenCover.classList.add("screen-cover");

const cryptoForm = document.createElement("div");
cryptoForm.classList.add("crypto-form");


//EVENT HANDLERS
hamburgerButton.addEventListener("click", (event) => {
    drawer.open = true;
    hamburgerButton.classList.remove("burger-no-ripple");
});

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  // mainContentEl.querySelector('input, button').focus();
});

drawerHomeButton.addEventListener("click", (event) => {
  removeAllChildNodes(container);
  barIcon.innerHTML = "home";
  hamburgerButton.classList.add("burger-no-ripple");
});

drawerNewsButton.addEventListener("click", (event) => {
  //Remove all nodes from the container
  removeAllChildNodes(container)
  barIcon.innerHTML = "announcements";
  hamburgerButton.classList.add("burger-no-ripple");
  
  //Fetch crypto,economy,stock news from the API
  fetch(LUNARCRUSH_FEED_URL)
  .then(response => response.json())
  .then(news => {
    container.appendChild(newsGrid);
    let nIndex = 0;
    shuffleArray(news.data);
    for(let i = 1; i < 4; i++) {
      for(let j = 1; j < 3; j++) {
        //Put each pice of news in its own card on the grid
        let card = document.createElement("div");
        let newsObj = news.data[nIndex];
        card.classList.add(`mdc-card`, `news-card`,`news-grid-item${nIndex+1}`);
        card.innerHTML = newsCardTemplate;
        card.querySelector(".mdc-card__media").style.backgroundImage = `url(${newsObj.thumbnail})`;
        card.querySelector(".card-title").innerHTML = newsObj.title;
        card.querySelector(".card-title").classList.add("news-card-title");
        card.querySelector(".card-description").innerHTML = (newsObj.description.length < 160) ? (newsObj.description) : (newsObj.description + "...");
        card.querySelector(".card-description").classList.add("news-card-description");
        card.querySelector(".mdc-card__action--button").href = newsObj.url
        newsGrid.appendChild(card);
        nIndex += 1;
      }
    }
  })
});

drawerTrendingButton.addEventListener("click", (event) => {
  barIcon.innerHTML = "whatshot";
  hamburgerButton.classList.add("burger-no-ripple");
  removeAllChildNodes(container);
  container.appendChild(addCryptoButton);
  fetch(COINGECKO_TRENDING_URL)
    .then(response => response.json())
    .then(trendingCryptos => {
      trendingCryptos.coins.forEach(crypto => {
        //For each trending coin fetch the price over the last 14 days\
        let days;
        let interval = (window.innerWidth < 700) ? ("hourly") : ("daily");
        
        if(window.innerWidth < 700) {
          days = 7;
          interval = "daily";
        } else {
          days = 14;
          interval = "hourly";
        }
        fetch(`https://api.coingecko.com/api/v3/coins/${crypto.item.id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`)
          .then(response => response.json())
          .then(data => {
            if(data.prices.length < (days - 1)) { return;}
            drawChart(data.prices, crypto.item);
          })

      });
    })
});

drawerInvestmentsButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>investments</h1>";
  barIcon.innerHTML = "timeline";
  hamburgerButton.classList.add("burger-no-ripple");
  removeAllChildNodes(container);
  
});

addCryptoButton.addEventListener("click", (event) => {
  document.body.prepend(screenCover);
  //container.appendChild(cryptoForm);
});

window.addEventListener('deviceorientation', (event) => {
  console.log(event.gamma);
  if(event.gamma >= 20) {
    drawer.open = true;
  }
}, true);

screenCover.addEventListener("click", (event) => {
  document.body.removeChild(screenCover);
})

//HELPER FUNCTIONS
//Credit: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
const removeAllChildNodes = function(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
//Credit: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
const shuffleArray = function(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function drawChart(coinPrices, coin) {
  //Create the chart div element for each crypto
  let chartDiv = document.createElement("div");
  chartDiv.classList.add("crypto-div");
  chartDiv.innerHTML = trendingChartTemplate;
  chartDiv.querySelector(".crypto-div-title").innerHTML = `${coin.name} (${coin.symbol})`;
  let currentPrice = coinPrices[coinPrices.length-1][1];
  let firstPrice = coinPrices[0][1];
  let change = ((currentPrice - firstPrice) / firstPrice) * 100;
  chartDiv.querySelector(".crypto-usd-price").innerHTML = `$${currentPrice.toFixed(2)} USD`;
  chartDiv.querySelector(".crypto-growth").innerHTML = `${change.toFixed(2)}%`;
  let color = (change < 0) ? ("price-decrease") : ("price-increase");
  chartDiv.querySelector(".crypto-growth").classList.add(color);  
  container.appendChild(chartDiv);

  let dataArray = [
    ['Date', 'Price'],
  ]
  coinPrices.forEach(price => {
    dataArray.push([formatDate(price[0]), price[1]])
  });

  console.log("");

  let options = {
    // width: chartDiv.offsetWidth,
    // height: .7 * chartDiv.offsetHeight,
    color: '#000000',
    chartArea: {backgroundColor: 'white'},
    chartArea: {
                width: '90%', 
                height: '80%'
               },
    legend: { position: 'bottom' }
  };

  let chart = new google.visualization.LineChart(chartDiv.querySelector("#curve_chart"));

  let data = google.visualization.arrayToDataTable(dataArray);
  chart.draw(data, options);
}

//Given a unix timestamp output the date in "Month day year format"
const formatDate = function(timestamp) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let d = new Date(timestamp);
  let day = d.getDate();
  let month = months[d.getMonth()]
  return month + " " + day;
}