const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const nav = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('main');
const drawerScrim = document.querySelector(".mdc-drawer-scrim");
const burgerButton = document.querySelector("#nav-burgerbutton");

burgerButton.addEventListener("click", (event) => {
    drawer.open = true;
    burgerButton.classList.remove("burger-no-ripple");
});

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  //mainContentEl.querySelector('input, button').focus();
});

const homeButton = document.querySelector("#home-button");
const newsButton = document.querySelector("#news-button");
const trendingButton = document.querySelector("#trending-button");
const investmentsButton = document.querySelector("#investments-button");
const container = document.querySelector(".container");
const barIcon = document.querySelector("#bar-icon");

homeButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>Home</h1>"
  barIcon.innerHTML = "home";
  burgerButton.classList.add("burger-no-ripple");
});

newsButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>News</h1>"
  barIcon.innerHTML = "announcements";
  burgerButton.classList.add("burger-no-ripple");

  const header = {
    method: "GET",
    mode: "cors"
  };
  const url = "https://cryptopanic.com/api/v1/posts/?auth_token=fc1c0da72515555999eb85b730a4a6a073ecf723";
  fetch(url)
    .then(data => data.json())
    .then(news => {
      console.log(news);
    })
});

trendingButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>trending</h1>";
  barIcon.innerHTML = "whatshot";
  burgerButton.classList.add("burger-no-ripple");
});

investmentsButton.addEventListener("click", (event) => {
  container.innerHTML = "<h1>investments</h1>";
  barIcon.innerHTML = "timeline";
  burgerButton.classList.add("burger-no-ripple");
});
