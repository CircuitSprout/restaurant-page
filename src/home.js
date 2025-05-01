function loadHomePage(){
    const content = document.getElementById("content");

    //Create and append an image
    const image = document.createElement('img');
    image.src= "path/to/restaurant-image.jpg";
    image.alt = "Restuarant Image";
    content.appendChild(image);

    //Create and append a heading
    const headline = document.createElement("h2");
    headline.textContent = "Welcome to Our Restaurant!";
    content.appendChild(headline);

    //Create and append a paragraph
    const description = document.createElement("p");
    description.textContent = "Experience the best dining with us. We offer a variety of dishes made with fresh ingredients and a touch of love.";
    content.appendChild(description);
}

export default loadHomePage;