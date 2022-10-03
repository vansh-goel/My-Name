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


function searchFunction() {
    
  var searchInput = document.getElementById('name-input');

  var filter = searchInput.value.toUpperCase();
  
  var myNames = document.getElementById('my-names');
  var myName = myNames.getElementsByClassName('my-name');

  for (i = 0; i < myName.length; i++) {
      var h1 = myName[i].getElementsByTagName("h1")[0];
      var txtValue = h1.textContent || h1.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          myName[i].style.display = "";
      } 
      else {
          myName[i].style.display = "none";
      }
  }
}