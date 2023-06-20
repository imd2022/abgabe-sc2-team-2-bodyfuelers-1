function saveRecipe() {
  document.getElementById("saveButton").style.borderRadius = "8px";
}

/* getting a message from buddy by hovering over buddy */
document.getElementById("buddy").addEventListener("mouseout", mouseOut);

function mouseOut() {
  document.getElementById("buddysMessage").style.visibility = "hidden";
}

function buddysMessage(buddysMessage) {
  document.getElementById(buddysMessage).style.visibility = "visible";
}
