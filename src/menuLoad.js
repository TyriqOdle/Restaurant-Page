import {menuItems} from "./createMenuItem.js"
export function loadMenu(){
    const content = document.querySelector("#content");
    let container = document.createElement("div");


    menuItems.forEach((foodItem) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("div");
    let description = document.createElement("div");
    let price = document.createElement("div");

    container.setAttribute("class", "container-menu");

    card.setAttribute("class", "card");

    img.src = foodItem.img;
    img.setAttribute("class", "foodimg");

    title.innerHTML = `<h1> ${foodItem.name} </h1>`;

    description.innerHTML = `<p> ${foodItem.description}`;

    price.innerHTML = `<h3> Price: $${foodItem.price}`;

    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(description)
    card.appendChild(price)

    container.appendChild(card)

    
    });

    content.innerHTML = ""

    let pageHeading = document.createElement("h1");
    pageHeading.innerHTML = "Menu";
    pageHeading.style.color = "white"
    content.appendChild(pageHeading)
    content.appendChild(container)
    
}

