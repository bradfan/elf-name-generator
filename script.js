"use strict";

const firstNames = ['Sparkles', 'Cookie', 'Blinky', 'Evergreen', 'Jingle', 'Elfie', 'Buddy', 'Pixie', 'Cocoa', 'Frosty', 'Mistletoe', 'Twinkle', 'Peppermint', 'Cranberry', 'Snowflake', 'Kringle', 'Snowy', 'Holly', 'Jolly', 'Sprinkles', 'Merry', 'Tipsy', 'Glitzy', 'Starlight', 'Happy', 'Tinker'];
const middleNames = ['Glitter', 'Twinkle', 'Sugar', 'Sleigh', 'Mc', 'Icy', 'Cinnamon', 'Tinsel', 'Toffee', 'Fluffy', 'Ginger', 'Snow', 'Ninny'];
const lastNames = ['balls', 'nose', 'uni-brow', 'pants', 'shorts', 'toes', 'drawers', 'shoes', 'bum', 'bells', 'jingles', 'nut', 'berries', 'muggins', 'hair', 'giggles', 'bottoms', 'socks',];
const mediumContainer = document.getElementById('container');
const hideTitle = document.querySelector('.header')

document.querySelector('.image').addEventListener('click', function() {
  hideTitle.innerHTML = "";
  hideTitle.setAttribute("class", "header");
  let elfName = document.createElement('p');
  elfName.setAttribute('class', 'elf-name');
  const randomFirstName = () => Math.trunc((Math.random() * firstNames.length));
  const randomMiddleName = () => Math.trunc((Math.random() * middleNames.length));
  const randomLastName = () => Math.trunc((Math.random() * lastNames.length));
  elfName.innerHTML = `${firstNames[randomFirstName()]} ${middleNames[randomMiddleName()]}${lastNames[randomLastName()]}`
  hideTitle.append(elfName);
  hideTitle.setAttribute("class", "title-after");
  const removeTitle = document.getElementById('title');
  removeTitle.remove()
  
})




