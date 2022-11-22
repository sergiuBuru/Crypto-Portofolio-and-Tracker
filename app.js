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
const trendingChartTemplate = `<div class="crypto-div-title-grid border-bottom"></div>
                               <div class="crypto-price-grid">
                                 <div class="crypto-usd-price"></div>
                                 <div class="crypto-growth"></div>
                               </div>
                              <div id="curve_chart" class="crypto-curve"></div>`

const selectTemplate = `
                          <div class="mdc-select__anchor"
                              role="button"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              aria-labelledby="demo-label demo-selected-text">
                            <span class="mdc-select__ripple"></span>
                            <span id="demo-label" class="mdc-floating-label">Pick the crypto</span>
                            <span class="mdc-select__selected-text-container">
                              <span id="demo-selected-text" class="mdc-select__selected-text"></span>
                            </span>
                            <span class="mdc-select__dropdown-icon">
                              <svg
                                  class="mdc-select__dropdown-icon-graphic"
                                  viewBox="7 10 10 5" focusable="false">
                                <polygon
                                    class="mdc-select__dropdown-icon-inactive"
                                    stroke="none"
                                    fill-rule="evenodd"
                                    points="7 10 12 15 17 10">
                                </polygon>
                                <polygon
                                    class="mdc-select__dropdown-icon-active"
                                    stroke="none"
                                    fill-rule="evenodd"
                                    points="7 15 12 10 17 15">
                                </polygon>
                              </svg>
                            </span>
                            <span class="mdc-line-ripple"></span>
                          </div>

                          <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                            <ul class="mdc-list" role="listbox" aria-label="Crypto picker listbox">
                              
                            </ul>
                          </div>`;

const searchbuttonTemplate = `<span class="mdc-button__ripple"></span>
                        <span class="mdc-button__label">Search</span>
                        <span class="mdc-button__touch"></span>`;

const addbuttonTemplate = `<span class="mdc-button__ripple"></span>
                        <span class="mdc-button__label">Add Crypto</span>
                        <span class="mdc-button__touch"></span>`;

const textfieldTemplate = `<span class="mdc-text-field__ripple"></span>
                           <span class="mdc-floating-label" id="my-label-id"></span>
                           <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
                           <span class="mdc-line-ripple"></span>`;

const selectItemTemplate = `  <span class="mdc-list-item__ripple"></span>
                              <span class="mdc-list-item__text"></span>`;

const snackBarTemplate = `<div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
                            <div class="mdc-snackbar__label" aria-atomic="false">
                               
                            </div>
                          </div>`;

const linearProgressTemplate = `
                                  <div class="mdc-linear-progress__buffer">
                                    <div class="mdc-linear-progress__buffer-bar"></div>
                                    <div class="mdc-linear-progress__buffer-dots"></div>
                                  </div>
                                  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                                    <span class="mdc-linear-progress__bar-inner"></span>
                                  </div>
                                  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                    <span class="mdc-linear-progress__bar-inner"></span>
                                  </div>
                                `;

//HTML ELEMENTS, VARIABLES AND INSTANTIATIONS
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const nav = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('main');
// const drawerScrim = document.querySelector(".mdc-drawer-scrim");
const hamburgerButton = document.querySelector("#nav-burgerbutton");
const drawerAddButton = document.querySelector("#home-button");
const drawerNewsButton = document.querySelector("#news-button");
const drawerTrendingButton = document.querySelector("#trending-button");
const drawerInvestmentsButton = document.querySelector("#investments-button");
const container = document.querySelector(".container");
const barIcon = document.querySelector("#bar-icon");
const newsGrid = document.createElement("div");
newsGrid.classList.add("news-grid");
const screenCover = document.createElement("div");
screenCover.classList.add("screen-cover");
const cryptoForm = document.createElement("div");
cryptoForm.classList.add("crypto-form");
const cryptoFormNameTextfield = document.createElement("label");
cryptoFormNameTextfield.classList.add("mdc-text-field","mdc-text-field--filled","crypto-form-name-textfield");
cryptoFormNameTextfield.innerHTML = textfieldTemplate;
const cryptoFormDateTextfield = document.createElement("label");
cryptoFormDateTextfield.classList.add("mdc-text-field","mdc-text-field--filled","crypto-form-date-textfield");
cryptoFormDateTextfield.innerHTML = textfieldTemplate;
const cryptoFormAmountTextfield = document.createElement("label");
cryptoFormAmountTextfield.classList.add("mdc-text-field","mdc-text-field--filled","crypto-form-amount-textfield");
cryptoFormAmountTextfield.innerHTML = textfieldTemplate;
const cryptoFormSearchbutton = document.createElement("button");
cryptoFormSearchbutton.classList.add("mdc-button", "mdc-button--raised", "crypto-form-searchbutton");
cryptoFormSearchbutton.innerHTML = searchbuttonTemplate;
const cryptoFormSelect = document.createElement("div");
cryptoFormSelect.classList.add("mdc-select", "mdc-select--filled", "demo-width-class");
cryptoFormSelect.innerHTML = selectTemplate;
const selectUL = cryptoFormSelect.querySelector("ul");
const cryptoFormAddbutton = document.createElement("button");
cryptoFormAddbutton.classList.add("mdc-button", "mdc-button--raised", "crypto-form-addbutton");
cryptoFormAddbutton.innerHTML = addbuttonTemplate;
const progressBarElement = document.createElement("div");
progressBarElement.innerHTML = linearProgressTemplate;
progressBarElement.setAttribute("role", "progressbar");
progressBarElement.setAttribute("aria-label", "Example Progress Bar");
progressBarElement.setAttribute("aria-valuemin", "0");
progressBarElement.setAttribute("aria-valuemax", "1");
progressBarElement.setAttribute("aria-valuenow", "0");
progressBarElement.classList.add("mdc-linear-progress");
let alert = document.createElement("div");
alert.classList.add("alert-dark");
alert.innerHTML = "You are currently not tracking any coin.";
let select, nameTextfield, dateTextField, amountTextField, searchButtonRipple, addButtonRipple, progressBar;

//GLOBAL VARIABLES
const COINGECKO_TRENDING_URL = "https://api.coingecko.com/api/v3/search/trending";
const LUNARCRUSH_FEED_URL = 'https://lunarcrush.com/api3/feeds';
const COIN_GECKO_COIN_LIST = "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
const NEWS_API_KEY = '1a556d6f89984183a95496be6a73e481'
const NEWS_API_ENDPOINT = 'GET https://newsapi.org/v2/everything?q=crypto&apiKey=1a556d6f89984183a95496be6a73e481'
let cryptoFormInput = "";

let DB = new Dexie("app_db3");
DB.version(1).stores({
  investments: "name",
  possibleCryptos: "name"
});

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

cryptoFormAddbutton.addEventListener("click", (event) => {
  //Find the crypto the user selected and store it in the DB
  let cryptoSelected = select.selectedText.textContent;
  let date = dateTextField.value;
  let amount = amountTextField.value;
  //Get the id and name of this crypto and store them in the investments DB
  DB.transaction('rw', DB.possibleCryptos, DB.investments, () => {
    DB.possibleCryptos.get({name: cryptoSelected})
    .then(obj => {
      DB.investments.put({name: obj.name, id: obj.id, date: date, amount: amount})
    })
  })
  .then(() => {
    console.log("Transaction commited.")
  })
  .catch(err => {
    console.log("In add button " + err);
  });

  let snackBar = document.createElement("div");
  snackBar.classList.add("mdc-snackbar");
  snackBar.innerHTML = snackBarTemplate;
  container.appendChild(snackBar);
  const snackbar = new mdc.snackbar.MDCSnackbar(snackBar);
  snackbar.labelText = cryptoSelected + " has been added to your investments page.";
  snackbar.open();
});

cryptoFormSearchbutton.addEventListener("click", (event) => {
  cryptoFormAddbutton.disabled = false;
  dateTextField.disabled = false;
  amountTextField.disabled = false;

  removeAllChildNodes(selectUL);
  //Get the input from the textfield
  cryptoFormInput = nameTextField.value;
  
  //Based on the crypto name input given, find all crypto's whose names are similar
  // to the input
  //Fetch all crypos from the api and match them against the input
  fetch(COIN_GECKO_COIN_LIST)
    .then(response => response.json())
    .then(coins => {
      coins.forEach(coin => {
        //If the strings are at least 70% similar insert them into the select element
        if(stringSimilarity(coin.name, cryptoFormInput) >= 0.7) {
          //Store them in the DB
          //possibleCryptosDB.names.put({id: coin.id, name: coin.name});
          DB.transaction('rw', DB.possibleCryptos, () => {
            DB.possibleCryptos.put({id: coin.id, name: coin.name});
          })
          .catch(err => {
            console.log("In search button: " + err);
          })
          const selectItem = document.createElement("li");
          selectItem.classList.add("mdc-list-item");
          selectItem.ariaSelected = "false";
          selectItem.innerHTML = selectItemTemplate;
          selectItem.setAttribute("role", "option");
          selectItem.setAttribute("data-value", coin.name.toLowerCase());
          selectItem.querySelector(".mdc-list-item__text").innerHTML = coin.name;
          selectUL.appendChild(selectItem);
        }
      })
    });
});

drawerAddButton.addEventListener("click", (event) => {
  barIcon.innerHTML = "add";
  hamburgerButton.classList.add("burger-no-ripple");
  removeAllChildNodes(container);
  removeAllChildNodes(selectUL);
  cryptoFormNameTextfield.querySelector("input").value = "";
  cryptoFormAmountTextfield.querySelector("input").value = "";
  cryptoFormDateTextfield.querySelector("input").value = "";

  cryptoFormNameTextfield.querySelector("#my-label-id").innerHTML = "Crypto name";
  cryptoFormDateTextfield.querySelector("#my-label-id").innerHTML = "Date(mm-dd-yyyy)";
  cryptoFormAmountTextfield.querySelector("#my-label-id").innerHTML = "Amount invested";

  //Add the crypto form to the container then append all the elemnts in the form
  container.appendChild(cryptoForm);

  cryptoForm.appendChild(cryptoFormNameTextfield);
  nameTextField = new mdc.textField.MDCTextField(document.querySelector(".crypto-form-name-textfield"));
  
  cryptoForm.appendChild(cryptoFormDateTextfield);
  dateTextField = new mdc.textField.MDCTextField(document.querySelector(".crypto-form-date-textfield"));
  
  cryptoForm.appendChild(cryptoFormAmountTextfield);
  amountTextField = new mdc.textField.MDCTextField(document.querySelector(".crypto-form-amount-textfield"));

  cryptoForm.appendChild(cryptoFormSearchbutton);
  searchButtonRipple = new mdc.ripple.MDCRipple(document.querySelector(".crypto-form-searchbutton"));

  cryptoForm.appendChild(cryptoFormSelect);
  select = new mdc.select.MDCSelect(document.querySelector(".mdc-select"));

  dateTextField.disabled = true;
  amountTextField.disabled = true;
  cryptoFormAddbutton.disabled = true;
  cryptoForm.appendChild(cryptoFormAddbutton);
  addButtonRipple = new mdc.ripple.MDCRipple(document.querySelector(".crypto-form-addbutton"));
});

drawerNewsButton.addEventListener("click", (event) => {
  //Remove all nodes from the container
  removeAllChildNodes(container)
  barIcon.innerHTML = "announcements";
  hamburgerButton.classList.add("burger-no-ripple");
  
  container.appendChild(progressBarElement);
  progressBar = new mdc.linearProgress.MDCLinearProgress(progressBarElement);
  progressBar.determinate = false;
  progressBar.open();

  //Fetch crypto,economy,stock news from the API
  fetch(NEWS_API_ENDPOINT)
  .then(response => response.json())
  .then(news => {
    console.log(news)
    container.appendChild(newsGrid);
    let nIndex = 0;
    //shuffleArray(news.data);
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
    progressBar.close();
  })
});

drawerTrendingButton.addEventListener("click", (event) => {
  barIcon.innerHTML = "whatshot";
  hamburgerButton.classList.add("burger-no-ripple");
  removeAllChildNodes(container);

  container.appendChild(progressBarElement);
  progressBar = new mdc.linearProgress.MDCLinearProgress(progressBarElement);
  progressBar.determinate = false;
  progressBar.open();

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
            drawChart(data.prices, crypto.item, "trending");
          })
        progressBar.close();
      });
    })
});

drawerInvestmentsButton.addEventListener("click", (event) => {
  barIcon.innerHTML = "timeline";
  hamburgerButton.classList.add("burger-no-ripple");
  removeAllChildNodes(container);
  container.appendChild(progressBarElement);
  progressBar = new mdc.linearProgress.MDCLinearProgress(progressBarElement);
  progressBar.determinate = false;
  progressBar.open();
  //Go through all coins in the DB and display each on a graph
  DB.transaction('r', DB.investments, () => {
    DB.investments.count(count => {
      if(count == 0) { 
        progressBar.close();
        container.appendChild(alert);
      } else {
        DB.investments.each( crypto => {
          if(container.contains(alert)) {container.removeChild(alert);}
          let days;
          let interval;
          
          if(window.innerWidth < 700) {
            days = 7;
            interval = "daily";
          } else {
            days = 14;
            interval = "hourly";
          }
          fetch(`https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`)
            .then(response => response.json())
            .then(data => {
              fetch(`https://api.coingecko.com/api/v3/coins/${crypto.id}?localization=false`)
                .then(response => response.json())
                .then(coin => {
                  drawChart(data.prices, coin, "investment");
                })
            })
            progressBar.close();
        })
      }
    })
  });
});


window.addEventListener('deviceorientation', (event) => {
  console.log(event.gamma);
  if(event.gamma >= 30) {
    drawer.open = true;
  }
}, true);

screenCover.addEventListener("click", (event) => {
  document.body.removeChild(screenCover);
})

//When the page laods on the news screen, display the news
document.addEventListener("DOMContentLoaded", (event) => {
  //Fetch crypto,economy,stock news from the API
  fetch(NEWS_API_ENDPOINT)
  .then(response => response.json())
  .then(news => {
    console.log(news)
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
        if(newsObj.description) {
          card.querySelector(".card-description").innerHTML = (newsObj.description.length < 160) ? (newsObj.description) : (newsObj.description + "...");
        }
        card.querySelector(".card-description").classList.add("news-card-description");
        card.querySelector(".mdc-card__action--button").href = newsObj.url
        newsGrid.appendChild(card);
        nIndex += 1;
      }
    }
  })
});


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

function drawChart(coinPrices, coin, type) {
  let chartDiv = document.createElement("div");
  chartDiv.classList.add("crypto-div");
  chartDiv.innerHTML = trendingChartTemplate;
  let chartTitle = document.createElement("p");
  chartTitle.classList.add("crypto-div-title");
  chartTitle.innerText = `${coin.name} (${coin.symbol})`;
  chartDiv.querySelector(".crypto-div-title-grid").appendChild(chartTitle);
  let currentPrice = coinPrices[coinPrices.length-1][1];
  let firstPrice = coinPrices[0][1];
  let change = ((currentPrice - firstPrice) / firstPrice) * 100;
  chartDiv.querySelector(".crypto-usd-price").innerHTML = `$${currentPrice.toFixed(2)} USD`;
  chartDiv.querySelector(".crypto-growth").innerHTML = `${change.toFixed(2)}%`;
  let color = (change < 0) ? ("price-decrease") : ("price-increase");
  chartDiv.querySelector(".crypto-growth").classList.add(color);  
  container.appendChild(chartDiv);

  //If the type of crypto is trending then draw a regular chart
  if(type == "trending") {
    let dataArray = [
      ['Date', 'Price'],
    ]
    coinPrices.forEach(price => {
      dataArray.push([formatDate(price[0]), price[1]])
    });
  
    let options = {
      color: '#000000',
      chartArea: {backgroundColor: 'white'},
      chartArea: {
                  width: '80%', 
                  height: '80%'
                 },
      legend: { position: 'bottom' }
    };
  
    let chart = new google.visualization.LineChart(chartDiv.querySelector("#curve_chart"));
  
    let data = google.visualization.arrayToDataTable(dataArray);
    chart.draw(data, options);
  } 
  //If the type is investment, add information about the user's investment in this crypto
  if(type == "investment"){
    //Get the crypto information from the DB
    DB.transaction('r?', DB.investments, () => {
      DB.investments.get({name: coin.name})
      .then(crypto => {
        //Get the price of the coin when the user invested in it
        let date = crypto.date.slice(3,5) + "-" + crypto.date.slice(0,2) + "-" + crypto.date.slice(6,10);
        fetch(`https://api.coingecko.com/api/v3/coins/${crypto.id}/history?date=${date}`)
        .then(res => res.json())
        .then(info => {
          console.log(info.market_data.current_price.usd);
          let investmentDatePrice = info.market_data.current_price.usd;
          let profit = (((parseInt(currentPrice) / parseInt(investmentDatePrice)) * parseInt(crypto.amount)) - crypto.amount).toFixed(3);
          
          let investmentGrid = document.createElement("div");
          investmentGrid.classList.add("investment-grid");
          let dateSpan = document.createElement("span");
          dateSpan.classList.add("badge", "bg-dark");
          dateSpan.innerText = "Investment date: " + crypto.date;
          let amountSpan = document.createElement("span");
          amountSpan.classList.add("badge","bg-dark");
          amountSpan.innerText = "Investment amount: $" + crypto.amount;
          let profitSpan = document.createElement("span");
          let color = (profit < 0) ? ("bg-danger") : ("bg-success");
          profitSpan.classList.add("badge",color);
          profitSpan.innerText = "Profit: $" + profit;
          investmentGrid.appendChild(dateSpan);
          investmentGrid.appendChild(amountSpan);
          investmentGrid.appendChild(profitSpan);

          chartDiv.insertBefore(investmentGrid, chartDiv.querySelector("#curve_chart"));
          console.log(profit);

          let dataArray = [
            ['Date', 'Price'],
          ]
          coinPrices.forEach(price => {
            dataArray.push([formatDate(price[0]), price[1]])
          });
        
          let options = {
            color: '#000000',
            chartArea: {backgroundColor: 'white'},
            chartArea: {
                        width: '80%', 
                        height: '80%'
                      },
            legend: { position: 'bottom' }
          };
        
          let chart = new google.visualization.LineChart(chartDiv.querySelector("#curve_chart"));
        
          let data = google.visualization.arrayToDataTable(dataArray);
          chart.draw(data, options);
        })
      })
    })
  }
}

//Given a unix timestamp output the date in "Month day year format"
const formatDate = function(timestamp) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let d = new Date(timestamp);
  let day = d.getDate();
  let month = months[d.getMonth()]
  return month + " " + day;
}

//Credit: https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
//Function that computes similarity percentage between two strings
const stringSimilarity = function(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
//------------
