/*
-> This is where the function behavior of toggleMenu() for an onClick event 
will be defined. 
->Using in-built system in js, targeting element on webpage to 
use via document.queryselector. 
-> Using in-built js function toggle, we will target the two elements
and whenever they are clicked, it will either add or remove the open class
within that element, and their open class will have its own styling. 
*/ 

function toggleMenu() {

const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

menu.classList.toggle("open");
icon.classList.toggle("open");
}