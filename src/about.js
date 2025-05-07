function loadAboutPage(){
    const content = document.getElementById("content");
    content.innerHTML = ''; // Clear existing content

    const headline = document.createElement("h2")
    headline.textContent = "About Us";
    content.appendChild(headline);
}

export default loadAboutPage;