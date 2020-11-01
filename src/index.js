import './index.html';
import './style.css';
import { Layer } from './Layer/index.js'

console.log('funguju!');

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const btn = document.querySelector(".nav-btn");

const navigace = document.querySelector(".nav")

const pokrocilaNavigace = document.querySelectorAll(".menu-link")

const objednavka = document.querySelector(".order-btn")

const hrnecek = document.querySelector(".drink__cup")

const orderBtn = document.querySelector(".order-btn")

btn.addEventListener('click', (event) => {
  if (navigace.className.includes("nav-closed")) {
    navigace.className = "nav"
  } else {
    navigace.className = "nav nav-closed"
  }
}) 

pokrocilaNavigace.forEach(item => {
  item.addEventListener('click', (event) => {
    navigace.className = "nav nav-closed"
  }) 
})

objednavka.addEventListener('click', (event) => {
  if (orderBtn.textContent === "Objednat") {
  hrnecek.classList += " drink__cup--selected"
  orderBtn.textContent= "Zrušit"
} else {
  hrnecek.className = "drink__cup"
  orderBtn.textContent= "Objednat"
}
})

const drinkInfo = document.querySelector(".drink__info")
/* drinkInfo.innerHTML += Layer({
  color: '#feeeca',
  label: 'mléčná pěna',
})
drinkInfo.innerHTML += Layer({
  color: '#fed7b0',
  label: 'teplé mléko',
})
drinkInfo.innerHTML += Layer({
  color: '#613916',
  label: 'espresso',
}) */

layers.forEach((layer) => {
  drinkInfo.innerHTML += Layer(layer) 
})
