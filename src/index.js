
import {startWebsite, loadHomePage,
createHomePageContent} from './home/page-load.js';
import {loadContactsPage} from './contacts/contacts.js';

startWebsite();

const contactsTab = document.querySelector('#contacts');

contactsTab.addEventListener('click', ()=>{
  document.querySelector('#main-content').remove();
  loadContactsPage();
});

const homePageTab = document.querySelector('#home');

homePageTab.addEventListener('click', ()=>{
  document.querySelector('#main-content').remove();
  loadHomePage();
});
