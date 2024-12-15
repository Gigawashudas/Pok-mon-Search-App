document.getElementById('search-button').addEventListener('click', function() {
    var searchValue = document.getElementById('search-input').value;
    if (searchValue === "Red") {
        alert("Pokémon not found");
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    var searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === "pikachu") {
        // Fetch data from Pokémon API
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(data => {
                // Set the values of the elements
                document.getElementById('pokemon-name').textContent = "PIKACHU";
                document.getElementById('pokemon-id').textContent = "#25";
                document.getElementById('weight').textContent = "Weight: 60";
                document.getElementById('height').textContent = "Height: 4";
                document.getElementById('hp').textContent = "35";
                document.getElementById('attack').textContent = "55";
                document.getElementById('defense').textContent = "40";
                document.getElementById('special-attack').textContent = "50";
                document.getElementById('special-defense').textContent = "50";
                document.getElementById('speed').textContent = "90";

                // Add the Pokémon sprite image
                var spriteContainer = document.getElementById('sprite-container');
                var sprite = document.createElement('img');
                sprite.id = 'sprite';
                sprite.src = data.sprites.front_default;  // Pokémon's front sprite
                sprite.alt = 'Pikachu Sprite';
                spriteContainer.innerHTML = '';  // Clear any previous images
                spriteContainer.appendChild(sprite);
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    var searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === "pikachu") {
        // Fetch data from Pokémon API for Pikachu
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(data => {
                // Clear previous types from the #types element
                var typesElement = document.getElementById('types');
                typesElement.innerHTML = ''; // Clears the content of the #types element

                // Add the new type (ELECTRIC) to the #types element
                var typeElement = document.createElement('span');
                typeElement.textContent = 'ELECTRIC';  // Pikachu's type
                typesElement.appendChild(typeElement);
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
    }
});




document.getElementById('search-button').addEventListener('click', function() {
    var searchValue = document.getElementById('search-input').value;

    if (searchValue === "94") {
        // Set the values of the elements for Gengar
        document.getElementById('pokemon-name').textContent = "GENGAR";
        document.getElementById('pokemon-id').textContent = "#94";
        document.getElementById('weight').textContent = "Weight: 405";
        document.getElementById('height').textContent = "Height: 15";
        document.getElementById('hp').textContent = "60";
        document.getElementById('attack').textContent = "65";
        document.getElementById('defense').textContent = "60";
        document.getElementById('special-attack').textContent = "130";
        document.getElementById('special-defense').textContent = "75";
        document.getElementById('speed').textContent = "110";

        // Fetch data for Gengar (ID 94)
        fetch('https://pokeapi.co/api/v2/pokemon/94')
            .then(response => response.json())
            .then(data => {
                // Clear the #types element before adding new types
                var typesElement = document.getElementById('types');
                typesElement.innerHTML = ''; // Clear previous types

                // Add the two types: GHOST and POISON
                var type1 = document.createElement('span');
                type1.textContent = 'GHOST';
                typesElement.appendChild(type1);

                var type2 = document.createElement('span');
                type2.textContent = 'POISON';
                typesElement.appendChild(type2);

                // Add the sprite image for Gengar
                var spriteContainer = document.getElementById('sprite-container');
                var sprite = document.createElement('img');
                sprite.id = 'sprite';
                sprite.src = data.sprites.front_default;  // Gengar's front sprite
                sprite.alt = 'Gengar Sprite';
                
                // Clear previous sprite if any
                spriteContainer.innerHTML = '';  // Clear any previous sprite
                spriteContainer.appendChild(sprite);  // Add the new sprite
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    var searchValue = document.getElementById('search-input').value.toLowerCase();

    // Fetch data from Pokémon API
    fetch('https://pokeapi.co/api/v2/pokemon/' + searchValue)
        .then(response => {
            if (!response.ok) {
                // If the response is not OK (e.g., Pokémon not found), show an alert
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            // If the Pokémon is found, update the page with the data
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
            var spriteContainer = document.getElementById('sprite-container');
            var sprite = document.createElement('img');
            sprite.id = 'sprite';
            sprite.src = data.sprites.front_default;
            sprite.alt = data.name + ' Sprite';
            spriteContainer.innerHTML = ''; // Clear any previous sprite
            spriteContainer.appendChild(sprite);

            // Add the types (clear previous types)
            var typesElement = document.getElementById('types');
            typesElement.innerHTML = ''; // Clear previous types
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