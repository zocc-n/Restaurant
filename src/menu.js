import {foodList} from './textContent';

const generateMenu = () => {

    //Targets #content div
    const content = document.querySelector('#content');

    //Generate a main div
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.alignItems = 'center';

    //Generate foodItem divs
    for(let i = 0; i < foodList.length; i++){
        const foodItem = document.createElement('div');
        foodItem.setAttribute('class', 'foodItem');
        mainDiv.append(foodItem);

        const foodImage = document.createElement('img');
        foodImage.setAttribute('class', 'foodImage');
        foodImage.setAttribute('src', `${foodList[i].path}`);
        foodItem.append(foodImage);

        const foodDescAndPriceDiv = document.createElement('div');
        foodDescAndPriceDiv.setAttribute('class', 'foodDescAndPriceDiv')
        foodItem.append(foodDescAndPriceDiv);

        const foodDescription = document.createElement('div');
        foodDescription.setAttribute('class', 'foodDescription');
        foodDescription.textContent = `${foodList[i].description}`;
        foodDescAndPriceDiv.append(foodDescription);

        const foodPrice = document.createElement('span');
        foodPrice.setAttribute('class', 'foodPrice');
        foodPrice.textContent = `Price: ${foodList[i].price}€`;
        foodDescAndPriceDiv.append(foodPrice);
    }

    content.append(mainDiv);
}

export default generateMenu;