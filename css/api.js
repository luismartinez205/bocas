// Función para generar las cards de restaurantes
function generateRestaurantCards(data) {
    const container = document.getElementById('restaurant');

    // Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    data.forEach(restaurant => {
        // Crear el contenedor de cada card
        const card = document.createElement('div');
        card.classList.add('card');

        // Crear el contenido de la card
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h2>${restaurant.name}</h2>
            <p>Rating: ${restaurant.rating}</p>
            <p>${restaurant.address}</p>
        `;

        // Insertar la card en el contenedor
        container.appendChild(card);
    });
}

// Función para hacer fetch a la API
async function fetchRestaurants() {
    const url = 'https://api.github.com/users/luismartinez205';
    

    try {
        const response = await fetch(url);
        const restaurants = await response.json();  // Cambiar response.text() a response.json() si es JSON
        console.log(restaurants) // Genera las cards con los datos reales
    } catch (error) {
        console.error(error);
    }
}

// Llamar a la función para obtener los restaurantes y generar las cards
fetchRestaurants();
