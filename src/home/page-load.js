import image from './burger-logo.png';
import './navbar.css';
import './footer.css';
import './content.css';

export function loadHomePage(){
  const contentWrapper = document.querySelector('#content');

  contentWrapper.setAttribute('id','content');

  //navbar
  const navbar = createNavbar();
  contentWrapper.appendChild(navbar);

  //mainContent goes here
  const mainContent = createHomePageContent();
  mainContent.setAttribute('id','main-content');
  contentWrapper.appendChild(mainContent);

  //footer
  const footer = createFooter();
  contentWrapper.appendChild(footer);
}

export function createNavbar(){
  //creating the navbar in memory
  const navbar = document.createElement('nav');

  //creating icon
  const logoLink = createLink('#');

  //Extracting reference to image for use with webpack
  const logoImage = new Image();
  logoImage.src = image;
  logoLink.appendChild(logoImage);
  //appending image
  navbar.appendChild(logoLink);

  //creating list of links
  const tabs = document.createElement('ul');
  const homeTab = createTab('Home');
  const menuTab = createTab('Menu');
  const contactsTab = createTab('Contacts');

  const tabArray = [homeTab, menuTab, contactsTab];

  //Appending all tabs to the tabs ul
  for(let i = 0; i < 3; i++){
    tabs.appendChild(tabArray[i]);
  }

  //setting id attribute in order to apply styles
  navbar.setAttribute('id','navbar');

  //apending tabs to the navbar
  navbar.appendChild(tabs);
  return navbar;
}

function createTab(tabText){
  const tab = document.createElement('li');
  const tabLink = createLink('#');
  tabLink.textContent = tabText;
  tabLink.setAttribute('id',tabText.toLowerCase());
  tab.appendChild(tabLink);
  return tab;
}

function createLink(link){
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', link);
  return linkElement;
}

export function createFooter(){
  const footer = document.createElement('footer');

  //creating an unordered list
  const footerTabs = document.createElement('ul');
  const copyRightTab = createTab('Copyright 2021 © Burgers and Steak');
  const privacyPolicyTab = createTab('Privacy Policy');
  const createdByTab = createTab('Created by Ali-009');

  let footerTabsArray = [copyRightTab, privacyPolicyTab, createdByTab];

  //appending tabs to the footer
  for(let i = 0; i < 3; i++){
    footerTabs.appendChild(footerTabsArray[i]);
  }

  footer.appendChild(footerTabs);
  footer.setAttribute('id','footer');

  return footer;
}

export function createHomePageContent(){
  const mainContent = document.createElement('div');
  const ourStory = document.createElement('div');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Burgers and Steak';

  const ourStoryParagraph = document.createElement('p');
  ourStoryParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  ourStory.setAttribute('id','our-story');

  const lineBreak = document.createElement('br');

  let ourStoryArray = [restaurantName, lineBreak, ourStoryParagraph];

  //Appenidng content to ourStory div
  for(let i = 0; i < 3; i++){
    ourStory.appendChild(ourStoryArray[i]);
  }

  mainContent.appendChild(ourStory);
  return mainContent;

}
