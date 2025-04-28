import "./style.css";
import { Menu, menuItems } from "./menu.js";
import { Store, storeItems } from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const storeButton = document.querySelector('nav button:nth-child(3)');

    menuButton.addEventListener('click', () => {
        content.innerHTML = '';
        const menu = new Menu(menuItems);
        content.appendChild(menu.render());
    });

    storeButton.addEventListener('click', () => {
        content.innerHTML = '';
        const menu = new Store(storeItems);
        content.appendChild(menu.render());
    });
});