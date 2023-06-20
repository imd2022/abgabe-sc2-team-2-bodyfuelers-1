function saveRecipe() {
  //document.getElementById("saveButton").style.borderRadius = "8px";
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
