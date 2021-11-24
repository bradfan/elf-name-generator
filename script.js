"use strict";

const firstNames = ['Sparkles', 'Cookie', 'Blinky', 'Evergreen', 'Jingle', 'Elfie', 'Buddy', 'Pixie', 'Cocoa', 'Frosty', 'Mistletoe', 'Twinkle', 'Peppermint', 'Cranberry', 'Snowflake', 'Kringle', 'Snowy', 'Holly', 'Jolly', 'Sprinkles', 'Merry', 'Tipsy', 'Glitzy', 'Starlight', 'Happy', 'Tinker'];
const middleNames = ['Glitter', 'Twinkle', 'Sugar', 'Sleigh', "M'", 'Icy', 'Cinnamon', 'Tinsel', 'Toffee', 'Fluffy', 'Ginger', 'Snow', 'Ninny'];
const lastNames = ['balls', 'nose', 'frown', 'pants', 'shorts', 'toes', 'drawers', 'shoes', 'bum', 'bells', 'jingles', 'nut', 'berries', 'muggins', 'hair', 'giggles', 'bottoms', 'socks',];
const mediumContainer = document.getElementById('container');
const hideTitle = document.querySelector('.header');


document.querySelector('.image').addEventListener('click', function() {
  const removeTitle = document.getElementById('title');
  removeTitle.remove()
  hideTitle.innerHTML = "";
  hideTitle.setAttribute("class", "header");
  let elfName = document.createElement('p');
  elfName.setAttribute('class', 'elf-name');
  const randomFirstName = () => Math.trunc((Math.random() * firstNames.length));
  const randomMiddleName = () => Math.trunc((Math.random() * middleNames.length));
  const randomLastName = () => Math.trunc((Math.random() * lastNames.length));
  elfName.innerHTML = `"${firstNames[randomFirstName()]} ${middleNames[randomMiddleName()]}${lastNames[randomLastName()]}"`
  hideTitle.append(elfName);
  hideTitle.setAttribute("class", "banner");
  let showFooter = document.getElementById('footer');
  showFooter.classList.remove('hidden');
  let removeInput = document.getElementById('input');
  removeInput.remove();
  let showImage = document.getElementById('image-container');
  showImage.classList.remove('hidden');
  
  
})




