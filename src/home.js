import {foodList, welcomeMessageHtml} from './textContent';

const generateHomepage = () => {

    //Targets #content div
    const content = document.querySelector('#content');

    //Generate a main div
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');

    //Generate divs for image and promotional copy
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', 'imageDiv');
    const textDiv = document.createElement('id', 'textDiv');
    textDiv.setAttribute('id', 'textDiv');

    //Adding content to divs
    textDiv.innerHTML = welcomeMessageHtml;


    content.append(mainDiv);
    mainDiv.append(imageDiv, textDiv);
}

export default generateHomepage;

