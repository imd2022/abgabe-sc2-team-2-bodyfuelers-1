/* dropdown menu when clicking on "save button" 
   ---- reference: https://www.w3schools.com/howto/howto_js_dropdown.asp */
function saveRecipe() {
  document.getElementById("saveButton").classList.toggle("save");
  document.getElementById("saveDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".special-iconbutton")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  if (!event.target.matches(".special-iconbutton")) {
    var dropdown = document.getElementsByClassName("special-iconbutton");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdowns = dropdown[i];
      if (openDropdowns.classList.contains("save")) {
        openDropdowns.classList.remove("save");
      }
    }
  }
};

/* getting a message from buddy by hovering over buddy */
document.getElementById("buddy").addEventListener("mouseout", mouseOut);

function mouseOut() {
  document.getElementById("buddysMessage").style.visibility = "hidden";
}

function buddysMessage(buddysMessage) {
  document.getElementById(buddysMessage).style.visibility = "visible";
}

function backToSearchPage() {
  window.location.href = "/searchRecipes.html";
}

/* getting ID of before clicked recipe */
const urlParams = new URLSearchParams(window.location.search); // the URLSearchParams returns a parameter of the URL thats behind a query string "?"
const currentId = urlParams.get("ID"); // returns the first value associated with the given search parameter (that is behind "=")

function createIngredientsCard(element) {
  const ingredientCard = document.createElement("div");
  ingredientCard.classList.add("ingredient");
  const ingredientsCardImage = document.createElement("img");
  ingredientsCardImage.src = element.ingredientPicture;
  ingredientCard.appendChild(ingredientsCardImage);
  const ingredientCardContent = document.createElement("div");
  ingredientCardContent.classList.add("ingredientContent");
  ingredientCard.appendChild(ingredientCardContent);
  const ingredientTitle = document.createElement("div");
  ingredientTitle.classList.add("title");
  ingredientTitle.innerText = element.ingredientTitle;
  ingredientCardContent.appendChild(ingredientTitle);
  const ingredientAmount = document.createElement("div");
  ingredientAmount.classList.add("amount");
  ingredientAmount.innerText = element.ingredientAmount;
  ingredientCardContent.appendChild(ingredientAmount);
  return ingredientCard;
}

function createUtensilsCard(element) {
  const utensilCard = document.createElement("div");
  utensilCard.classList.add("utensil");
  const utensilsCardImage = document.createElement("img");
  utensilsCardImage.src = element.utensilPicture;
  utensilCard.appendChild(utensilsCardImage);
  const utensilCardContent = document.createElement("div");
  utensilCardContent.classList.add("utensilContent");
  utensilCard.appendChild(utensilCardContent);
  const utensilTitle = document.createElement("div");
  utensilTitle.classList.add("title");
  utensilTitle.innerText = element.utensilTitle;
  utensilCardContent.appendChild(utensilTitle);
  return utensilCard;
}

fetch("./recipeContent.json").then(function (response) {
  response.json().then(function (data) {
    const recipe = data[currentId];
    document.querySelector(".headerImage").src = recipe.image;
    document.querySelector(".recipeName").textContent = recipe.title;
    document.querySelector("#difficulty").textContent = recipe.difficulty;
    document.querySelector("#time").textContent = recipe.time;
    document.querySelector("#healthIndicator").style.borderRadius =
      recipe.healthIndicatorColor;
    document.querySelector("#healthIndicator").style.backgroundColor =
      recipe.healthIndicatorColor;
    document.querySelector("#healthIndicator").textContent =
      recipe.healthIndicator;
    document.querySelector("#price").textContent = recipe.price;
    document.querySelector(".preparation-list").innerHTML = recipe.preparing;

    recipe.ingredients.forEach(function (element) {
      const ingredientsCard = createIngredientsCard(element);
      document
        .getElementById("listed-ingredients")
        .appendChild(ingredientsCard);
    });

    recipe.neededUtensils.forEach(function (element) {
      const utensilsCard = createUtensilsCard(element);
      document.getElementById("listed-utensils").appendChild(utensilsCard);
    });
  });
});

/*like button */
function like() {
  document
    .getElementsByClassName(".like-button")
    .addEventListener("click", function (e) {
      e.target.classList.toggle("liked");
    });
}

/*function like(event) {
  console.log(event.currentTarget);
  if (event.currentTarget.matches(".active")) {
    let element = document.getElementsByClassName("active");
    element.classList.remove("active");
  } else {
    event.currentTarget.className += " active";
  }
}*/
