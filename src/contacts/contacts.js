
import '../home/navbar.css';
import '../home/footer.css';
import backgroundImage from './background-image-1.jpg';

export function loadContactsPage(){

  const contentWrapper = document.querySelector('#content');

  contentWrapper.style.backgroundImage =
  'url(' + backgroundImage + ')';

  const mainContent = createMainContent();
  mainContent.setAttribute('id','main-content');
  contentWrapper.appendChild(mainContent);

}

function createMainContent(){
  const mainContent = document.createElement('div');
  const ourStory = document.createElement('div');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Burgers and Steak';

  const ourStoryParagraph = document.createElement('p');
  ourStoryParagraph.textContent = "These are our contacts";

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
