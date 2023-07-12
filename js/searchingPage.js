/*show searched word(s) in searchbar */

//↓ the URLSearchParams returns a parameter of the URL thats behind a query string "?"
const urlParams = new URLSearchParams(window.location.search);

//↓ returns the first value associated with the given search parameter (that is behind "=")
const searchTerm = urlParams.get("searchTerm");

//↓ returns all elements from the specified html selector "form.searchbar"
const searchbar = document.querySelector("form.searchbar");

//↓ saves the first element of the searchbar-array --> input
const searchInput = searchbar[0];

//↓ passes the value from the input to searchTerm --> shown in the form
searchInput.value = searchTerm;

function backToSearchPage() {
  window.location.href = "searchRecipes.html";
}

/*array for the chips with id, chipName and dropdownContent*/
let chips = [
  {
    id: 0,
    chipName: "Zeitaufwand",
    dropdownContent: ["0-15min", "16-30min", "31-45min", "46-60min", "60+ min"],
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    chipName: "Ernährungsform",
    dropdownContent: ["vegetarisch", "vegan", "maritim", "Rohkost"],
  },
  {
    id: 4,
    chipName: "Unverträglichkeit",
    dropdownContent: ["Gluten", "Lactose", "Histamin", "Eier", "Soja"],
  },
  {
    id: 5,
    chipName: "Speiseart",
    dropdownContent: ["Frühstück", "Mittagessen", "Abendessen", "Snack"],
  },
  {
    id: 6,
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
    id: 7,
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

/*creating chips */
function createChips(chip) {
  //↓ parent of all following childen
  const createdChipContentContainer = document.createElement("div");
  createdChipContentContainer.classList.add("chip-content-container");

  //↓ creating a "chip" with all its content as child of createdChipContentContainer
  const createdChip = document.createElement("div");
  createdChip.classList.add("chip");
  createdChipContentContainer.appendChild(createdChip);
  const chipContent = document.createElement("button");
  // --↓-- anonymous function, so that another value can be passed to the function
  chipContent.onclick = function (event) {
    activateDropdown(event, chip.id);
  };
  chipContent.classList.add("chip-content");
  createdChip.appendChild(chipContent);
  const chipTitle = document.createElement("p");
  // --↓-- the transferred specific chipName is added as text
  chipTitle.innerText = chip.chipName;
  chipTitle.classList.add("filterName");
  chipContent.appendChild(chipTitle);
  const chipImage = document.createElement("img");
  chipImage.src = "./icons/org/org-arrow-without-line.svg";
  chipContent.appendChild(chipImage);

  //↓ creating "dropdown-content" as child of createdChipContentContainer
  const createDropdownContent = document.createElement("div");
  createDropdownContent.classList.add("dropdown-content");
  // --↓-- the transferred specific Id is added with "chipDropdown" --> #chipDropdown0
  createDropdownContent.id = "chipDropdown" + chip.id;
  createdChipContentContainer.appendChild(createDropdownContent);
  const checkboxContainer = document.createElement("form");
  checkboxContainer.classList.add("checkbox-container");
  createDropdownContent.appendChild(checkboxContainer);

  // --↓-- loops through the array which is listed under the property dropdownContent
  for (let i = 0; i < chip.dropdownContent.length; i++) {
    // --↓-- saves content which is generated through "createdFormGroup"
    const savedFormGroup = createdFormGroup(
      chip.dropdownContent[i],
      chip.id + "-" + i
    );
    // --↓-- adds the saved content of createdFormGroup as a child to the checkboxContainer
    checkboxContainer.appendChild(savedFormGroup);
  }

  return createdChipContentContainer;
}

/*creates all checkboxes with label and parent div */
function createdFormGroup(dropdown, idIndex) {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-control");
  const createLabel = document.createElement("label");
  // --↓-- adds "for" to the label so the label knows which checkbox it belongs to ---> for: "checkbox0-0"
  createLabel.htmlFor = "checkbox" + idIndex;
  const createdCheckbox = document.createElement("input");
  createdCheckbox.type = "checkbox";
  createdCheckbox.name = "name";
  createdCheckbox.value = "value";
  // --↓-- adds an identical value as the for-value as ID to the checkbox so that the label can reference it ---> id: "checkbox0-0"
  createdCheckbox.id = "checkbox" + idIndex;
  // --↓-- adds the specific value as text, which is found under the object-property "dropDownContent"
  createLabel.innerText = dropdown;
  formGroup.appendChild(createdCheckbox);
  formGroup.appendChild(createLabel);

  return formGroup;
}

/*loops through all chips objects and creates them with all their contents as children of "chip-container" */
for (let i = 0; i < chips.length; i++) {
  let chipElement = createChips(chips[i]);
  document.getElementById("chip-container").appendChild(chipElement);
}

/*when the button or its children are clicked the function is called  */
function activateDropdown(event, chipId) {
  //↓ returns the next top-level element, which has the classic name "chip-content"
  const currentClass = event.target.closest(".chip-content");
  currentClass.classList.toggle("active");

  const currentId = document.getElementById("chipDropdown" + chipId);
  currentId.classList.toggle("show");
}
