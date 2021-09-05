
import '../home/navbar.css';
import '../home/footer.css';
import backgroundImage from './contacts-page-background.jpg';
import './contacts.css';

export function loadContactsPage(){

  const contentWrapper = document.querySelector('#content');

  contentWrapper.style.backgroundImage =
  'url(' + backgroundImage + ')';

  const mainContent = createMainContent();
  contentWrapper.appendChild(mainContent);

}

function createMainContent(){
  const mainContent = document.createElement('div');

  const contactList = document.createElement('ul');
  contactList.setAttribute('id','contacts-list');
  const contact = [];

  //The contents of the contacts array
  const contactText = [];
  contactText[0] = `Joe Doe
joe.doe@burgerandsteaks.com`;
  contactText[1] = `Eugene H.Krabs
eugene.krabs@burgersandsteaks.com`;
  contactText[2] = `Bob Burger
bob.burger@burgerandsteaks.com`;

  //creating an array of contacts
  for(let i = 0; i < 3; i++){
      contact[i] = document.createElement('li');
      contact[i].textContent = contactText[i];
      contactList.appendChild(contact[i]);
  }

  mainContent.setAttribute('id','main-content');
  mainContent.appendChild(contactList);
  return mainContent;
}
