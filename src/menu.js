export class MenuItem {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    render() {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const itemTitle = document.createElement('div');
        itemTitle.classList.add('item-title');
        itemTitle.textContent = this.title;

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDescription.textContent = this.description;

        item.appendChild(itemTitle);
        item.appendChild(itemDescription);

        return item;
    }
}

export class Menu {
    constructor(items) {
        this.items = items;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('menu-container');

        this.items.forEach(itemData => {
            const menuItem = new MenuItem(itemData.title, itemData.description);
            container.appendChild(menuItem.render());
        });

        return container;
    }
}

export const menuItems = [
    { title: 'Chinese Chicken Burger', description: 'The juiciest burger with our signature Chinese Chicken' },
    { title: 'Lucky Egg Burger', description: 'How about our classic beef patty with a sunny side-up?' },
    { title: 'Tonkatsu Burger', description: 'The tastiest pork cutlet lathered with demiglace' },
    { title: 'Lucky Cheese Burger', description: "Cheese three ways, the way it's done in Hakodate" },
    { title: 'Special Bacon and Egg Burger', description: 'The classic combo is here for the safe and sound' },
    { title: 'Mount Hakodate Burger', description: '(Almost) as tall as the mountain itself' },
    { title: 'Hokkaido Genghis Khan Burger', description: 'Enjoy the taste of Mongolia from the Hakodate Bay' },
    { title: 'THE Futoccho Burger', description: 'Uphill challenge to climb, even more so to devour' },
    { title: 'Hakodate Snow Burger', description: 'The most beautiful burger for the most beautiful town' },
    { title: 'Original Curry', description: 'Hearthy and filling with the taste of home' },
    { title: 'Chinese Chicken Curry', description: 'The tastiest Chinese Chicken with the mouth-melting curry' },
    { title: 'Original LuckyPot', description: 'Lucky charm in a mug, potato with cheese for the champions' },
    { title: 'Chinese Chicken Omurice', description: 'Fried rice, omelette, Chinese Chicken, perfection' },
    { title: 'Chinese Chicken Yakisoba', description: 'Piping hot with the most delicious noodles and Chinese Chicken' },
    { title: 'Silky Soft', description: 'Depth of flavor only possible from local Hokkaido milk' }
];