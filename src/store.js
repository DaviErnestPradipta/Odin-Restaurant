export class StoreItem {
    constructor(title, location) {
        this.title = title;
        this.location = location;
    }

    render() {
        const item = document.createElement('div');
        item.classList.add('store-item');

        const itemTitle = document.createElement('div');
        itemTitle.classList.add('item-title');
        itemTitle.textContent = this.title;

        const itemLocation = document.createElement('div');
        itemLocation.classList.add('item-location');
        itemLocation.textContent = this.location;

        item.appendChild(itemTitle);
        item.appendChild(itemLocation);

        return item;
    }
}

export class Store {
    constructor(items) {
        this.items = items;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('store-container');

        this.items.forEach(itemData => {
            const storeItem = new StoreItem(itemData.title, itemData.location);
            container.appendChild(storeItem.render());
        });

        return container;
    }
}

export const storeItems = [
    { title: 'Tōgeshita', location: '337-11 Togeshita, Nanae, Kameda District, Hokkaido 041-1102' },
    { title: 'Marina Suehiro', location: '14-17 Suehirocho, Hakodate, Hokkaido 040-0053' },
    { title: 'Tonkatsu Burger', location: 'The tastiest pork cutlet lathered with demiglace' },
    { title: 'Lucky Cheese Burger', location: "Cheese three ways, the way it's done in Hakodate" },
    { title: 'Special Bacon and Egg Burger', location: 'The classic combo is here for the safe and sound' },
    { title: 'Mount Hakodate Burger', location: '(Almost) as tall as the mountain itself' },
    { title: 'Hokkaido Genghis Khan Burger', location: 'Enjoy the taste of Mongolia from the Hakodate Bay' },
    { title: 'THE Futoccho Burger', location: 'Uphill challenge to climb, even more so to devour' },
    { title: 'Hakodate Snow Burger', location: 'The most beautiful burger for the most beautiful town' },
    { title: 'Original Curry', location: 'Hearthy and filling with the taste of home' },
    { title: 'Chinese Chicken Curry', location: 'The tastiest Chinese Chicken with the mouth-melting curry' },
    { title: 'Original LuckyPot', location: 'Lucky charm in a mug, potato with cheese for the champions' },
    { title: 'Chinese Chicken Omurice', location: 'Fried rice, omelette, Chinese Chicken, perfection' },
    { title: 'Chinese Chicken Yakisoba', location: 'Piping hot with the most delicious noodles and Chinese Chicken' },
    { title: 'Silky Soft', location: 'Depth of flavor only possible from local Hokkaido milk' }
];