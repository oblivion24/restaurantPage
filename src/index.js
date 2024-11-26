
import "./styles.css";
import { createDivForHome } from "./home.js";
import { createDivForMenu } from "./menu.js";
import { createDivForContacts } from "./contacts.js";
console.log('hello there!');
const content = document.getElementById('content');
//tabs
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    createDivForMenu(); 
})
const home = document.getElementById('home');
home.addEventListener('click', () => {
    createDivForHome();
})
const contacts = document.getElementById('contacts');
contacts.addEventListener('click', () => {
    createDivForContacts();
})