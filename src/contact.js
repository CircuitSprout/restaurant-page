function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = '';

    const headline = document.createElement("h2");
    headline.textContent = "Contact Us";
    content.appendChild(headline);

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "Phone: (123) 456-7890 | Email: info@restaurant.com";
    content.appendChild(contactInfo);

    const address = document.createElement("p");
    address.textContent = "123 Food Street, Flavor Town, USA";
    content.appendChild(address);   
}

export default loadContactPage;
