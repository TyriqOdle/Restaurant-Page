export function loadHome(){


    const content = document.querySelector("#content")
    let container = document.createElement("div")
    let img = document.createElement("img")
    let headLine = document.createElement("div")
    let description = document.createElement("div")
    
    content.innerHTML= ""

    container.setAttribute("class", "container")

    img.src = "./img/homeImg.jpg"
    img.setAttribute("class", "home-img")

    headLine.innerHTML = "<h1>Welcome to Chilo's Kitchen</h1>"

    description.innerHTML = "<p>Nestled in the heart of the city, Saffron & Smoke offers a unique fusion of Caribbean spice and international flair. From sizzling jerk chicken to elegant seafood platters, every dish is crafted with passion and the freshest ingredients.</p>";


    container.appendChild(img);
    container.appendChild(headLine);
    container.appendChild(description)

    content.appendChild(container)
}