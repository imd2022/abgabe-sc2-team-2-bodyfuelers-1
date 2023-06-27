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

function createChips(chip, dropdown) {
  const createdChipContentContainer = document.createElement("div");
  createdChipContentContainer.classList.add("chip-content-container");

  //creating chip as child of createdChipContentContainer
  const createdChip = document.createElement("div");
  createdChip.classList.add("chip");
  createdChipContentContainer.appendChild(createdChip);
  const chipContent = document.createElement("button");
  chipContent.classList.add("chip-content");
  createdChip.appendChild(chipContent);
  const chipTitle = document.createElement("p");
  chipTitle.innerText = chip.chipName;
  chipTitle.classList.add("filterName");
  chipContent.appendChild(chipTitle);
  const chipImage = document.createElement("img");
  chipImage.src = "../icons/org/org-arrow-without-line.svg";
  chipContent.appendChild(chipImage);

  //creating dropdown content as child of createdChipContentContainer
  const createDropdownContent = document.createElement("div");
  createDropdownContent.classList.add("dropdown-content");
  createdChipContentContainer.appendChild(createDropdownContent);
  const checkboxContainer = document.createElement("form");
  checkboxContainer.classList.add("checkbox-container");
  createDropdownContent.appendChild(checkboxContainer);
  const createLabel = document.createElement("label");
  createLabel.classList.add("form-control");
  createLabel.innerHTML = dropdown;
  checkboxContainer.appendChild(createLabel);
  const createCheckbox = document.createElement("input");
  createCheckbox.type = "checkbox";
  createCheckbox.name = "name";
  createCheckbox.value = "value";
  createCheckbox.id = "id";
  createLabel.appendChild(createCheckbox);

  return createdChipContentContainer;
}

for (let i = 0; i < chips.length; i++) {
  for (let j = 0; j < chips[i].length; j++) {
    console.log(chips[i].dropdownContent[j]);
    //let chipElement = createChips(chips[i], chips[i].dropdownContent[j]);

    //document.getElementById("chip-container").appendChild(chipElement);
  }
}

function activateDropdown(event) {
  const currentClass = event.target.closest(".chip-content");
  currentClass.classList.toggle("active");

  const currentId = document.getElementById("testButtonDropdown");
  currentId.classList.toggle("show");

  /*if (currentClass.classList[1] === "active") {
    const pasteShow = document.querySelectorAll(".dropdown-content");

        if (pasteShow[0].classList.length < 2) {
      pasteShow[0].className += " show";
    } else {
      pasteShow
      console.log(pasteShow[0].classList);
    }
  }*/
}
