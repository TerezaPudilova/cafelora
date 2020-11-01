import './index.html';
import './style.css';

console.log('funguju!');

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