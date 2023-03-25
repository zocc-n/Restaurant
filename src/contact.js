import {contact, contactInfoHtml} from './textContent';

const generateContacts = () => {

    //Targets #content div
    const content = document.querySelector('#content');

    //Generate a main div
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');

    //Generate divs for image and contact info
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', 'imageDiv');
    const textDiv = document.createElement('id', 'textDiv');
    textDiv.setAttribute('id', 'textDiv');

    //Adding content to divs
    imageDiv.style.backgroundImage = "url('../img/restaurantInterior.jpeg')";
    // const image = document.createElement('img');   //novo
    // image.setAttribute('src', '../img/restaurant.jpeg'); //novo
    // imageDiv.append(image); //novo
    textDiv.innerHTML = contactInfoHtml;

    content.append(mainDiv);
    mainDiv.append(imageDiv, textDiv);
}

export default generateContacts;