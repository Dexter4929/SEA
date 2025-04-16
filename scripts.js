/* SEA Project*/

// Country Data
let countriesData = [
  {
    id: 1, 
    "name": "Burkina Faso",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/03/Moschee_von_Bobo-Dioulasso.jpg", 
    "climate": "tropical desert", 
    "languages": ["Bambara", "French"],
    "currency": "African CFA franc",
    "currencyToUsd": "1 USD ≈ 600 XOF",
    "popularity": "Low",
    "bestTravelSeason": ["November", "December", "January"],
    "cities": [
      {
          id: 1.1,
          "name": "Ouagadougou",
          "attraction": "National Museum of Burkina Faso",
          "avgCostPerDay": "$45"
      },
      {
          id: 1.2,
          "name": "Bobo-Dioulasso",
          "attraction": "Grand Mosque of Bobo-Dioulasso",
          "avgCostPerDay": "$40"
      }
      ]
  },

  {
    id: 2, 
    "name": "Egypt", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Sphinx_with_the_third_pyramid.jpg",
    "climate": "arid desrt", 
    "languages": ["Arabic", "Nobiin", "Kenuzi", "Beja"],
    "currency": "Egyptian Pound",
    "currencyToUsd": "1 USD ≈ 48 EGP",
    "popularity": "medium",
    "bestTravelSeason": ["October", "November", "March", "April"],
    "cities": [
        {
            id: 2.1,
            "name": "Cairo",
            "attraction": "Giza Pyramids",
            "avgCostPerDay": "$70"
        },
        {
            id: 2.2,
            "name": "Luxor",
            "attraction": "Valley of the Kings",
            "avgCostPerDay": "$65"
        }
    ]
  },
  
  {
    id: 3, 
    "name": "Ethiopia", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/AddisView.jpg",
    "climate": "highlands and semi-arid", 
    "languages": ["Amharic", "Oromo", "Afar", "Somali", "Tigrigna"],
    "currency": "Ethiopian Birr",
    "currencyToUsd": "1 USD ≈ 57 ETB",
    "popularity": "Medium",
    "bestTravelSeason": ["October", "November", "Dcember"],
    "cities": [
        {
            id: 3.1,
            "name": "Addis Ababa",
            "attraction": "National Museum of Ethiopia",
            "avgCostPerDay": "$50"
        },
        {
            id: 3.2,
            "name": "Lalibela",
            "attraction": "Rock-hewn Churches",
            "avgCostPerDay": "$55"
        }
    ]
  },

  {
    id: 4, 
    "name": "Ghana", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Elmina_slave_castle.jpg",
    "climate": "tropical", 
    "languages": ["English", "Akaan", "Twi", "Asante"],
    "currency": "Ghanaian Cedi",
    "currencyToUsd": "1 USD ≈ 13 GHS",
    "popularity": "Very High",
    "bestTravelSeason": ["November", "December", "January"],
    "cities": [
        {
            id: 4.1,
            "name": "Accra",
            "attraction": "Kwame Nkrumah Mausoleum",
            "avgCostPerDay": "$60"
        },
        {
            id: 4.2,
            "name": "Kumasi",
            "attraction": "Manhyia Palace",
            "avgCostPerDay": "$55"
        }
    ]
  },

  {
    id: 5, 
    "name": "Kenya", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Nairobi_Skyline_from_BBC_Studios.jpg",
    "climate": "tropical", 
    "languages": ["Swahili", "English"],
    "currency": "Kenyan Shilling",
    "currencyToUsd": "1 USD ≈ 140 KES",
    "popularity": "Very High",
    "bestTravelSeason": ["June", "July", "August"],
    "cities": [
        {
            id: 5.1,
            "name": "Nairobi",
            "attraction": "Nairobi National Park",
            "avgCostPerDay": "$80"
        },
        {
            id: 5.2,
            "name": "Mombasa",
            "attraction": "Fort Jesus",
            "avgCostPerDay": "$75"
        }
    ]
  },

  {
    id: 6, 
    "name": "Liberia", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Downtown_Monrovia_3348917715_67a2002529.jpg",
    "climate": "tropical", 
    "languages": ["Kpelle", "Bassa", "Grebo", "Dan", "English",],
    "currency": "Liberian Dollar",
    "currencyToUsd": "1 USD ≈ 190 LRD",
    "popularity": "Low",
    "bestTravelSeason": ["December", "January", "February"],
    "cities": [
        {
            id: 6.1,
            "name": "Monrovia",
            "attraction": "Liberian National Museum",
            "avgCostPerDay": "$40"
        },
        {
            id: 6.2,
            "name": "Gbarnga",
            "attraction": "Kpatawee Waterfall",
            "avgCostPerDay": "$35"
        }
    ]
  },

  {
    id: 7, 
    "name": "Nigeria", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/28/MinForeignAffairs.jpg",
    "climate": "tropical", 
    "languages": ["Yoruba" , "Igbo", "Housa"],
    "currency": "Nigerian Naira",
    "currencyToUsd": "1 USD ≈ 1350 NGN",
    "popularity": "High",
    "bestTravelSeason": ["November", "December", "January"],
    "cities": [
        {
          id: 7.1,
            "name": "Lagos",
            "attraction": "Lekki Conservation Centre",
            "avgCostPerDay": "$70"
        },
        {
            id: 7.2,
            "name": "Abuja",
            "attraction": "Aso Rock",
            "avgCostPerDay": "$65"
        }
    ]
  },

  {
    id: 8, 
    "name": "Senegal", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Yoff_Beach_%28Dakar%29%2C_Senegal_2013_%288750149526%29.jpg",
    "climate": "tropical desert", 
    "languages": ["Wolof", "Mandingo", "Pulaar", "French",],
    "currency": "African CFA franc",
    "currencyToUsd": "1 USD ≈ 600 XOF",
    "popularity": "Medium",
    "bestTravelSeason": ["November", "December", "January"],
    "cities": [
        {
            id: 8.1,
            "name": "Dakar",
            "attraction": " African Renaissance Monument",
            "avgCostPerDay": "$60"
        },
        {
            id: 8.2,
            "name": "Saint-Louis",
            "attraction": "Colonial architecture and music festivals",
            "avgCostPerDay": "$55"
        }
    ]
  },

  {
    id: 9, 
    "name": "South Africa",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/d/d5/South_Africa_-_Cape_Town_Drieankerbaai_from_Lion%27s_head.jpg", 
    "climate": "varied", 
    "languages": ["Zulu", "Xhosa", "Sotho", "Tswana", "English"],
    "currency": "South African Rand",
    "currencyToUsd": "1 USD ≈ 18 ZAR",
    "popularity": "Very High",
    "bestTravelSeason": ["September", "October", "April"],
    "cities": [
        {
            id: 9.1,
            "name": "Cape Town",
            "attraction": "Table Mountain",
            "avgCostPerDay": "$85"
        },
        {
            id: 9.2,
            "name": "Johannesburg",
            "attraction": "Apartheid Museum",
            "avgCostPerDay": "$80"
        }
    ]
  },

  {
    id: 10, 
    "name": "Tanzania", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Beautiful_sunset_in_Dodoma_University_Tanzania.jpg",
    "climate": "tropical", 
    "languages": ["Swahili", "Arabic"],
    "currency": "Tanzanian Shilling",
    "currencyToUsd": "1 USD ≈ 2500 TZS",
    "popularity": "High",
    "bestTravelSeason": ["June", "July", "August", "September"],
    "cities": [
        {
          id: 10.1,
            "name": "Dar Es Salaam",
            "attraction": "Tanzanian National Museum and House of Culture",
            "avgCostPerDay": "$70"
        },
        {
            id: 10.2,
            "name": "Zanzibar City",
            "attraction": "Stone Town",
            "avgCostPerDay": "$65"
        }
    ]
  },
];

// FUnnction to dsiplay cards for each country 
function displayCards(data = countriesData) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  data.forEach(country => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, country, country.imageUrl);
    cardContainer.appendChild(nextCard);
  });
}

// Function to show all cards
function showCards() {
  displayCards(); 
}

// Funtction to edit the cards content with the country data
function editCardContent(card, country, imageURL) {
  const {
    name, 
    climate, 
    languages, 
    currency, 
    currencyToUsd, 
    popularity, 
    bestTravelSeason, 
    cities
  } = country;

  // style the card display as block override css 
  card.style.display = "block";
  
// Select h2 in the card and set the text content to the country name variable
// Set the const img to the card "img" string
// Img.src to the imageURL and give it a placeholder
//
  card.querySelector("h2").textContent = name;
  const img = card.querySelector("img");
  img.src = imageURL || "placeholder.png";
  img.alt = `${name} image`;

  // Select the strings from the card and set the text content to the country data(climate, languages, currency, popularity, bestTravelSeason)
  card.querySelector(".climate").textContent = climate;
  card.querySelector(".language").textContent = languages.join(", ");
  card.querySelector(".currency").textContent = `${currency} (${currencyToUsd})`;
  card.querySelector(".popularity").textContent = popularity;
  card.querySelector(".seasons").textContent = bestTravelSeason.join(", ");

  // Create const cityList to select the class "city-list" in the card
  // Set the innerHTML to an empty string
  const cityList = card.querySelector(".city-list");
  cityList.innerHTML = "";

  // Loop through the cities array and put cities in list and add
  // the city name, attraction and average cost per day to each city
  // adding the list of data to cityList
  cities.forEach(city => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${city.name}</strong><br><br>
                    Attraction: ${city.attraction || "No attraction listed"}<br><br> 
                    Average cost per day: ${city.avgCostPerDay}<br><br>`;
    cityList.appendChild(li);
  });
}

// Alert button to help users uncerstand how to use the website and learn about
// the functions and features of the website
function quoteAlert() {
  alert(
      "Have you tried filtering the countries? Click the buttons at the top of the page to filter the countries!"
  );
}

// Removes the last card from the card container
function removeLastCard() {
  const cardContainer = document.getElementById("card-container");
  if (cardContainer.lastElementChild) {
    cardContainer.removeChild(cardContainer.lastElementChild);
  }
}

// a function that filters through cards based on the condition passed to it
// using countriesData array and then uses filter method to filter the data based on condition
// used in the filterByPopularity, filterByClimate and filterByBestSeason functions
function filterCards(condition) {
  displayCards(countriesData.filter(condition));
}

// function to filter cards by populatiry value most popular (very high) passing it to level
function filterByPopularity(level) {
  filterCards(country => country.popularity === level);
}

// function to filter cards by climate value (tropical, arid desert, etc)
//i used tropical as my climate filter
function filterByClimate(climateType) {
  filterCards(country => country.climate.toLowerCase().includes(climateType.toLowerCase()));
}

// function to filter cards by best travel season value 
// passing the month to the function
// I used december as my best travel season filter
function filterByBestSeason(month) {
  filterCards(country => country.bestTravelSeason.includes(month));
}

// function to add a new country to the countriesData array
function addNewCountry() {

  // Getting the data from the form inputs and extracting the values
  // passing them to constants
  // countryName becomes the constant name
  const name = document.getElementById('countryName').value;

  // Gets imgageUrl from the input field and if not provided, sets it to a placeholder image
  // and passes to constant imageUrl
  const imageUrl = document.getElementById('imageUrl').value || "placeholder.jpg";

  // Get the climate from the input field and passes to constant climate
  const climate = document.getElementById('climate').value;

  // Get the languages from the input field and split them into an array
  // trimming any spaces around the languages
  // and passing to constant languages
  const languages = document.getElementById('languages').value.split(',').map(l =>l.trim());

  // Get the currency from the input field and passes to constant currency
  const currency = document.getElementById('currency').value;

  // Get the currencyToUsd from the input field and passes to constant currencyToUsd
  const currencyToUsd = document.getElementById('currencyToUsd').value;

  // Get the popularity from the input field and passes to constant popularity
  const popularity = document.getElementById('popularity').value;

  // find input field with id bestTravelSeason extract the value
  // splits it into an array and trims any spaces around the values 
  const bestTravelSeason = document.getElementById('bestTravelSeason').value.split(',').map(m => m.trim());

  // Finding inputs then extracting the value
  // passing the value to constant cityName, cityAttraction, and avgCostPerDay
  const cityName = document.querySelector('.cityName').value;
  const cityAttraction = document.querySelector('.cityAttraction').value;
  const avgCostPerDay = document.querySelector('.cityCost').value;

  // Using the data from the form inputs to create a new country object
  // and passing the values to the newCountry object and city object
  // id is to set the id of the new country by adding the length of the countriesData array
  // +1 to the id of the new country and .01 to the id of the new city
  // to make sure the id is unique of each
  // assigning the values to the newCountry object
  const newCountry = {
    id: countriesData.length + 1,
    name: name,
    imageUrl: imageUrl,
    climate: climate,
    languages: languages,
    currency: currency,
    currencyToUsd: currencyToUsd,
    popularity: popularity,
    bestTravelSeason: bestTravelSeason,
    cities: [{
      id:(countriesData.length + 1) + 0.1,
      name: cityName,
      attraction: cityAttraction,
      avgCostPerDay:`$${avgCostPerDay}`
    }]
  };

  //add the new country to the countriesData array
  // and call the displayCards function to show the new country
  countriesData.push(newCountry);
  displayCards();

  // Reset the form inputs to empty strings
  // and mesage pop up to the user that the country was added successfully
  document.getElementById('countryForm').reset();
  alert(`${name} added successfully!`);
}

// event listener to call the showCards function when the page is loaded
document.addEventListener("DOMContentLoaded", showCards);

// event listeners for the filter buttons for the html form when the 
// add new country button is clicked
document.getElementById('countryForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  addNewCountry();
});
