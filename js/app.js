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


// Akshay Kumar Maurya
const countValueEl = document.getElementById('countValue');

pageVisitCount();

// Here created key & value to starting value as 0
// https://api.countapi.xyz/create?namespace=my-name&key=akshay&value=0


function pageVisitCount() {
  // For updating Value of visitors need to fetch this api
  //here amount will be 1, because we are increasing visitor value by +1
  fetch('https://api.countapi.xyz/update/my-name/akshay?amount=1')
    .then(res => res.json())
    .then(res => {
      countValueEl.innerHTML = res.value;
    })
}


// scroll to top
const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});
window.addEventListener('scroll', function(){
    if(this.window.scrollY >= 700){
        scrolltp.style.opacity = 1;
    }else{
        scrolltp.style.opacity = 0;
    }
})
