
function getValues(event) {
  event.preventDefault()
let favColor = document.getElementById("color").value;
let favAnimal = document.getElementById("favAnimal").value;
let favSeason = document.querySelector("input[name='season']:checked").value;
let favArray = [favColor, favAnimal, favSeason];
console.log(favArray + " favArray")
}

window.addEventListener("load", function() {
  let form = document.getElementById("favorite-things");
form.addEventListener("submit", getValues);
})