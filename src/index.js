
import {loadHomePage, createHomePageContent} from './home/page-load.js';
import {loadContactsPage} from './contacts/contacts.js';

loadHomePage();

const contactsTab = document.querySelector('#contacts');

contactsTab.addEventListener('click', ()=>{
  document.querySelector('#main-content').remove();
  console.log(loadContactsPage);
  loadContactsPage();
});

const homePageTab = document.querySelector('#home');

homePageTab.addEventListener('click', ()=>{
  document.querySelector('#main-content').remove();
  createHomePageContent();
});
