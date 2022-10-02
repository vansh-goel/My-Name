const nameForm = document.querySelector("header>form");
const nameInput = document.querySelector("#name-input");

const toTitleCase = (str) => {
  let toReturn = "";
  toReturn += str[0].toUpperCase();
  if (str.length > 1) {
    for (let i = 1; i < str.length; i++) {
      toReturn += str[i].toLowerCase();
    }
  }
  return toReturn;
};

console.log(toTitleCase("hobSbj"));

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const namePartsArray = nameInput.value.split(" ");
  for (let i = 0; i < namePartsArray.length; i++) {
    namePartsArray[i] = toTitleCase(namePartsArray[i]);
  }
  const nameToNavigateTo = namePartsArray.join("-");
  nameInput.value = "";
  window.location.hash = nameToNavigateTo;
});
