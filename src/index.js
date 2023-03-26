import generateNav from './nav';
import generateHomepage from './home';
import generateMenu from './menu';
import generateContacts from './contact';


generateNav();
generateHomepage();

const home = document.querySelector('#homeBtn');
const menu = document.querySelector('#menuBtn');
const contact = document.querySelector('#contactBtn');

home.addEventListener('click', getHomepage);
menu.addEventListener('click', getMenu);
contact.addEventListener('click', getContacts);

function getHomepage() {
    const mainDiv = document.querySelector('#mainDiv');
    mainDiv.remove();
    generateHomepage();
}

function getMenu() {
    const mainDiv = document.querySelector('#mainDiv');
    mainDiv.remove();
    generateMenu();
}
function getContacts() {
    const mainDiv = document.querySelector('#mainDiv');
    mainDiv.remove();
    generateContacts();
}




