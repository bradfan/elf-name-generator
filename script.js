"use strict";

const firstNames = ['Sparkles', 'Cookie', 'Blinky', 'Evergreen', 'Jingle', 'Elfie', 'Buddy', 'Pixie', 'Cocoa', 'Frosty', 'Mistletoe', 'Twinkle', 'Peppermint', 'Cranberry', 'Snowflake', 'Kringle', 'Snowy', 'Holly', 'Jolly', 'Sprinkles', 'Merry', 'Tipsy', 'Glitzy', 'Starlight', 'Happy', 'Tinker'];
const middleNames = ['Glitter', 'Twinkle', 'Sugar', 'Sleigh', "Mc", 'Icy', 'Cinnamon', 'Tinsel', 'Toffee', 'Fluffy', 'Ginger', 'Snow', 'Ninny'];
const lastNames = ['balls', 'nose', 'frown', 'pants', 'shorts', 'toes', 'drawers', 'shoes', 'bum', 'bells', 'jingles', 'nut', 'berries', 'muggins', 'hair', 'giggles', 'bottoms', 'socks',];

const caption = document.getElementById('image-container');


document.querySelector('.image').addEventListener('click', function() {
  const removeTitle = document.getElementById('title');
  removeTitle.remove()
  const randomFirstName = () => Math.trunc((Math.random() * firstNames.length));
  const randomMiddleName = () => Math.trunc((Math.random() * middleNames.length));
  const randomLastName = () => Math.trunc((Math.random() * lastNames.length));
  let removeInput = document.getElementById('input');
  removeInput.remove();
  let showImage = document.getElementById('image-container');
  showImage.classList.remove('hidden');
  let elfName = document.createElement('figcaption');
  elfName.setAttribute('class', 'elf-name');
  elfName.innerHTML = `Merry Christmas <br>"${firstNames[randomFirstName()]} ${middleNames[randomMiddleName()]}${lastNames[randomLastName()]}!!"`
  caption.append(elfName);
  
  
})




