"use strict";

const firstNames = ['Sparkles', 'Cookie', 'Blinky', 'Evergreen', 'Jingle', 'Elfie', 'Buddy', 'Pixie', 'Cocoa', 'Frosty', 'Mistletoe', 'Twinkle', 'Peppermint', 'Cranberry', 'Snowflake', 'Kringle', 'Snowy', 'Holly', 'Jolly', 'Sprinkles', 'Happy', 'Tipsy', 'Glitzy', 'Starlight', 'Happy', 'Tinker'];
const middleNames = ['Glitter', 'Twinkle', 'Sugar', 'Sleigh', "Mc", 'Icy', 'Cinnamon', 'Tinsel', 'Toffee', 'Fluffy', 'Ginger', 'Snow', 'Ninny', 'Dingle', 'Joyful', 'Coal'];
const lastNames = ['balls', 'nose', 'frown', 'pants', 'shorts', 'toes', 'drawers', 'shoes', 'bum', 'bells', 'jingles', 'nuts', 'berries', 'muggins', 'hair', 'giggles', 'bottoms', 'socks', 'stockings', 'belly', ];

const caption = document.getElementById('image-container');
const startOver = document.getElementById('refresh');


document.querySelector('.image').addEventListener('click', function() {
  const removeTitle = document.getElementById('title');
  removeTitle.remove()
  const randomFirstName = () => Math.trunc((Math.random() * firstNames.length));
  const randomMiddleName = () => Math.trunc((Math.random() * middleNames.length));
  const randomLastName = () => Math.trunc((Math.random() * lastNames.length));
  let removeInput = document.getElementById('input');
  removeInput.remove();
  caption.setAttribute('class', 'image-container');
  let image = document.createElement('img');
  image.src="images/christmas-tree.jpg";
  image.alt='christmas-tree';
  image.setAttribute('class', 'christmas-tree');
  caption.append(image);
  let elfName = document.createElement('figcaption');
  elfName.setAttribute('class', 'elf-name');
  elfName.innerHTML = `Merry Christmas <br>"${firstNames[randomFirstName()]} ${middleNames[randomMiddleName()]}${lastNames[randomLastName()]}!!"`
  caption.append(elfName);
  let showBtn = document.getElementById('refresh');
  showBtn.classList.remove('hidden');
  

  
})





