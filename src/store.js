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
    { title: 'Tōgeshita', location: '337-11 Togeshita, Nanae, Kameda District, Hokkaidō 041-1102' },
    { title: 'Marina-Suehiro', location: '14-17 Suehiro-chō, Hakodate, Hokkaidō 040-0053' },
    { title: 'Tokura', location: '30-1 Tokura-chō, Hakodate, Hokkaidō 042-0953' },
    { title: 'Shōwa', location: '2-Chōme-12-17 Shōwa, Hakodate, Hokkaidō 041-0812' },
    { title: 'Mori-chō-Akaigawa', location: '125 Akaigawa, Mori, Kayabe District, Hokkaidō 049-2142' },
    { title: 'Esashi Entrance', location: '1252-1 Miwa, Assabu, Hiyama District, Hokkaidō 043-1117' },
    { title: 'Hondōri', location: '4 Chome-17-32 Hondōri, Hakodate, Hokkaidō 041-0851' },
    { title: 'Hokuto-Inari', location: '1 Chome-6-4 Inari, Hokuto, Hokkaidō 049-0161' },
    { title: 'Hakodate Station', location: 'Wakamastu-chō-8-8-2, Hakodate, Hokkaidō 040-0063' },
    { title: 'Mihara', location: '2 Chome-14-3 Mihara, Hakodate, Hokkaidō 041-0806' },
    { title: 'Port-Hokkaido University', location: '3 Chome-18-28 Minato-chō, Hakodate, Hokkaidō 041-0821' },
    { title: 'Goryōkaku Park', location: '30-14 Goryōkaku-chō, Hakodate, Hokkaidō 040-0001' },
    { title: 'Matsukage', location: '22-6 Matsukage-chō, Hakodate, Hokkaidō 040-0003' },
    { title: 'Hitomi', location: '24-15 Hitomi-chō, Hakodate, Hokkaidō 040-0005' },
    { title: 'Honchō', location: '4-18 Honchō, Hakodate, Hokkaidō 040-0011' },
    { title: 'Jūjigai Ginza', location: '8-11 Suehiro-chō, Hakodate, Hokkaidō 040-0053'}
];