/* Tab bar */
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
  document.getElementById(recipeType).style.display = "block";
  document.getElementById(recipeType + "Headline").style.display = "block";
  evt.currentTarget.className += " active";
}

function createRecipeCard(element) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card-item");
  const cardImage = document.createElement("img");
  cardImage.src = element.image;
  cardElement.appendChild(cardImage);
  const cardTitle = document.createElement("p");
  cardTitle.innerText = element.title;
  const cardContent = document.createElement("div");
  cardContent.appendChild(cardTitle);
  cardElement.appendChild(cardContent);
  cardContent.classList.add("card-content");
  const mealType = document.createElement("p");
  mealType.innerText = element.mealType;
  mealType.classList.add("card-mealType");
  cardContent.appendChild(mealType);
  const healthIndicator = document.createElement("div");
  healthIndicator.classList.add("healthIndicator");
  healthIndicator.style.backgroundColor = element.healthIndicator;
  cardContent.appendChild(healthIndicator);
  const cardTags = document.createElement("div");
  cardTags.classList.add("card-tags");
  cardContent.appendChild(cardTags);
  const difficulty = document.createElement("span");
  difficulty.innerText = element.difficulty;
  cardTags.appendChild(difficulty);
  const time = document.createElement("span");
  time.innerText = element.time;
  cardTags.appendChild(time);
  const price = document.createElement("span");
  price.innerText = element.price;
  cardTags.appendChild(price);
  return cardElement;
}

/* content json */
fetch("./recipes.json").then(function (response) {
  console.log(response);
  response.json().then(function (data) {
    console.log(data);
    data.recipesOfTheWeek.forEach(function (element) {
      const cardElement = createRecipeCard(element);
      document.getElementById("recipeOfTheWeek").appendChild(cardElement);
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
