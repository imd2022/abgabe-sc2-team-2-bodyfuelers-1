/* Tab bar 
  ----reference: https://www.w3schools.com/howto/howto_js_tabs.asp ---- */
function tabElement(evt, recipeType) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(recipeType).style.display = "grid";
  document.getElementById(recipeType + "Headline").style.display = "block";
  evt.currentTarget.className += " active";
}

/* creating the recipe card elements */
function createRecipeCard(element) {
  const cardElement = document.createElement("div"); //creates a new "div" element ---> is parent1
  cardElement.classList.add("card-item"); //gives the previously created div a class-name
  cardElement.id = element.id; //adds specific id to the card element
  cardElement.onclick = goToRecipePage;
  const cardImage = document.createElement("img"); //creates a new "img" element ---> is child1 from parent1
  cardImage.src = element.image; //src = searches for a url that can be found in the "elements" of the json file under "image"
  cardElement.appendChild(cardImage); //adds "cardImage" as child1 to parent1
  const cardContent = document.createElement("div"); //creates a new "div" element ---> is parent2
  cardContent.classList.add("card-content"); //gives the previously created div a class-name
  cardElement.appendChild(cardContent); //adds "cardContent" as child to parent1 ---> becomes parent2
  const cardTitle = document.createElement("p"); //creates a new "p" element ---> is child1 from parent2
  cardTitle.innerText = element.title;
  cardTitle.classList.add("card-title"); //innerText = takes over text that can be found in the "elements" of the json file under "title"
  cardContent.appendChild(cardTitle); //adds "cardTitle" as child1 to parent2
  const mealType = document.createElement("p");
  mealType.innerText = element.mealType;
  mealType.classList.add("card-mealType");
  cardContent.appendChild(mealType); //adds "mealType" as child2 to parent2
  const healthIndicator = document.createElement("div");
  healthIndicator.classList.add("healthIndicator");
  healthIndicator.style.backgroundColor = element.healthIndicator;
  cardContent.appendChild(healthIndicator); //adds "healthIndicator" as child3 to parent2
  const cardTags = document.createElement("div");
  cardTags.classList.add("card-tags");
  cardContent.appendChild(cardTags); //adds "cardTags" as child5 to parent2 ---> becomes parent 3
  const difficulty = document.createElement("span");
  difficulty.innerText = element.difficulty;
  cardTags.appendChild(difficulty); //adds "difficulty" as child1 to parent3
  const time = document.createElement("span");
  time.innerText = element.time;
  cardTags.appendChild(time); //adds "time" as child2 to parent3
  const price = document.createElement("span");
  price.innerText = element.price;
  cardTags.appendChild(price); //adds "price" as child3 to parent3
  return cardElement; //cardElement with all its undercategories is returned
}

/* getting content from json-file */

// fetch = asynchron request / when finished then the function will be executed
fetch("./recipes.json").then(function (response) {
  // the json function converts the data from response
  response.json().then(function (data) {
    //for each element of the array with property recipesOfTheWeek the anonymous function is executed
    data.recipesOfTheWeek.forEach(function (element) {
      const cardElement = createRecipeCard(element); // for each element of the array a card element is created
      document.getElementById("recipeOfTheWeek").appendChild(cardElement); // all cardElements are added as children to the column recipeOfTheWeek
    });

    data.desserts.forEach(function (element) {
      const cardElement = createRecipeCard(element);
      document.getElementById("desserts").appendChild(cardElement);
    });

    data.mainCourses.forEach(function (element) {
      const cardElement = createRecipeCard(element);
      document.getElementById("mainCourses").appendChild(cardElement);
    });
  });
});

/* handling search submitts */
function handleSearchSubmit(event) {
  event.preventDefault(); //all settings are reset
  const searchTerm = event.target[0].value; //this form has two targets (input + button), we want to get the value from the input (target[0])
  console.log(searchTerm);
  window.location = "/searchingPage.html?searchTerm=" + searchTerm; //when triggering the event, the window location changes to the new Page with the value of the form
}

/* getting a message from buddy by hovering over buddy */
document.getElementById("buddy").addEventListener("mouseout", mouseOut);

function mouseOut() {
  document.getElementById("buddysMessage").style.visibility = "hidden";
}

function buddysMessage(buddysMessage) {
  document.getElementById(buddysMessage).style.visibility = "visible";
}

/* change page when clicking on card items */
function goToRecipePage(event) {
  const currentId = event.target.closest(".card-item").id; //closest function heading toward the document root which is the CSS selector
  window.location.href = "/recipePage.html?ID=" + currentId;
}
