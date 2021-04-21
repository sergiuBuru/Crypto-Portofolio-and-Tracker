const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const nav = mdc.ripple.MDCRipple.attachTo(topAppBarElement);

const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('main');

const burgerButton = document.querySelector("#nav-burgerbutton");
burgerButton.addEventListener("click", (event) => {
    drawer.open = true;
});

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  //mainContentEl.querySelector('input, button').focus();
});