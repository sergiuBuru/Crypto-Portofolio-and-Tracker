//HTML ELEMENTS, VARIABLES AND INSTANTIATIONS
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const nav = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
// const mainContentEl = document.querySelector('main');
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



//EVENT HANDLERS
hamburgerButton.addEventListener("click", (event) => {
    drawer.open = true;
    hamburgerButton.classList.remove("burger-no-ripple");
});

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  //mainContentEl.querySelector('input, button').focus();
});

drawerHomeButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>Home</h1>"
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
    for(let i = 1; i < 4; i++) {
      for(let j = 1; j < 3; j++) {
        //Put each pice of news in its own card on the grid
        let card = document.createElement("div");
        let newsObj = news.data[nIndex];
        card.classList.add(`mdc-card`, `news-grid-item${nIndex+1}`);
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
  container.innerHTML = "<h1>trending</h1>";
  barIcon.innerHTML = "whatshot";
  hamburgerButton.classList.add("burger-no-ripple");

  fetch(COINGECKO_TRENDING_URL)
    .then(response => response.json())
    .then(trendingCrypto => {
      console.log(trendingCrypto);
    })
});

drawerInvestmentsButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>investments</h1>";
  barIcon.innerHTML = "timeline";
  hamburgerButton.classList.add("burger-no-ripple");
});


//HELPER FUNCTIONS
//Credit: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
const removeAllChildNodes = function(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}