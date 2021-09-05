
import {startWebsite, loadHomePage,
createHomePageContent} from './home/page-load.js';
import {loadContactsPage} from './contacts/contacts.js';
import {loadMenuPage} from './menu/menu.js';

startWebsite();

const homeTab = document.querySelector('#home');

homeTab.addEventListener('click', ()=>{
  document.querySelector('#main-content').remove();
  loadHomePage();
});

const menuTab = document.querySelector('#menu');

menuTab.addEventListener('click', () =>{
  document.querySelector('#main-content').remove();
  loadMenuPage();
});

const contactsTab = document.querySelector('#contacts');

contactsTab.addEventListener('click', ()=>{
  document.querySelector('#main-content').remove();
  loadContactsPage();
});
