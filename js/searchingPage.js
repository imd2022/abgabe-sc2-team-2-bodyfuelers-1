const urlParams = new URLSearchParams(window.location.search); // the URLSearchParams returns a parameter of the URL thats behind a query string "?"
const searchTerm = urlParams.get("searchTerm"); // returns the first value associated with the given search parameter (that is behind "=")

const searchbar = document.querySelector("form.searchbar"); // returns all elements from the specified html selector "form.searchbar"
console.log(searchbar);
const searchInput = searchbar[0]; // saves the first element of the searchbar-array --> input
searchInput.value = searchTerm; // passes the value from the input to searchTerm --> shown in the form
