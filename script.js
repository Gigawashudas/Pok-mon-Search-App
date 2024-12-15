const searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', () => {
    var searchValue = document.getElementById('search-input').value.toLowerCase();
    var typesElement = document.getElementById('types');
    var spriteContainer = document.getElementById('sprite-container');

    // Clear previous content before updating the page
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-id').textContent = '';
    document.getElementById('weight').textContent = '';
    document.getElementById('height').textContent = '';
    document.getElementById('hp').textContent = '';
    document.getElementById('attack').textContent = '';
    document.getElementById('defense').textContent = '';
    document.getElementById('special-attack').textContent = '';
    document.getElementById('special-defense').textContent = '';
    document.getElementById('speed').textContent = '';
    typesElement.innerHTML = ''; // Clear previous types
    spriteContainer.innerHTML = ''; // Clear any previous sprite

    if (searchValue === "red") {
        alert("Pokémon not found");
        return;
    }

    // Fetch data from Pokémon API
    fetch('https://pokeapi.co/api/v2/pokemon/' + searchValue)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            // Set the values of the elements
            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-id').textContent = "#" + data.id;
            document.getElementById('weight').textContent = "Weight: " + data.weight;
            document.getElementById('height').textContent = "Height: " + data.height;
            document.getElementById('hp').textContent = data.stats[0].base_stat;
            document.getElementById('attack').textContent = data.stats[1].base_stat;
            document.getElementById('defense').textContent = data.stats[2].base_stat;
            document.getElementById('special-attack').textContent = data.stats[3].base_stat;
            document.getElementById('special-defense').textContent = data.stats[4].base_stat;
            document.getElementById('speed').textContent = data.stats[5].base_stat;

            // Add the sprite image
            var sprite = document.createElement('img');
            sprite.id = 'sprite';
            sprite.src = data.sprites.front_default;
            sprite.alt = data.name + ' Sprite';
            spriteContainer.appendChild(sprite);

            // Add the types
            data.types.forEach(type => {
                var typeElement = document.createElement('span');
                typeElement.textContent = type.type.name.toUpperCase();
                typesElement.appendChild(typeElement);
            });
        })
        .catch(error => {
            // If there is an error (e.g., Pokémon not found), show an alert
            alert("Pokémon not found");
        });
});
