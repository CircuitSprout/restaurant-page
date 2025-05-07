import './styles.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadAboutPage from './about.js';

function setActiveTab(activeLink) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}
    document.querySelector('a[href="#home"]').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveTab(e.target);
        loadHomePage();
    });
    document.querySelector('a[href="#menu"]').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveTab(e.target);
        loadMenuPage();
    });
    document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
        e.preventDefault();
        setActiveTab(e.target);
        loadAboutPage();
    });

//Initialize the page
loadHomePage();