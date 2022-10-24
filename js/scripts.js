
function getValues(event) {
  event.preventDefault();
  newUl.remove();
let favColor = document.getElementById("color").value;
let favAnimal = document.getElementById("favAnimal").value;
let favSeason = document.querySelector("input[name='season']:checked").value;
let favArray = [favColor, favAnimal, favSeason];
console.log(favArray + " favArray")

let secondItem = favArray[1]; 
let firstItem = favArray[0];
let thirdItem = favArray[2];

let newArray = [];
newArray.push(secondItem, firstItem, thirdItem);
console.log(newArray);

let newUl = document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.append(newArray[0]);
li2.append(newArray[1]);
li3.append(newArray[2]);

newUl.prepend(li1);
li1.after(li2);
li2.after(li3);

body = document.querySelector("body");

body.append(newUl);
// body.append(li1);
// body.append(li2);
// body.append(li3);

}

window.addEventListener("load", function() {
  let form = document.getElementById("favorite-things");
form.addEventListener("submit", getValues);
})