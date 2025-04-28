import "./style.css";
import { Home, homeItems } from "./home.js";
import { Menu, menuItems } from "./menu.js";
import { Store, storeItems } from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const storeButton = document.querySelector('nav button:nth-child(3)');

    content.innerHTML = '';
    const home = new Home(homeItems);
    content.appendChild(home.render());

    homeButton.addEventListener('click', () => {
        content.innerHTML = '';
        const home = new Home(homeItems);
        content.appendChild(home.render());
    });

    menuButton.addEventListener('click', () => {
        content.innerHTML = '';
        const menu = new Menu(menuItems);
        content.appendChild(menu.render());
    });

    storeButton.addEventListener('click', () => {
        content.innerHTML = '';
        const store = new Store(storeItems);
        content.appendChild(store.render());
    });
});