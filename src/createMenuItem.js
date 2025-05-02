import {MenuItem} from "./menuItemsClass.js"

export const menuItems = [];

 function createMenuItem(name, desc, price,img){
    const newItem = new MenuItem(name, desc,price,img);

    menuItems.push(newItem);
}

createMenuItem(
    "Jerk Chicken Plate",
    "Spicy grilled chicken marinated in our signature jerk sauce, served with rice and peas.",
    12.99,
    "./img/Jerk Chicken Plate.jpeg"
);

createMenuItem(
    "Curry Goat",
    "Slow-cooked tender goat meat in rich Caribbean curry, served with steamed white rice.",
    14.50,
    "./img/curry-goat.jpg"
);

createMenuItem(
    "Fried Snapper",
    "Whole red snapper deep-fried and seasoned to perfection, topped with escovitch sauce.",
    16.00,
    "./img/fried-snapper.jpg"
);

createMenuItem(
    "Festival",
    "Crispy on the outside, soft and sweet inside. A perfect complement to spicy dishes.",
    3.00,
    "./img/festival.jpg"
);

createMenuItem(
    "Macaroni Pie",
    "Baked cheesy macaroni with a Bajan twist.",
    4.50,
    "./img/mac-pie.jpg"
);

createMenuItem(
    "Sorrel Drink",
    "Refreshing hibiscus flower drink infused with ginger and clove.",
    2.50,
    "./img/sorrel.jpg"
);

createMenuItem(
    "Mauby",
    "Traditional bittersweet bark-based drink with a unique Caribbean flavor.",
    2.00,
    "./img/mauby.jpg"
);

