import './index.html';
import './style.css';

console.log('funguju!');

const btn = document.querySelector(".nav-btn");

const navigace = document.querySelector(".nav")

const pokrocilaNavigace = document.querySelectorAll(".menu-link")

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
    console.log("vlivk")
  }) 
})

