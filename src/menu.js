function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = ''; // Clear existing content

    const headline = document.createElement("h2")
    headline.textContent = "Our Menu";
    content.appendChild(headline);

    const menuItems = document.createElement("ul");
    const items = ["Pizza", "Pasta", "Salad", "Dessert", "Beverages"];
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        menuItems.appendChild(listItems);
    });
    content.appendChild(menuItems);
}

export default loadMenuPage;

// This code defines a function that loads the menu page content into the main content area of the webpage.