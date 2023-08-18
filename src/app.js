// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese")
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato")
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() { 
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion")
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce")
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state

let btnpatty = document.querySelector('.btn-patty')
let btncheese = document.querySelector(".btn-cheese")
let btntomato = document.querySelector(".btn-tomatoes")
let btnonion = document.querySelector(".btn-onions")
let btnlettuce = document.querySelector(".btn-lettuce")

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  if(state.Patty){
    btnpatty.classList.add("active")
  }else {
    btnpatty.classList.remove("active")
  }
  renderAll();
}


document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  if(state.Cheese){
    btncheese.classList.add("active")
  }else {
    btncheese.classList.remove("active")
  }
  renderAll();
}


document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  if(state.Tomatoes){
    btntomato.classList.add("active")
  }else {
    btntomato.classList.remove("active")
  }
  renderAll();
}


document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  if(state.Onions){
    btnonion.classList.add("active")
  }else {
    btnonion.classList.remove("active")
  }
  renderAll();
}

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  if(state.Lettuce){
    btnlettuce.classList.add("active")
  }else{
    btnlettuce.classList.remove("active")
  }
  renderAll();
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
const items = document.querySelectorAll(".items")
for(i=0;i<items.length;i++){
  let item = items[i].textContent
  console.log(item)
  if(state[item]!=true){
    items[i].style.display="none"
  }
  else {
    items[i].style.display="block"
  }

}}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
  let total = calculate();
  let price = document.querySelector(".price-details")
  price.textContent = `INR ${total}`

  function calculate() {
    let total = wholeWheatBun;
    for (let i in ingredients){
      if(state[i]){
        total += ingredients[i]
      }
    }return total
  }
}

const pay =  document.querySelector(".Rectangle5")
pay.addEventListener('click', function () {
   let paid = confirm("Do you want to pay?")
    if(paid){
      let add = confirm("You have paid the bill😍😀")
      if (add){
        confirm("Here is some cashback for you ")
      }else {
        confirm("Have a good day!!..")
      }
    }else if(paid!==true) {
      let no = confirm(" Go back and wash the Dishes😡")
      if(no){
        confirm("Good boy!Clean the dishes carefully")
      }else{
        confirm("Call the POLICE!!..")
      }
    }
  }
);

