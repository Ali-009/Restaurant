import cheeseBurgerImg from './cheese-burger.jpeg';
import chickenBurgerImg from'./chicken-burger.jpg';
import veggieBurgerImg from './veggie-burger.jpg';

import filletSteakImg from './fillet-steak.webp';
import ribEyeSteakImg from './rib-eye-steak.webp';
import tBoneSteakImg from './t-bone-steak.jpeg';

import backgroundImage from './menu-background.png';
import './menu-page.css';

export function loadMenuPage(){

  const contentWrapper = document.querySelector('#content');

  contentWrapper.style.backgroundImage =
  'url(' + backgroundImage + ')';
  contentWrapper.style.backgroundRepeat = 'repeat-x';
  contentWrapper.style.backgroundSize = 'auto';

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  const mealMenu = createMenuPageContent();
  mainContent.appendChild(mealMenu);

  contentWrapper.appendChild(mainContent);
}

function createMenuPageContent(){

  const mealMenu = document.createElement('div');
  mealMenu.setAttribute('id','meal-menu');

  const burgerMenu = createBurgerMenu();
  mealMenu.appendChild(burgerMenu);

  const steakMenu = createSteakMenu();
  mealMenu.appendChild(steakMenu);

  return mealMenu;

}

function createBurgerMenu(){
  //An array of img sources for burgers
  const burgerImgSrcs = [cheeseBurgerImg, chickenBurgerImg, veggieBurgerImg];

  const cheeseBurgerText = ['Cheese Burger', 'This has cheese, and it\'s a burger, who would have thought','Price: 5$'];
  const chickenBurgerText = ['Chicken Burger','Winner, winner, chicken dinner?','Price: 5$'];
  const veggieBurgerText = ['Veggie Burger','Imagine being vegan, smh','Price: 2$'];

  //2D Array contianing all burger text
  const burgerText = [cheeseBurgerText, chickenBurgerText, veggieBurgerText];

  return createMealsContainer(burgerImgSrcs, burgerText);
}

function createSteakMenu(){
  //An array of img sources for steaks
  const steakImgSrcs = [filletSteakImg, ribEyeSteakImg, tBoneSteakImg];

  const filletSteakText = ['Fillet Steak', 'Just like boneless pizza, a fillet has no bones', 'Price: 10$'];
  const ribEyeSteakText = ['Rib-Eye Steak', 'Also boneless steak, we just charge more cause it sounds cooler', 'Price: 15$'];
  const tBoneSteakText = ['T-Bone Steak', 'If you couldn\'t tell, it\'s called t-bone cause the bone is shaped like a \'T\'', 'Price: 15$'];

  //2D Array containing all steak text
  const steakText = [filletSteakText, ribEyeSteakText, tBoneSteakText];

  return createMealsContainer(steakImgSrcs, steakText);
}

//creates a flex row for meals of one type
function createMealsContainer(mealImgSrcs, mealText){
  //Each meal type has a separate container
  const mealsContainer = document.createElement('div');
  mealsContainer.setAttribute('class', 'meals-container');

  //An array of meals of a type
  const meal = createMealDivs(mealImgSrcs, mealText);
  for(let i = 0; i < 3; i++){
    mealsContainer.appendChild(meal[i]);
  }

  return mealsContainer;
}

function createMealDivs(mealImgSrcs, mealText){

  let mealDiv = [];

  //creating burger meal divs using arrays
  for(let i = 0; i < 3; i++){
    mealDiv[i] = document.createElement('div');
    mealDiv[i].setAttribute('class', 'meal');

    const mealImage = document.createElement('img');
    mealImage.setAttribute('src', mealImgSrcs[i]);
    //using the burger name as burger text
    mealImage.setAttribute('alt', mealText[i][0]);

    const mealDescriptionContainer = document.createElement('div');
    mealDescriptionContainer.setAttribute('class','meal-description');

    const mealDescriptionElement = [
      document.createElement('h3'),
      document.createElement('p'),
      document.createElement('p')
    ];

    //the description of one meal
    for(let j = 0; j < 3; j++){
      mealDescriptionElement[j].textContent = mealText[i][j];

      mealDescriptionContainer.appendChild(mealDescriptionElement[j]);
    }

    mealDiv[i].appendChild(mealImage);
    mealDiv[i].appendChild(mealDescriptionContainer);
  }

  return mealDiv;
}
