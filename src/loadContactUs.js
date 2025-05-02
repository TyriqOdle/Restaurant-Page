export function loadContactUs(){
    const content = document.querySelector("#content")
    let container = document.createElement("div")
    let img = document.createElement("img")
    let headline = document.createElement("div")
    let contactInfo = document.createElement("div")
    let openingHours = document.createElement("div")

    //Clear the page 
    content.innerHTML = "";

    img.src = "./img/contactUs.png"
    img.style.width = "200px"

    headline.innerHTML = `<h2>Contact Us</h2>
                <p>We’d love to hear from you! Whether it’s a reservation, catering request, or just feedback — reach out anytime.</p>`;

    contactInfo.innerHTML = `<p><strong>Phone:</strong> (246) 555-1234</p>
                <p><strong>Email:</strong> hello@chiloskitchen.com</p>
                <p><strong>Address:</strong> 10 Pelican Road, Bridgetown, Barbados</p>`;

    openingHours.innerHTML = `<h3>Opening Hours</h3>
                <ul>
                    <li>Mon–Fri: 11 AM – 9 PM</li>
                    <li>Sat: 12 PM – 10 PM</li>
                    <li>Sun: Closed</li>
                </ul>`;

    headline.setAttribute("class","headline");
    contactInfo.setAttribute("class","contact-info")
    openingHours.setAttribute("class","opening-hours")
    container.setAttribute("class", "container")

    container.appendChild(img);
    container.appendChild(headline);
    container.appendChild(contactInfo);
    container.appendChild(openingHours);

    content.appendChild(container);
}