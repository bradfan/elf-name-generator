"use strict";

const firstNames = ['Sparkles', 'Cookie', 'Blinky', 'Evergreen', 'Jingle', 'Elfie', 'Buddy', 'Pixie', 'Cocoa', 'Frosty', 'Mistletoe', 'Twinkles', 'Peppermint', 'Cranberry', 'Snowflake', 'Kringle', 'Snowy', 'Holly', 'Jolly', 'Sprinkles', 'Alpine', 'Tipsy', 'Glitzy', 'Starlight', 'Bubbly', 'Tinker', 'Nutmeg', 'December', 'Winter', 'Frosting', 'Vanilla', 'Bobo', 'Binky', 'Swizzle', 'Snickers', 'Cuddles', 'Pudge', 'Nougat', 'Custard', 'Flash', 'Hug'];
const prefix = ['', '', 'Mc', 'Von ', '', ''];
const middleNames = ['Glitter', 'Twinkle', 'Sugar', 'Sleigh', 'Icy', 'Cinnamon', 'Tinsel', 'Toffee', 'Fluffy', 'Ginger', 'Snow', 'Ninny', 'Dingle', 'Joyful', 'Coal', 'Sweet', 'Syrupy', 'Sneezy', 'Chocolate', 'Puddin', 'Strudel', 'Blizzard', 'Polar', 'Autumn', 'Grinchy', 'Flaky', 'Midnight', 'Caramel', 'Dongle', 'Twizzle', 'Pumpkin', 'Gold', 'Silver', 'Red', 'Green', 'Happy', 'Windy', 'Shiver', 'Breezy', 'Dasher'];
const lastNames = ['balls', 'nose', 'frown', 'pants', 'shorts', 'toes', 'drawers', 'boots', 'bum', 'bells', 'jingles', 'nuts', 'berries', 'muggins', 'hair', 'giggles', 'bottoms', 'plum', 'stockings', 'belly', 'spice', 'nog', 'ribbon', 'glaze', 'muffins', 'cakes', 'pie', 'knickers', 'whiskers', 'whistle', 'fleece', 'whisper', 'skates', 'scrooge', 'kin', 'toys', 'banky', 'bam', 'skirt', 'spirit'];
console.log('# of first:', firstNames.length, '# of second:', middleNames.length, '# of last:', lastNames.length)

const caption = document.getElementById('image-container');
const startOver = document.getElementById('refresh');

document.querySelector('.image').addEventListener('click', function() {
  const removeTitle = document.getElementById('title');
  removeTitle.remove()
  const randomFirstName = () => Math.trunc((Math.random() * firstNames.length));
  const randomMiddleName = () => Math.trunc((Math.random() * middleNames.length));
  const randomPrefix = () => Math.trunc((Math.random() * prefix.length));
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
  elfName.innerHTML = `Merry Christmas <br>"${firstNames[randomFirstName()]} ${prefix[randomPrefix()]}${middleNames[randomMiddleName()]}${lastNames[randomLastName()]}!!"`
  caption.append(elfName);
  let showBtn = document.getElementById('refresh');
  showBtn.classList.remove('hidden');
    
})






