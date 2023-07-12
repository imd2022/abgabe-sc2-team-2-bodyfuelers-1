//Theresa Portfolio Missions-.. nav Hausaufgabe
let nav = document.querySelector("nav");
let activePath = document.location.pathname;

let activeRecipeSearch;
let activeNewRecipes = activePath === "searchRecipes.html" ? "sub-active" : "";
let activeOwnRecipes = activePath === "addRecipe.html" ? "sub-active" : "";

nav.innerHTML = `
      <img
        src="icons/nav/nav-logo.svg"
        alt="buddy logo"
        class="buddy-nav-logo"
        width="173px"
        ;
        height="81px"
        ;
      />
      <ul class="upper-nav">
        <li>
          <a href="">
            <img src="icons/nav/nav-dashboard.svg" alt="" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="searchRecipes.html" class="active">
            <img src="icons/nav/nav-search-recipes.svg" alt="" />
            <span>Rezepte suchen</span>
          </a>
          <ul class="sub-list">
            <li>
              <a href="searchRecipes.html" class="${activeNewRecipes}">neue Rezepte</a>
            </li>
            <li>
              <a href="">gespeicherte Rezepte</a>
            </li>
            <li>
              <a href="addRecipe.html" class="${activeOwnRecipes}">eigene Rezepte</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">
            <img src="icons/nav/nav-plan-recipes.svg" alt="" />
            <span>Rezepte planen</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="icons/nav/nav-shopping-list.svg" alt="" />
            <span>Einkaufsliste</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="icons/nav/nav-cook-recipes.svg" alt="" />
            <span>Rezepte kochen</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="icons/nav/nav-successes.svg" alt="" />
            <span>Erfolge</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">
            <img src="icons/nav/nav-profile.svg" alt="" />
            <span>Profil</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="icons/nav/nav-settings.svg" alt="" />
            <span>Einstellungen</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="icons/nav/nav-logout.svg" alt="" />
            <span>Log Out</span>
          </a>
        </li>
      </ul>`;
