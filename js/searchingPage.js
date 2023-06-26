/*show searched word(s) in searchbar */
const urlParams = new URLSearchParams(window.location.search); // the URLSearchParams returns a parameter of the URL thats behind a query string "?"
const searchTerm = urlParams.get("searchTerm"); // returns the first value associated with the given search parameter (that is behind "=")

const searchbar = document.querySelector("form.searchbar"); // returns all elements from the specified html selector "form.searchbar"
const searchInput = searchbar[0]; // saves the first element of the searchbar-array --> input
searchInput.value = searchTerm; // passes the value from the input to searchTerm --> shown in the form

function backToSearchPage() {
  window.location.href = "/searchRecipes.html";
}

let chips = [
  {
    chipName: "Zeitaufwand",
    dropdownContent: ["0-15min", "16-30min", "31-45min", "46-60min", "60+ min"],
  },
  {
    chipName: "Bewertung",
    dropdownContent: [
      "bis 1 Stern",
      "bis 2 Sterne",
      "bis 3 Sterne",
      "bis 4 Sterne",
      "bis 5 Sterne",
    ],
  },
  {
    chipName: "Preis pro Gericht",
    dropdownContent: [
      "max. 3€",
      "max. 6€",
      "max. 9€",
      "max. 12€",
      "max. 15€",
      "mehr als 15€",
    ],
  },
  {
    chipName: "Ernährungsform",
    dropdownContent: ["vegetarisch", "vegan", "maritim", "Rohkost"],
  },
  {
    chipName: "Unverträglichkeit",
    dropdownContent: ["Gluten", "Lactose", "Histamin", "Eier", "Soja"],
  },
  {
    chipName: "Speiseart",
    dropdownContent: ["Frühstück", "Mittagessen", "Abendessen", "Snack"],
  },
  {
    chipName: "Art der Mahlzeit",
    dropdownContent: [
      "Frühstück",
      "Snack",
      "Vorspeise",
      "Hauptspeise",
      "Dessert",
      "Beilage",
    ],
  },
  {
    chipName: "regionale Küche",
    dropdownContent: [
      "italienisch",
      "griechisch",
      "türkisch",
      "asiatisch",
      "amerikanisch",
      "deutsch",
    ],
  },
];

//console.table(chips);

function createChips(chip) {
  const createdChip = document.createElement("div");
  createdChip.classList.add("chip");
  const chipContent = document.createElement("div");
  chipContent.classList.add("chip-content");
  createdChip.appendChild(chipContent);
  const chipTitle = document.createElement("p");
  chipTitle.innerText = chip.chipName;
  chipTitle.classList.add("filterName");
  chipContent.appendChild(chipTitle);
  const chipImage = document.createElement("img");
  chipImage.src = "../icons/org/org-arrow-without-line.svg";
  chipContent.appendChild(chipImage);
  return createdChip;
}

for (let i = 0; i < chips.length; i++) {
  let chipElement = createChips(chips[i]);
  document.getElementById("chip-container").appendChild(chipElement);
}
