import "./style.css";
import { Menu, menuItems } from "./menu.js";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const menuButton = document.querySelector('nav button:nth-child(2)');

    menuButton.addEventListener('click', () => {
        content.innerHTML = '';
        const menu = new Menu(menuItems);
        content.appendChild(menu.render());
    });
});