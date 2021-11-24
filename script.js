"use strict";

const firstNames = ['Sparkles', 'Cookie', 'Blinky', 'Evrgreen', 'Jingle', 'Elfie', 'Buddy', 'Pixie', 'Cocoa', 'Frosty', 'Mistletoe', 'Twinkle', 'Peppermint', 'Cranberry', 'Snowflake', 'Kringle', 'Snowy', 'Holly', 'Jolly', 'Sprinkles', 'Merry', 'Tipsy', 'Glitzy', 'Starlight', 'Happy', 'Tinker'];
const middleNames = ['Glitter', 'Twinkle', 'Sugar', 'Sleigh', 'Mc', 'Icy', 'Cinnamon', 'Tinsel', 'Toffee', 'Fluffy', 'Ginger', 'Snow', 'Ninny'];
const lastNames = ['balls', 'nose', 'eyes', 'pants', 'shorts', 'toes', 'drawers', 'shoes', 'bum', 'bells', 'jingles', 'nut', 'berries', 'muggins', 'hair', 'giggles',];
const mediumContainer = document.getElementById('container');





document.querySelector('.image').addEventListener('click', function() {
  mediumContainer.innerHTML = "";
  let smallContainer = document.createElement('div');
  smallContainer.id = 'small-container';
  mediumContainer.append(smallContainer);
  let elfName = document.createElement('p');
  elfName.class='elf-name';
  const randomFirstName = () => Math.trunc((Math.random() * firstNames.length));
  const randomMiddleName = () => Math.trunc((Math.random() * middleNames.length));
  const randomLastName = () => Math.trunc((Math.random() * lastNames.length));
  console.log(randomFirstName(), randomMiddleName(), randomLastName());
  elfName.innerHTML = `${firstNames[randomFirstName()]} ${middleNames[randomMiddleName()]}${lastNames[randomLastName()]}`
  smallContainer.append(elfName);
  console.log(elfName);
  
})
