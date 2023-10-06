import  trainings from "./data.js";

window.addEventListener("load", ()=> {
    const firstNavItem = navItems[0];
    firstNavItem.classList.add("tr-link-active");
    firstNavItem.click();
  });



const cardWrapper = document.getElementById("card-wrapper")


//mapping training items nav-item

const trainingNav = document.getElementById("training-nav")

trainingNav.innerHTML = trainings.map(item => `
  <li class="tr-link" data-id="${item.id}">${item.name}</li>
`).join("");




//I have select all link items here
const navItems = document.querySelectorAll(".tr-link");

navItems.forEach(navItem =>{
navItem.addEventListener('click',()=> {
    navItems.forEach(item => item.classList.remove("tr-link-active"));

    const selectedId = navItem.getAttribute("data-id");

    const filteredTrainings = trainings.filter(item => item.id == selectedId);

    cardWrapper.innerHTML = filteredTrainings.map(item => `
    ${item.prices.map(newItem => `
      <div class="card">
        <div class="card-header">
            <h5>${newItem.name}</h5>
        </div>
        <img src="/images/frontend.png" alt="" width="200">
        <div class="card-content">
            <h2>Details</h2>
            <hr>
            <div class="card-content-details">
                <ul>
                    <li>${newItem.video ? "7/24 Training Videos" : "<del>7/24 Training Videos</del>"}</li>
                    <li>${newItem.exams ? "Online Exams" : "<del>Online Exams</del>"}</li>
                    <li>${newItem.labs ? "Labs for practice" : "<del>Labs for practice</del>"}</li>
                    <li>${newItem.mentor ? "Mentor support" : "<del>Mentor suport</del>"}</li>
                </ul>
            </div>
            <div class="card-footer">
                <div class="card-price">
                    <del>${newItem.oldprice}$</del>
                    <h1>${newItem.price}$</h1>
                </div>
                <button class="card-btn">Buy Now</button>
            </div>
        </div>
      </div>
    `).join('')}
  `).join('');

    console.log(selectedId)
    //adding active class for tr-link class
    navItem.classList.add("tr-link-active")
})

});




// Mode settings

const modeBtn = document.querySelector(".mode-button");
let darkMode = true;


modeBtn.addEventListener('click', ()=>{
  darkMode=!darkMode
  //light mode settings
  if(darkMode==false){
    modeBtn.classList.remove("fa-toggle-on")
    modeBtn.classList.add("fa-toggle-off")

    document.documentElement.style.setProperty("--global-green","#c9fdd7")
    document.documentElement.style.setProperty("--background-color","#efefef")
    document.documentElement.style.setProperty("--primary-text","#2a2438")
    document.documentElement.style.setProperty("--btn-color","#069a8e")
  }else{
    modeBtn.classList.remove("fa-toggle-off")
    modeBtn.classList.add("fa-toggle-on")

    document.documentElement.style.setProperty("--global-green","#5c5470")
    document.documentElement.style.setProperty("--background-color","#2a2438")
    document.documentElement.style.setProperty("--primary-text","#efefef")
    document.documentElement.style.setProperty("--btn-color","#069a8e")
  }
})


