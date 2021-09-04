import image from './burger-logo.png';
import backgroundImage from
'./homepage-background.jpg';
import './navbar.css';
import './footer.css';
import './content.css';

export function startWebsite(){
  const contentWrapper = document.querySelector('#content');

  contentWrapper.setAttribute('id','content');

  //navbar
  const navbar = createNavbar();
  contentWrapper.appendChild(navbar);

  //mainContent goes here
  const mainContent = createHomePageContent();
  contentWrapper.appendChild(mainContent);

  //footer
  const footer = createFooter();
  contentWrapper.appendChild(footer);
}

function createNavbar(){
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

function createFooter(){
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

export function loadHomePage(){

  const contentWrapper = document.querySelector('#content');

  contentWrapper.style.backgroundImage =
  'url(' + backgroundImage + ')';

  const mainContent = createHomePageContent();
  contentWrapper.appendChild(mainContent);

}

function createHomePageContent(){
  const mainContent = document.createElement('div');
  const ourStory = document.createElement('div');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Burgers and Steak';

  const ourStoryParagraph = document.createElement('p');
  ourStoryParagraph.textContent = "Here at Burgers and Steak we pride ourselves in cooking the best beef in town, blah blah blah";

  ourStory.setAttribute('id','our-story');

  const lineBreak = document.createElement('br');

  let ourStoryArray = [restaurantName, lineBreak, ourStoryParagraph];

  //Appenidng content to ourStory div
  for(let i = 0; i < 3; i++){
    ourStory.appendChild(ourStoryArray[i]);
  }

  mainContent.setAttribute('id','main-content');
  //changing the background of the page wrapper
  document.querySelector('#content').
  style.backgroundImage =
  'url(' + backgroundImage + ')';

  mainContent.appendChild(ourStory);
  return mainContent;

}
