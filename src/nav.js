const generateNav = () => {
    
    //Targets #content div
    const content = document.querySelector('#content');

    //Generates nav
    const nav = document.createElement('nav');
    content.append(nav);
    
    //Generates logo
    const img = document.createElement('img');
    img.setAttribute('src', '../img/logo2.png');
    img.setAttribute('id', 'logo');

    //Generates restaurant name
    const nameH1 = document.createElement('h1');
    nameH1.setAttribute('id', 'name-by-logo');
    nameH1.textContent = 'Los Sabores';
    
    //Generates navigation tabs (list)
    const navList = document.createElement('ul');
    const navListItem1 = document.createElement('li');
    const navListItem2 = document.createElement('li');
    const navListItem3 = document.createElement('li');
    navListItem1.textContent = 'Home';
    navListItem2.textContent = 'Menu';
    navListItem3.textContent = 'Contact';
    navList.append(navListItem1, navListItem2, navListItem3);

    //Appends logo, name and tabs to navigation element
    nav.append(img, nameH1, navList);
}

export default generateNav;