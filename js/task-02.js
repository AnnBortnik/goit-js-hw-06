const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = element;
  return item;
})
list.prepend(...elements);