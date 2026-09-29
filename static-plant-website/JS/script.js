const plants = [
    {
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "6 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"Attracts bees and butterflies, attracted to the sun."
    },
    {
        name: "Rose",
        scientificName: "Rosa",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "5 feet",
        bloomSeason: "Spring to Fall",
        wildlifeBenefits:"shelter for small birds and insects"
    },
    {
        name: "Daisy",
        scientificName: "Bellis perennis",
        sunlight: "Full sun to partial shade",
        soil: "Well-drained",
        height: "1 foot",
        bloomSeason: "Spring to Summer",
        wildlifeBenefits:"late food source for local wildlife"
    },
    {
        name: "Tulip",
        scientificName: "Tulipa gesneriana",
        sunlight: "Full sun to partial shade",
        soil: "Well-drained",
        height: "1 foot",
        bloomSeason: "Spring",
        wildlifeBenefits:"Food, nectar, and a place to rest"
    },
    {
        name: "Lily",
        scientificName: "Lilium",
        sunlight: "Full sun to partial shade",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"Food, nectar, and a place to rest"
    },
    {
        name: "Orchid",
        scientificName: "Orchidaceae",
        sunlight: "Bright indirect light",
        soil: "Well-drained",
        height: "2 feet",
        bloomSeason: "Year-round",
        wildlifeBenefits:"Acts a an environmental health indicator"
    },
    {
        name: "Cactus",
        scientificName: "Cactaceae",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Spring to Summer",
        wildlifeBenefits:"provides critical food and defense for local wildlife."
    },
    {
        name: "Aloe Vera",
        scientificName: "Aloe barbadensis",
        sunlight: "Full sun to partial shade",
        soil: "Well-drained",
        height: "2 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"supports digestion, immuninty, and wound healing"
    },
    {
        name: "Lavender",
        scientificName: "Lavandula",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"supports local biodiversity"
    },
    {
        name: "Chrysanthemum",
        scientificName: "Chrysanthemum",
        sunlight: "Full sun to partial shade",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Fall",
        wildlifeBenefits:"Produces natural insect repellent."
    },
    {
        name: "Barley",
        scientificName: "Hordeum vulgare",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Spring to Summer",
        wildlifeBenefits:"Provides food and habitat for local wildlife."
    },
    {
        name: "Basil",
        scientificName: "Ocimum basilicum",
        sunlight: "Full sun to partial shade",
        soil: "Well-drained",
        height: "2 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"Attracts pollinators and provides habitat for local wildlife."

    },
    {
        name: "Quinoa",
        scientificName: "Chenopodium quinoa",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "4 feet",
        bloomSeason: "Summer to Fall",
        wildlifeBenefits:"Provides food and habitat for local wildlife."
    },
    {
        name: "Watermelon",
        scientificName: "Citrullus lanatus",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"Provides food and habitat for local wildlife."
    },
    {
        name: "Green Beans",
        scientificName: "Phaseolus vulgaris",
        sunlight: "Full sun",
        soil: "Well-drained",
        height: "3 feet",
        bloomSeason: "Summer",
        wildlifeBenefits:"Provides food and habitat for local wildlife."
    }

];

const searchInput = document.getElementById("search");
const sunlightFilter = document.getElementById("sunlight-filter");
const bloomSeasonFilter = document.getElementById("bloom-season-filter");
const resetButton = document.getElementById("reset-button");
const plantCount = document.getElementById("plant-counter");

function displayPlants(plantsList) {
    const plantList = document.getElementById("plant-list");
    plantList.innerHTML = "";
    if (plantsList.length === 0) {
        plantList.innerHTML = "<p>No plants found.</p>";
        return;
    }
    plantsList.forEach(plant => {
        const plantCard = document.createElement("div");
        plantCard.classList.add("plant-card");
        plantCard.innerHTML = `
            <h3><b>${plant.name}</b> (${plant.scientificName})</h3>
            <p><b>Sunlight:</b> ${plant.sunlight}</p>
            <p><b>Soil:</b> ${plant.soil}</p>
            <p><b>Height:</b> ${plant.height}</p>
            <p><b>Bloom Season:</b> ${plant.bloomSeason}</p>
            <p><b>Wildlife Benefits:</b> ${plant.wildlifeBenefits}</p>
        `;
        plantList.appendChild(plantCard);
        
    });
}

displayPlants(plants);

function filterPlants() {
    const searchTerm = searchInput.value.toLowerCase();
    const sunlightValue = sunlightFilter.value.toLowerCase();
    const bloomSeasonValue = bloomSeasonFilter.value.toLowerCase();

    const filteredPlants = plants.filter(plant => {
        const matchesSearchTerm = plant.name.toLowerCase().includes(searchTerm) || plant.scientificName.toLowerCase().includes(searchTerm);
        const matchesSunlight = sunlightValue === "" || plant.sunlight.toLowerCase().includes(sunlightValue);
        const matchesBloomSeason = bloomSeasonValue === "" || plant.bloomSeason.toLowerCase().includes(bloomSeasonValue);
        return matchesSearchTerm && matchesSunlight && matchesBloomSeason;
    });

    displayPlants(filteredPlants);
}

searchInput.addEventListener("input", filterPlants);
sunlightFilter.addEventListener("change", filterPlants);
bloomSeasonFilter.addEventListener("change", filterPlants);
resetButton.addEventListener("click", () => {
    searchInput.value = "";
    sunlightFilter.value = "";
    bloomSeasonFilter.value = "";
    displayPlants(plants);
});