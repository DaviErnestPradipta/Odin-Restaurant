export class HomeItem {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    render() {
        const item = document.createElement('div');
        item.classList.add('home-item');

        const itemTitle = document.createElement('div');
        itemTitle.classList.add('item-title');
        itemTitle.textContent = this.title;

        const itemText = document.createElement('div');
        itemText.classList.add('item-text');
        itemText.textContent = this.text;

        item.appendChild(itemTitle);
        item.appendChild(itemText);

        return item;
    }
}

export class Home {
    constructor(items) {
        this.items = items;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('home-container');

        this.items.forEach(itemData => {
            const homeItem = new HomeItem(itemData.title, itemData.text);
            container.appendChild(homeItem.render());
        });

        return container;
    }
}

export const homeItems = [
    { title: 'Welcome to Lucky Pierrot', text: 'The best burger chain this side of the strait!' }
];