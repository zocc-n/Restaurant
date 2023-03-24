//Food with description and price
const food = (name, description, price, img) => {
    return {name, description, price, img}
};

const foodList = {
    food1 : food('Paella', 'A traditional Spanish rice dish with saffron, seafood, chicken, and vegetables.', '12', './img/Paella.jpeg'),
    food2 : food('Gazpacho', 'A cold soup made with tomatoes, cucumbers, peppers, and bread.', '5', './img/Gazpacho.jpeg'),
    food3 : food('Patatas bravas', 'Fried potatoes with a spicy sauce.', '4', './img/PatatasBravas.jpeg'),
    food4 : food('Pulpo a la gallega', 'Galician-style octopus served with garlic and paprika.', '12', './img/PulpoALaGallega.jpeg'),
    food5 : food('Croquetas', 'Small fried balls of bechamel and ham or cheese.', '7', './img/Croquetas.jpeg'),
    food6 : food('Calamari a la romana', 'Fried squid rings served with lemon.', '8', './img/CalamariALaRomana'),
    food7 : food('Churros con chocolate', 'Long, thin fried doughnut sticks served with hot chocolate. ', '3', './img/ChurrosConChocolate.jpeg'),
    food8 : food('Albóndigas', 'Meatballs in a tomato-based sauce served with bread. ', '9', './img/Albondigas.jpeg'),
    food9 : food('Ensalada mixta', 'A mixed green salad with tuna, olives, and boiled egg.', '6', './img/EnsaladaMixta.jpeg'),
};


//Promotial copy for the homepage
const welcomeMessageHtml = `<p>Welcome to our Spanish restaurant, where you can enjoy the best Iberian cuisine without leaving the city. In our menu you will find a wide variety of typical dishes made with fresh ingredients and the best quality.</p><p>If you are a lover of Spanish cuisine, you cannot stop trying our paella, one of the best in the city, or our delicious Iberian hams and cheeses directly imported from Spain. In addition, we have a wide selection of Spanish wines so you can pair your food like a real gourmet.</p><p>In a cozy and authentic atmosphere, our restaurant is perfect for a romantic dinner, a meeting with friends or a special celebration. And if you prefer, we also have a catering service to surprise your guests with the most authentic flavors in Spain.</p><p>Do not wait any longer, visit our website and make your reservation to enjoy a unique experience in our Spanish restaurant. We are waiting with open arms!</p>`


export {foodList, welcomeMessageHtml}


