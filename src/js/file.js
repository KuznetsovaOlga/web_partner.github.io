// выпадающий список городов
const currentItem = document.querySelector("#js-current-item");
const listItem = document.querySelector("#js-dropdown-menu");
const icon = document.querySelector(".fa-angle-down");
const dropdown = document.querySelector("#js-dropdown");

dropdown.addEventListener("click", function(){
  if (event.target.parentNode.className !== "dropdown-arrow") return;
  listItem.classList.toggle("item-show");
  icon.classList.toggle("fa-turn");

  if (listItem.classList.contains("item-show")) {
      listItem.addEventListener("click", function(){
      currentItem.textContent = "";
      currentItem.textContent += event.target.textContent;
      listItem.classList.remove("item-show");
      icon.classList.remove("fa-turn");
    })
  }
});

// выпадающий список(меню)
const buttonBars = document.querySelector("#js-button-bars");
const menu = document.querySelector("#js-menu");

buttonBars.onclick = function() {
  menu.classList.toggle("item-show");
};


// слайдер для телефона
function changeSizeScreen(screen) {
  const width = 253; 
  const count = 1; 
  
  const list = document.querySelector('.offer-list');
  const listElems = list.querySelectorAll('.offer-item');
  
  let position = 0; 
  
  document.querySelector('.play-left').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };
  
  document.querySelector('.play-right').onclick = function() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
  };
}

let screen = window.matchMedia("(max-width: 480px)");
changeSizeScreen(screen);
screen.addListener(changeSizeScreen);

// слайдер для ПК
let width = 324; 
let count = 1; 

let list = document.querySelector('.offer-list');
let listElems = list.querySelectorAll('.offer-item');

let position = 0; 

document.querySelector('.play-left').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

document.querySelector('.play-right').onclick = function() {
position -= width * count;
position = Math.max(position, -width * (listElems.length - count));
  if (position < -972) {
    position = 0;
  }
  list.style.marginLeft = position + 'px';
};



