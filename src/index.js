import './styles.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

function setActiveTab(activeLink) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}
    homeLink.addEventListener('click', (e) => {
        setActiveTab(e.target);
        loadHomePage();
    });
    menuLink.addEventListener('click', (e) => {
        setActiveTab(e.target);
        loadMenuPage();
    });
    contactLink.addEventListener('click', (e) => {
        setActiveTab(e.target);
        loadContactPage();
    });


//Initialize the page
loadHomePage();
addNavListeners();